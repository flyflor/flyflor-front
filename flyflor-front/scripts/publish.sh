#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SSH_TARGET="${SSH_TARGET:-ali}"
REMOTE_APP_DIR="${REMOTE_APP_DIR:-/opt/flyflor-front/current/flyflor-front}"
REMOTE_SERVICE="${REMOTE_SERVICE:-flyflor-front.service}"
HEALTH_URL="${HEALTH_URL:-http://127.0.0.1:19120/zh/docs}"
KEEP_BACKUPS="${KEEP_BACKUPS:-5}"
RUN_CHECK="${RUN_CHECK:-1}"
TIMESTAMP="$(date +%Y%m%d%H%M%S)"
ARCHIVE_NAME="flyflor-front-output.${TIMESTAMP}.tgz"
LOCAL_ARCHIVE="/tmp/${ARCHIVE_NAME}"
REMOTE_ARCHIVE="/tmp/${ARCHIVE_NAME}"

require_command() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "Missing required command: $1" >&2
        exit 1
    fi
}

require_command bun
require_command ssh
require_command scp
require_command tar

cd "$ROOT_DIR"

if [ "$RUN_CHECK" = "1" ]; then
    bun run check
fi

bun run build
test -f .output/server/index.mjs

rm -f "$LOCAL_ARCHIVE"
COPYFILE_DISABLE=1 tar --exclude="._*" --exclude=".DS_Store" -czf "$LOCAL_ARCHIVE" -C .output .

echo "Uploading ${LOCAL_ARCHIVE} to ${SSH_TARGET}:${REMOTE_ARCHIVE}"
scp "$LOCAL_ARCHIVE" "${SSH_TARGET}:${REMOTE_ARCHIVE}"

ssh "$SSH_TARGET" \
    "REMOTE_APP_DIR='$REMOTE_APP_DIR' REMOTE_SERVICE='$REMOTE_SERVICE' HEALTH_URL='$HEALTH_URL' REMOTE_ARCHIVE='$REMOTE_ARCHIVE' TIMESTAMP='$TIMESTAMP' KEEP_BACKUPS='$KEEP_BACKUPS' bash -s" <<'REMOTE_SCRIPT'
set -euo pipefail

cd "$REMOTE_APP_DIR"

rm -rf .output.next
mkdir -p .output.next
tar -xzf "$REMOTE_ARCHIVE" -C .output.next
test -f .output.next/server/index.mjs
find .output.next -name "._*" -type f -delete

if [ -d .output ]; then
    mv .output ".output.prev.${TIMESTAMP}"
fi

mv .output.next .output
systemctl restart "$REMOTE_SERVICE"
sleep 2
systemctl is-active --quiet "$REMOTE_SERVICE"
curl -sS -I --max-time 8 "$HEALTH_URL" | sed -n "1,10p"

find . -maxdepth 1 -type d -name ".output.prev.*" -printf "%T@ %p\n" \
    | sort -nr \
    | awk -v keep="$KEEP_BACKUPS" "NR > keep { print \$2 }" \
    | xargs -r rm -rf

rm -f "$REMOTE_ARCHIVE"
REMOTE_SCRIPT

rm -f "$LOCAL_ARCHIVE"
echo "Published to ${SSH_TARGET}:${REMOTE_APP_DIR}"

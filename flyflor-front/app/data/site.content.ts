export type LocaleCode = "zh" | "en";

export type NavItem = {
    label: string;
    href: string;
};

export type FeatureItem = {
    title: string;
    body: string;
};

export type DocSection = FeatureItem & {
    bullets: string[];
    code?: string;
};

export type CodeBlock = {
    title: string;
    code: string;
};

export type SiteContent = {
    locale: LocaleCode;
    languageLabel: string;
    alternateLabel: string;
    repoUrl: string;
    nav: NavItem[];
    auth: {
        login: string;
        register: string;
        logout: string;
        github: string;
        email: string;
        password: string;
        name: string;
        noAccount: string;
        hasAccount: string;
        accountTitle: string;
        authCopy: string;
    };
    theme: {
        label: string;
        light: string;
        dark: string;
        system: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        primaryAction: string;
        secondaryAction: string;
        sourceAction: string;
    };
    install: {
        title: string;
        body: string;
        blocks: CodeBlock[];
    };
    agent: {
        title: string;
        body: string;
        items: FeatureItem[];
    };
    about: {
        title: string;
        body: string;
        principles: FeatureItem[];
    };
    docs: {
        title: string;
        body: string;
        sections: DocSection[];
    };
    market: {
        title: string;
        body: string;
        skill: string;
        mcp: string;
        install: string;
        source: string;
        downloads: string;
        stars: string;
    };
    bbs: {
        title: string;
        body: string;
        admin: string;
        announcements: string;
        leaderboard: string;
        newTopic: string;
        titlePlaceholder: string;
        bodyPlaceholder: string;
        submit: string;
        loginPrompt: string;
        replies: string;
        views: string;
    };
    footer: {
        tagline: string;
        repo: string;
        docs: string;
    };
};

export const defaultLocale: LocaleCode = "zh";
export const supportedLocales: LocaleCode[] = ["zh", "en"];
export const githubUrl = "https://github.com/flyflor/flyflor";

const installBlocksZh: CodeBlock[] = [
    {
        title: "二进制安装",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.sh | bash",
    },
    {
        title: "源码安装",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.source.sh | bash",
    },
    {
        title: "Docker 安装",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.docker.sh | bash",
    },
    {
        title: "Windows 源码安装",
        code: 'powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.ps1 | iex"',
    },
];

const installBlocksEn: CodeBlock[] = [
    {
        title: "Binary install",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.sh | bash",
    },
    {
        title: "Source install",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.source.sh | bash",
    },
    {
        title: "Docker install",
        code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.docker.sh | bash",
    },
    {
        title: "Windows source install",
        code: 'powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.ps1 | iex"',
    },
];

export const siteContent: Record<LocaleCode, SiteContent> = {
    zh: {
        locale: "zh",
        languageLabel: "中文",
        alternateLabel: "English",
        repoUrl: githubUrl,
        nav: [
            {
                href: "/zh",
                label: "首页",
            },
            {
                href: "/zh/about",
                label: "介绍",
            },
            {
                href: "/zh/docs",
                label: "文档",
            },
            {
                href: "/zh/market",
                label: "市场",
            },
            {
                href: "/zh/bbs",
                label: "社区",
            },
        ],
        auth: {
            accountTitle: "开发者账号",
            authCopy: "Flyflor 只提供 GitHub 登录。继续后会自动创建或绑定开发者账号。",
            email: "邮箱",
            github: "使用 GitHub 继续",
            hasAccount: "已有账号？",
            login: "GitHub 登录",
            logout: "退出",
            name: "昵称",
            noAccount: "还没有账号？",
            password: "密码",
            register: "通过 GitHub 加入",
        },
        theme: {
            dark: "深色",
            label: "主题",
            light: "浅色",
            system: "跟随系统",
        },
        hero: {
            eyebrow: "Agent OS for Real Work",
            primaryAction: "一键安装",
            secondaryAction: "阅读文档",
            sourceAction: "GitHub 源码",
            subtitle:
                "Flyflor 是一个 Bun + TypeScript 智能体运行时：用流体智力、晶体智力和海马体记忆组织渠道、项目、fork、黑板、沙箱、MCP、Skill 与多模型 provider。",
            title: "Flyflor",
        },
        install: {
            blocks: installBlocksZh,
            body: "正式版提供二进制、源码、Docker 和 Windows bootstrap 四个入口。源码与 Docker 路径都会把仓库保留在本机，方便自我迭代和后续 git pull。",
            title: "安装方式",
        },
        agent: {
            body: "Flyflor 的目标不是做一个聊天壳，而是把 runtime、gateway、blackboard、sandbox、memory、project/fork 和 MCP 拆成清晰边界。",
            items: [
                {
                    body: "API、STDIO、Webhook、Telegram、Discord、Slack、飞书、LINE、Mattermost、微信、企微、钉钉等 31 个 channel 统一归一为 GatewayMessage。",
                    title: "31 个渠道入口",
                },
                {
                    body: "Project 是显式工作约束，ContextFork 是显式分支；二者都不是 session，不靠 chatId、cwd 或自然语言猜测连续性。",
                    title: "多项目与 Fork",
                },
                {
                    body: "简单问题直接回复，复杂任务进入黑板；worker 在 lease、contract 和收敛策略内讨论，再把结果交回 runtime。",
                    title: "黑板协作",
                },
                {
                    body: "brain.db 记录 append-only 生命事件，Crystal 把验证过的经验升格为 Gem，Dream 在空闲时做漂移修复与召回强化。",
                    title: "生命体记忆",
                },
            ],
            title: "Agent 基础能力",
        },
        about: {
            body: "设计哲学是 LLM 负责当下推理，记忆系统负责沉淀、召回和偏移修正；复杂度只在必要时上升，所有协议边界显式管理。",
            principles: [
                {
                    body: "不靠单轮堆叠上下文，而靠 Markdown 宪法层、brain.db 生命事件、工作记忆和 Crystal Gem 把经验压成稳定能力。",
                    title: "三层智能",
                },
                {
                    body: "direct、direct-with-watch 和 blackboard 由资源指标与模型结构化路由共同决定，协作成本不会默认压到每个请求上。",
                    title: "按需协作",
                },
                {
                    body: "业务语义不靠关键词和 includes，必须来自模型同轮结构化字段、专用 JSON 输出或纯数值资源指标。",
                    title: "零字符匹配",
                },
                {
                    body: "Gateway、Blackboard、Runtime、Memory、Sandbox、Context、Crystal、MCP、Skill 和 Plugin 都有独立 owner、事件和审计面。",
                    title: "显式边界",
                },
            ],
            title: "为什么是 Flyflor",
        },
        docs: {
            body: "这份官网文档对齐当前智能体项目：安装、模型配置、运行流程、31 个渠道、记忆系统、黑板、多项目、fork、Skill/MCP、沙箱和 CLI 运维。",
            sections: [
                {
                    body: "二进制入口只安装 release 产物和模板包；源码与 Docker 入口会把源码 checkout 留在本机，便于后续修改、自迭代和 git pull。",
                    bullets: [
                        "配置固定读取 ~/.flyflor/config.jsonc，Docker dev 对应 ./docker/config/config.jsonc。",
                        "install.sh 只负责 release 二进制；install.source.sh、install.docker.sh 和 install.ps1 负责源码路径。",
                        "不要把 provider、模型、渠道凭据和沙箱策略写进业务环境变量。",
                        "首次运行建议先执行 doctor，再进入 chat 或 TUI。",
                    ],
                    code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.sh | bash\nflyflor doctor\nflyflor status\nflyflor chat",
                    title: "快速开始",
                },
                {
                    body: "Flyflor 使用 JSONC 配置模型、渠道、沙箱和网关行为。OpenAI-compatible provider 的最小配置是 baseUrl、apiKey 和当前模型，加载器会归一化 provider profile。",
                    bullets: [
                        "全局配置固定在 ~/.flyflor/config.jsonc；Docker dev 配置在 ./docker/config/config.jsonc。",
                        "业务模块不直接读取密钥，也不把密钥编译进二进制。",
                        "Runtime 默认走流式生成；provider client 不支持 stream 时才降级为完整 final delta。",
                        "默认值在代码里有清晰约定，配置只覆盖差异；不要让环境变量承担业务配置。",
                    ],
                    code: "{\n    \"model\": {\n        \"activeProvider\": \"openai\",\n        \"activeModel\": \"gpt-5.5\",\n        \"providers\": {\n            \"openai\": {\n                \"baseUrl\": \"https://api.openai.com\",\n                \"apiKey\": \"openai-api-key\",\n                \"defaultModel\": \"gpt-5.5\"\n            }\n        },\n        \"secrets\": {\n            \"openai-api-key\": \"...\"\n        }\n    }\n}",
                    title: "配置模型",
                },
                {
                    body: "入口只做版本输出与命令分派，FlyFlor composition root 显式装配配置、模板、事件、模型、Gateway、Runtime、Blackboard、Worker 和 Memory。",
                    bullets: [
                        "Runtime 热路径分为 prepare、assemble、generate、persist、async 五个 phase。",
                        "Gateway 只做渠道归一和状态快照，不读取模型、不写记忆。",
                        "Blackboard 只管理 turn、step、decision 和 lease，不执行工具、不写长期记忆。",
                        "ContextComponent 只装配显式 project / fork / capability scope，不承载隐式 session。",
                    ],
                    title: "架构边界",
                },
                {
                    body: "单轮请求从 GatewayMessage 进入 Runtime：先算 embedding 和 fastRoute，再并发装配 Skill、MCP、memory context，必要时进入 blackboard，最后解析结构化块并落库。",
                    bullets: [
                        "fastRoute 只允许 token 预算、route hint TTL 和 embedding 相似度三类资源指标。",
                        "路由 LLM 只返回 direct、direct-with-watch 或 blackboard 的结构化 JSON。",
                        "模型输出的 MemoryActions、AgentAsk、GhostDecisions、IdentityAppend、TaskPlan、ContextFork、SceneRecord 都按协议解析。",
                        "外部聊天渠道 final-only 投递；Runtime 内部仍可给 TUI/API SSE 做流式输出。",
                    ],
                    title: "单轮运行流程",
                },
                {
                    body: "Flyflor 当前支持 31 个 channel，保留 thread、引用回复、typing、mention、reaction、编辑、删除、卡片更新等结构化通信细节。",
                    bullets: [
                        "核心入口：API、STDIO、Webhook。",
                        "官方协议或独立适配：WeChat official account、WeCom Callback、Weixin iLink、Telegram、Discord、Feishu、Slack、Line、Mattermost、DingTalk、BlueBubbles / iMessage。",
                        "共享 HTTP 协议适配：API Server、Google Chat、IRC、Email、Home Assistant、Matrix、MS Graph Webhook、QQ、QQBot、Signal、SMS、Teams、WeCom、WhatsApp、Yuanbao、Zalo。",
                        "平台不支持的出站能力会显式 no-op 或 final text 降级，不走不稳定 bridge。",
                    ],
                    title: "渠道与 Gateway",
                },
                {
                    body: "记忆被切成 Markdown 宪法层、brain.db 生命事件层、MemoryComponent 工作记忆、SQLite 辅助索引和 CrystalComponent 本地晶体图。",
                    bullets: [
                        "brain.db 是 prompt atom recall 与 turn event write 的热路径权威源，记录 ask、ghost、identity、project、TaskPlan、ContextFork、SceneRecord 等摘要。",
                        "工作记忆使用 WAL/snapshot、TTL 遗忘、最近交流 ring 和热记忆压缩审计。",
                        "CrystalComponent 使用 crystal.db + VectorIndex 管理 episode、memory_node、gem、gem_snapshot 和 summary_embedding。",
                        "Dream worker 只维护晶体层，执行 drift-repair、recall-reinforce、contradiction-audit，不凭空创造记忆。",
                    ],
                    title: "记忆与 Crystal",
                },
                {
                    body: "Flyflor 明确取消 session 容器。项目和 fork 都是结构化作用域：只有调用方显式传入 RuntimeContext，MemoryComponent 才把对应范围注入 prompt。",
                    bullets: [
                        "/project [path] 会创建或复用项目骨架，初始化 AGENTS.md、TODO.md、README.md 和 .flyflor/{memory,skills,mcp,plugins}。",
                        "/projects 从 brain.db.projects 选择并激活项目；后续 turn 是否使用项目只看 RuntimeContext.activeProject。",
                        "/fork 从历史 turn 摘要创建 ContextFork，/forks 选择已保存 fork；brain.db 只存摘要，低频 replay sidecar 放在 ~/.flyflor/storage/forks/。",
                        "TaskPlan、ContextFork 和 SceneRecord 只保存计划、范围与场景摘要，不保存原始推理轨迹。",
                    ],
                    code: "/project /Users/me/work/app\n/projects\n/fork\n/forks",
                    title: "多项目与 Fork",
                },
                {
                    body: "复杂任务进入黑板，由 route prompt 生成 contract、worker plan 和收敛策略。黑板同一 project constraint 同时只允许一个 turn，避免协作状态互相踩踏。",
                    bullets: [
                        "模式包括 direct、direct-with-watch 和 blackboard；watch 连续命中或失败计数会升级到 blackboard。",
                        "worker 数量受限，输出必须符合结构化 envelope；无法收敛时 runtime 合成 AgentAsk 交回用户。",
                        "收敛黑板会写高权重 episode，ReflectionWorker 再把验证信号送入 Crystal 候选链。",
                    ],
                    title: "黑板协作",
                },
                {
                    body: "Skill 是可安装、可复用的工作流能力；MCP 是外部工具协议；Plugin 是本地扩展执行面。三者共享能力声明、选择、审计和沙箱入口，但运行边界不同。",
                    bullets: [
                        "Skill manifest 描述触发条件、输入边界、产出、验证方式和 usage 统计。",
                        "MCP 支持 stdio、Streamable HTTP 和 legacy SSE，tools/list 默认 30 秒 TTL 缓存。",
                        "MCP tool、plugin 和 shell-hook 都必须进入 gateCapabilityExecution，不能从业务模块旁路执行。",
                    ],
                    code: "flyflor skills list\nflyflor mcp list\nflyflor plugins list\nflyflor tools enable <toolsets...>",
                    title: "Skill、MCP 与 Plugin",
                },
                {
                    body: "Shell、文件写入、插件、MCP 和网络工具都必须经过同一套 SandboxPolicy capability，不允许绕过审批链路。",
                    bullets: [
                        "副作用工具要声明 capability、生命周期和可审计事件。",
                        "高风险动作进入审批或拒绝路径，不由业务模块临时判断。",
                        "YOLO 模式只放宽默认审批为 allow，不能绕过审计、cwd、超时、输出限制和协议校验。",
                        "跨进程消息必须 JSON 可序列化，子进程必须有 start、ready、heartbeat、stop、crash、restart backoff 生命周期。",
                    ],
                    title: "工具与沙箱",
                },
                {
                    body: "CLI 由 commander 装配，既支持非交互脚本，也支持 TTY navigator。运维入口覆盖网关服务、渠道状态、记忆、黑板、Skill、MCP、Plugin、Dream、Sandbox 和更新。",
                    bullets: [
                        "flyflor gateway service plan --target systemd --write 只写服务文件，不自动 enable/start。",
                        "flyflor doctor --fix 创建缺失目录；status、channels、config、skills、mcp 等命令在 TTY 下会进入导航器。",
                        "flyflor dream status/run 可以查看或手动触发晶体层维护；memory retrospective 查看整合审计。",
                        "发布前本地跑 bun run check、bun run test、bun run smoke:agent 和 release checks，真实模型烟测单独执行。",
                    ],
                    code: "flyflor channels\nflyflor blackboard\nflyflor memory status\nflyflor dream status\nflyflor sandbox list",
                    title: "CLI 与运维",
                },
            ],
            title: "开发者文档",
        },
        market: {
            body: "Skill、MCP、OpenClaw 和 Hermes 兼容能力统一进入市场。第一版提供官方精选、安装命令和源码入口，后续接入发布、评分和版本治理。",
            downloads: "下载",
            install: "安装命令",
            mcp: "MCP",
            skill: "Skill",
            source: "源码",
            stars: "收藏",
            title: "插件市场",
        },
        bbs: {
            admin: "管理",
            announcements: "官方公告",
            body: "开发者社区用于沉淀公告、问题、经验和生态共创。这里不再拆 Skill/MCP 分区，所有讨论进入同一个信息流。",
            bodyPlaceholder: "写下你的集成经验、问题上下文或方案说明",
            leaderboard: "贡献榜",
            loginPrompt: "登录后发布新主题",
            newTopic: "发布主题",
            replies: "回复",
            submit: "发布",
            title: "开发者社区",
            titlePlaceholder: "主题标题",
            views: "浏览",
        },
        footer: {
            docs: "Docs",
            repo: "GitHub",
            tagline: "让智能体可观察、可中断、可恢复、可审计。",
        },
    },
    en: {
        locale: "en",
        languageLabel: "English",
        alternateLabel: "中文",
        repoUrl: githubUrl,
        nav: [
            {
                href: "/en",
                label: "Home",
            },
            {
                href: "/en/about",
                label: "About",
            },
            {
                href: "/en/docs",
                label: "Docs",
            },
            {
                href: "/en/market",
                label: "Market",
            },
            {
                href: "/en/bbs",
                label: "Community",
            },
        ],
        auth: {
            accountTitle: "Developer account",
            authCopy: "Flyflor only supports GitHub sign-in. Continue to create or link your developer account automatically.",
            email: "Email",
            github: "Continue with GitHub",
            hasAccount: "Already have an account?",
            login: "Login with GitHub",
            logout: "Logout",
            name: "Name",
            noAccount: "No account yet?",
            password: "Password",
            register: "Join with GitHub",
        },
        theme: {
            dark: "Dark",
            label: "Theme",
            light: "Light",
            system: "System",
        },
        hero: {
            eyebrow: "Agent OS for Real Work",
            primaryAction: "Install",
            secondaryAction: "Read docs",
            sourceAction: "GitHub source",
            subtitle:
                "Flyflor is a Bun + TypeScript agent runtime that organizes fluid intelligence, crystallized intelligence, hippocampal memory, channels, projects, forks, blackboards, sandbox approval, MCP, Skills, and multi-provider models.",
            title: "Flyflor",
        },
        install: {
            blocks: installBlocksEn,
            body: "The release path now has binary, source, Docker, and Windows bootstrap entrypoints. Source and Docker installs keep the repository on the local machine for self-iteration and later git pull updates.",
            title: "Install paths",
        },
        agent: {
            body: "Flyflor is not a chat wrapper. It separates runtime, gateway, blackboard, sandbox, memory, project/fork scope, and MCP into explicit operating boundaries.",
            items: [
                {
                    body: "API, STDIO, Webhook, Telegram, Discord, Slack, Feishu, LINE, Mattermost, WeChat, WeCom, DingTalk, and more normalize 31 channels into GatewayMessage.",
                    title: "31 channel entries",
                },
                {
                    body: "Project is an explicit work constraint, and ContextFork is an explicit branch. Neither is a session, and neither is guessed from chatId, cwd, or natural language.",
                    title: "Projects and forks",
                },
                {
                    body: "Simple requests answer directly. Complex work enters the blackboard, where workers discuss under leases, contracts, and convergence policy before runtime acts.",
                    title: "Blackboard collaboration",
                },
                {
                    body: "brain.db stores append-only life events, Crystal promotes proven experience into Gems, and Dream repairs drift or reinforces recall while the user is idle.",
                    title: "Life-form memory",
                },
            ],
            title: "Agent capabilities",
        },
        about: {
            body: "The design philosophy is that the LLM handles current reasoning while memory handles consolidation, recall, and drift correction. Complexity rises only when needed, and every protocol boundary is explicit.",
            principles: [
                {
                    body: "Flyflor does not rely on piling context into one turn. Markdown constitution, brain.db life events, working memory, and Crystal Gems compress experience into stable capability.",
                    title: "Three intelligence layers",
                },
                {
                    body: "direct, direct-with-watch, and blackboard routing are driven by resource metrics and model-returned structured decisions, so collaboration cost is not paid by every request.",
                    title: "Collaboration on demand",
                },
                {
                    body: "Business semantics never use keywords or includes; they come from model-returned structured fields, dedicated JSON prompts, or pure numeric resource metrics.",
                    title: "Zero text matching",
                },
                {
                    body: "Gateway, Blackboard, Runtime, Memory, Sandbox, Context, Crystal, MCP, Skill, and Plugin all have distinct owners, events, and audit surfaces.",
                    title: "Explicit boundaries",
                },
            ],
            title: "Why Flyflor",
        },
        docs: {
            body: "These docs align with the current agent project: install paths, model config, turn flow, 31 channels, memory, blackboard work, projects, forks, Skill/MCP, sandboxing, and CLI operations.",
            sections: [
                {
                    body: "The binary entrypoint installs only release artifacts and the template bundle. Source and Docker entrypoints keep a source checkout locally for future edits, self-iteration, and git pull updates.",
                    bullets: [
                        "Config is fixed at ~/.flyflor/config.jsonc; Docker dev uses ./docker/config/config.jsonc.",
                        "install.sh owns release binaries; install.source.sh, install.docker.sh, and install.ps1 own source-based paths.",
                        "Do not push provider, model, channel credentials, or sandbox policy into business environment variables.",
                        "Run doctor before entering chat or TUI on a new machine.",
                    ],
                    code: "curl -fsSL https://raw.githubusercontent.com/flyflor/flyflor/master/scripts/install.sh | bash\nflyflor doctor\nflyflor status\nflyflor chat",
                    title: "Quick start",
                },
                {
                    body: "Flyflor configures models, channels, sandbox policy, and gateway behavior through JSONC. The minimal OpenAI-compatible provider config is baseUrl, apiKey, and the active model; the loader normalizes provider profiles.",
                    bullets: [
                        "Global config lives at ~/.flyflor/config.jsonc; Docker dev uses ./docker/config/config.jsonc.",
                        "Business modules never read secrets directly or compile secrets into binaries.",
                        "Runtime streams by default; it falls back to one complete final delta only when a provider client has no stream method.",
                        "Defaults live in code as conventions, and config only overrides differences. Do not move business configuration into environment variables.",
                    ],
                    code: "{\n    \"model\": {\n        \"activeProvider\": \"openai\",\n        \"activeModel\": \"gpt-5.5\",\n        \"providers\": {\n            \"openai\": {\n                \"baseUrl\": \"https://api.openai.com\",\n                \"apiKey\": \"openai-api-key\",\n                \"defaultModel\": \"gpt-5.5\"\n            }\n        },\n        \"secrets\": {\n            \"openai-api-key\": \"...\"\n        }\n    }\n}",
                    title: "Configuration model",
                },
                {
                    body: "The entrypoint only handles version output and command dispatch. The FlyFlor composition root explicitly wires config, templates, events, model client, Gateway, Runtime, Blackboard, Worker, and Memory.",
                    bullets: [
                        "The Runtime hot path is split into prepare, assemble, generate, persist, and async phases.",
                        "Gateway only normalizes channels and exposes status snapshots; it does not read models or write memory.",
                        "Blackboard only owns turns, steps, decisions, and leases; it does not execute tools or write long-term memory.",
                        "ContextComponent only assembles explicit project / fork / capability scope and never becomes an implicit session container.",
                    ],
                    title: "Architecture boundaries",
                },
                {
                    body: "A turn enters Runtime as GatewayMessage: embedding and fastRoute run first, Skill, MCP, and memory context assemble in parallel, blackboard runs when needed, then structured blocks are parsed and persisted.",
                    bullets: [
                        "fastRoute only uses three resource metrics: token budget, route hint TTL, and embedding similarity.",
                        "The route LLM returns only structured JSON for direct, direct-with-watch, or blackboard.",
                        "MemoryActions, AgentAsk, GhostDecisions, IdentityAppend, TaskPlan, ContextFork, and SceneRecord are parsed through registered protocols.",
                        "External chat channels receive final-only delivery. Runtime can still stream internally to TUI and API SSE.",
                    ],
                    title: "Turn flow",
                },
                {
                    body: "Flyflor currently supports 31 channels while preserving structured communication details such as threads, quote replies, typing, mentions, reactions, edits, deletes, and card updates.",
                    bullets: [
                        "Core entries: API, STDIO, and Webhook.",
                        "Official or independent adapters: WeChat official account, WeCom Callback, Weixin iLink, Telegram, Discord, Feishu, Slack, Line, Mattermost, DingTalk, and BlueBubbles / iMessage.",
                        "Shared HTTP protocol adapters: API Server, Google Chat, IRC, Email, Home Assistant, Matrix, MS Graph Webhook, QQ, QQBot, Signal, SMS, Teams, WeCom, WhatsApp, Yuanbao, and Zalo.",
                        "Unsupported outbound capabilities become explicit no-op or final text fallback instead of unstable bridges.",
                    ],
                    title: "Channels and Gateway",
                },
                {
                    body: "Memory is split into Markdown constitution, brain.db life events, MemoryComponent working memory, SQLite support indexes, and the local CrystalComponent graph.",
                    bullets: [
                        "brain.db is the hot-path authority for prompt atom recall and turn event writes, including ask, ghost, identity, project, TaskPlan, ContextFork, and SceneRecord summaries.",
                        "Working memory uses WAL/snapshot, TTL forgetting, a recent conversation ring, and isolated hot-memory compression audits.",
                        "CrystalComponent uses crystal.db plus VectorIndex to manage episode, memory_node, gem, gem_snapshot, and summary_embedding records.",
                        "Dream only maintains the crystal layer through drift-repair, recall-reinforce, and contradiction-audit. It does not invent memory from nothing.",
                    ],
                    title: "Memory and Crystal",
                },
                {
                    body: "Flyflor explicitly removes session containers. Projects and forks are structured scopes: MemoryComponent injects them into the prompt only when the caller passes the matching RuntimeContext.",
                    bullets: [
                        "/project [path] creates or reuses a project skeleton with AGENTS.md, TODO.md, README.md, and .flyflor/{memory,skills,mcp,plugins}.",
                        "/projects selects and activates a project from brain.db.projects; later turns use project memory only through RuntimeContext.activeProject.",
                        "/fork creates a ContextFork from historical turn summaries, and /forks selects saved forks. brain.db keeps the summary index while low-frequency replay sidecars live under ~/.flyflor/storage/forks/.",
                        "TaskPlan, ContextFork, and SceneRecord store progress, scope, and reusable scene summaries, never raw reasoning traces.",
                    ],
                    code: "/project /Users/me/work/app\n/projects\n/fork\n/forks",
                    title: "Projects and Forks",
                },
                {
                    body: "Complex work enters the blackboard, where the route prompt creates a contract, worker plan, and convergence policy. One project constraint can run only one blackboard turn at a time.",
                    bullets: [
                        "Modes are direct, direct-with-watch, and blackboard. Repeated watch hits or failure counters escalate to blackboard.",
                        "Worker count is bounded, output must follow the structured envelope, and Runtime synthesizes AgentAsk when the board cannot converge.",
                        "A converged blackboard writes a high-weight episode, and ReflectionWorker forwards verified signals into the Crystal candidate path.",
                    ],
                    title: "Blackboard collaboration",
                },
                {
                    body: "Skill is an installable reusable workflow capability, MCP is an external tool protocol, and Plugin is the local extension execution surface. They share capability declarations, selection, audit, and sandbox entrypoints while keeping distinct runtime boundaries.",
                    bullets: [
                        "Skill manifests describe trigger conditions, input boundaries, output shape, verification, and usage statistics.",
                        "MCP supports stdio, Streamable HTTP, and legacy SSE; tools/list uses a 30 second TTL cache by default.",
                        "MCP tools, plugins, and shell hooks must enter gateCapabilityExecution and cannot execute through business-module bypasses.",
                    ],
                    code: "flyflor skills list\nflyflor mcp list\nflyflor plugins list\nflyflor tools enable <toolsets...>",
                    title: "Skill, MCP, and Plugin",
                },
                {
                    body: "Shell, file writes, plugins, MCP, and network tools all go through the same SandboxPolicy capability model. Business modules must not bypass approval paths.",
                    bullets: [
                        "Side-effecting tools declare capability, lifecycle, and auditable events.",
                        "High-risk actions enter approval or rejection paths instead of local ad hoc checks.",
                        "YOLO mode only relaxes the default approval decision to allow; it still cannot bypass audit, cwd, timeout, output limits, or protocol validation.",
                        "Cross-process messages must be JSON-serializable, and child processes must expose start, ready, heartbeat, stop, crash, and restart backoff lifecycle.",
                    ],
                    title: "Tools and sandbox",
                },
                {
                    body: "The CLI is assembled with commander and supports both scripts and the TTY navigator. Operations cover gateway services, channel status, memory, blackboards, Skills, MCP, Plugins, Dream, Sandbox, and updates.",
                    bullets: [
                        "flyflor gateway service plan --target systemd --write writes only the service file and leaves enable/start explicit.",
                        "flyflor doctor --fix creates missing directories. status, channels, config, skills, mcp, and similar commands open the navigator when running in a TTY.",
                        "flyflor dream status/run inspects or manually triggers crystal-layer maintenance; memory retrospective shows consolidation audits.",
                        "Before release, run bun run check, bun run test, bun run smoke:agent, and release checks locally; real-model smoke tests stay separate.",
                    ],
                    code: "flyflor channels\nflyflor blackboard\nflyflor memory status\nflyflor dream status\nflyflor sandbox list",
                    title: "CLI and operations",
                },
            ],
            title: "Developer documentation",
        },
        market: {
            body: "Skill, MCP, OpenClaw, and Hermes-compatible capabilities live in one market. The first version ships curated entries, install commands, and source links before publishing and rating flows.",
            downloads: "Downloads",
            install: "Install command",
            mcp: "MCP",
            skill: "Skill",
            source: "Source",
            stars: "Stars",
            title: "Plugin market",
        },
        bbs: {
            admin: "Admin",
            announcements: "Official announcements",
            body: "The developer community collects announcements, questions, integration notes, and ecosystem work in one feed. Skill and MCP posts are no longer split into separate boards.",
            bodyPlaceholder: "Share integration notes, context, or a proposed approach",
            leaderboard: "Leaderboard",
            loginPrompt: "Login to publish a topic",
            newTopic: "New topic",
            replies: "replies",
            submit: "Publish",
            title: "Developer Community",
            titlePlaceholder: "Topic title",
            views: "views",
        },
        footer: {
            docs: "Docs",
            repo: "GitHub",
            tagline: "Build agents that can be observed, interrupted, resumed, and audited.",
        },
    },
};

import { blog, burgerBuilder, board, htmlTableCreator, slack, cookle, slimline } from "../assets";

export const works = [
  {
    title: "HTML Table Creator",
    image: htmlTableCreator,
    detail: "HTMLの<TABLE>タグをGUIで作成できるWebアプリ",
    skills: ["React.js", "TypeScript", "Context API", "Netlify Form"],
    link: "https://github.com/Kudoas/html-table-creator",
  },
  {
    title: "SlimLine",
    image: slimline,
    detail:
      "オンラインでパーソナルトレーニングを行いたいトレーナーのためのサービス。講師が自分のサイトを持てるようWebサイトを簡単に作成でき、決済・予約・オンラインルームの作成をサービスで全て行える。Treasureで出会った4人で作成した。",
    skills: [
      "Go",
      "PAY.jp",
      "SendGrid",
      "Zoom API",
      "Firebase Authentication",
      "TypeScript",
      "React.js",
      "EC2",
      "ECS",
      "Docker",
      "New Relic",
    ],
    link: "https://github.com/kudoas/slimline",
  },
  {
    title: "Cookle",
    image: cookle,
    detail: "自炊のモチベーション管理を目的したSNS型アプリ。楽天インターン期間中に6名で作成した。",
    skills: ["Flask", "React.js", "GCP", "S3", "SQLite"],
    link: "https://github.com/Kudoas/Cookle",
  },
  {
    title: "（旧ブログ）Kudoaの自習室",
    image: blog,
    detail: "日々学習したことや知見を共有するためのブログ",
    skills: ["gatsby.js", "GraphQL", "S3", "Netlify"],
    link: "https://github.com/Kudoas/portofolio-site",
  },
  {
    title: "Burger Builder",
    image: burgerBuilder,
    detail: "オーダーメイドのハンバーガーを注文できるデモアプリ",
    skills: [
      "Responsive Design",
      "React.js",
      "Redux",
      "Firebase Realtime Database",
      "Firebase Authentication",
    ],
    link: "https://github.com/Kudoas/burger-builder",
  },
  {
    title: "積読管理用のSlack Bot",
    image: slack,
    detail: "週に一回登録した本を通知してくれるslack bot",
    skills: ["GAS", "SlackWebhook API", "SpreadSheet API"],
    link: "https://github.com/Kudoas/book-recommendation-bot",
  },
  {
    title: "Simpleな掲示板",
    image: board,
    detail: "初めて作成したWebアプリ。フレームワークにのった開発やデータモデリングをここで学んだ。",
    skills: ["Django", "BootStrap4", "PostgresQL", "S3", "Docker", "Heroku", "AWS S3"],
    link: "https://github.com/Kudoas/KudoLog",
  },
];

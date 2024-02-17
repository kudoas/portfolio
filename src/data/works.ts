import { htmlTableCreator, cookle, slimline } from "../assets";

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
];

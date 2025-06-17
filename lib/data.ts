import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


// Removed headerLanguageMap as we now use proper i18n

export const experiencesData = [
    {
        title: "MSc in Computing and IT",
        location: "University of St Andrews, UK",
        description:
            "Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
        icon: React.createElement(LuGraduationCap),
        date: "2023 Sep - 2024 May",
    },
    {
        title: "Frontend Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " Wuhan, China"
        ),
        description:
            "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
        icon: React.createElement(FaVuejs),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Frontend Assistant",
        location: "Wuhan University | Wuhan, China",
        description:
            "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
        icon: React.createElement(FaReact),
        date: "2022 May - 2022 July",
    },
    {
        title: "BA in Digital Publishing",
        location: "Wuhan University, China",
        description:
            "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 Sep - 2023 Jun",
    },

]

// Removed experiencesDataZn as we now use single data source with i18n


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Ethical Digital Nation Collaborative Platform",
        "title_ja": "デジタル倫理国家協力プラットフォーム",
        "title_fr": "Plateforme Collaborative de Nation Numérique Éthique",
        "title_de": "Ethische Digitale Nation Kollaborationsplattform",
        "description": "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics. (Disclaimer: I mostly copied code from tutorials and somehow it works!)",
        "desc_ja": "スコットランドの高等教育機関間でのデジタル倫理協力を促進する協力プラットフォーム。（免責事項：主にチュートリアルからコードをコピーして、なぜか動いています！）",
        "desc_fr": "Une plateforme collaborative améliorant la coopération entre les institutions d'enseignement supérieur écossaises en éthique numérique. (Avertissement : j'ai principalement copié du code de tutoriels et ça marche d'une manière ou d'une autre !)",
        "desc_de": "Eine kollaborative Plattform zur Verbesserung der Zusammenarbeit zwischen schottischen Hochschuleinrichtungen in der digitalen Ethik. (Haftungsausschluss: Ich habe hauptsächlich Code aus Tutorials kopiert und irgendwie funktioniert es!)",
        "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://github.com/Codefreyy/Ethical-Digital-Nation",
        "demoUrl": "https://yujie-ethical-digital-nation.netlify.app/"
    },
    {
        title: "Typing Speed Test",
        title_ja: "タイピング速度テスト",
        title_fr: "Test de Vitesse de Frappe",
        title_de: "Tippgeschwindigkeitstest",
        description: "A typing speed test that makes me feel bad about my own typing skills. Ironically, I spent more time debugging this than actually improving my typing speed.",
        desc_ja: "私自身のタイピングスキルについて悪い気分にさせるタイピング速度テスト。皮肉なことに、実際にタイピング速度を向上させるよりもデバッグに多くの時間を費やしました。",
        desc_fr: "Un test de vitesse de frappe qui me fait me sentir mal à propos de mes propres compétences de frappe. Ironiquement, j'ai passé plus de temps à déboguer ceci qu'à améliorer ma vitesse de frappe.",
        desc_de: "Ein Tippgeschwindigkeitstest, der mich schlecht über meine eigenen Tippfähigkeiten fühlen lässt. Ironischerweise habe ich mehr Zeit mit dem Debuggen verbracht als tatsächlich meine Tippgeschwindigkeit zu verbessern.",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/Codefreyy/typing-speed-game',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Breddit (Reddit Clone)",
        title_ja: "Breddit（Redditクローン）",
        title_fr: "Breddit (Clone de Reddit)",
        title_de: "Breddit (Reddit-Klon)",
        description: "A Reddit clone that probably has more bugs than features. I spent 80% of the time trying to make authentication work and 20% wondering why I chose to clone Reddit of all things.",
        desc_ja: "機能よりもバグの方が多いであろうRedditクローン。認証を動作させようとして80%の時間を費やし、20%の時間をなぜRedditをクローンすることを選んだのかと疑問に思って過ごしました。",
        desc_fr: "Un clone de Reddit qui a probablement plus de bugs que de fonctionnalités. J'ai passé 80% du temps à essayer de faire fonctionner l'authentification et 20% à me demander pourquoi j'ai choisi de cloner Reddit entre toutes les choses.",
        desc_de: "Ein Reddit-Klon, der wahrscheinlich mehr Bugs als Features hat. Ich habe 80% der Zeit damit verbracht, die Authentifizierung zum Laufen zu bringen, und 20% damit, mich zu fragen, warum ich ausgerechnet Reddit klonen wollte.",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS"],
        imageUrl: breadditImage,
        projectUrl: 'https://github.com/Codefreyy/Breddit',
        demoUrl: 'https://joy-breddit.vercel.app/',
    },
    {
        title: "Global Wealth Spectrum Visualization",
        title_ja: "グローバル富スペクトラム可視化",
        title_fr: "Visualisation du Spectre de Richesse Mondiale",
        title_de: "Globale Wohlstandsspektrum-Visualisierung",
        description: "A data visualization that makes me realize how poor I am. Built with D3.js, which I definitely didn't struggle with for weeks trying to understand how selections work.",
        desc_ja: "私がどれほど貧しいかを実感させるデータ可視化。D3.jsで構築されており、セレクションの仕組みを理解しようと何週間も苦労したことは絶対にありません。",
        desc_fr: "Une visualisation de données qui me fait réaliser à quel point je suis pauvre. Construite avec D3.js, avec laquelle je n'ai définitivement pas lutté pendant des semaines pour comprendre comment fonctionnent les sélections.",
        desc_de: "Eine Datenvisualisierung, die mir bewusst macht, wie arm ich bin. Erstellt mit D3.js, womit ich definitiv nicht wochenlang gekämpft habe, um zu verstehen, wie Selektionen funktionieren.",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Codefreyy/d3-evolution-visualisation',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX"
] 

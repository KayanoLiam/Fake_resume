import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import firstImage from "@/public/first.png";
import secondImage from "@/public/second.png";
import thirdImage from "@/public/third.png";
import fourthImage from "@/public/four.png";

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
        title: "MSc in Pretending to Code",
        title_ja: "コード偽装学修士号",
        title_fr: "Master en Simulation de Codage",
        title_de: "Master in Code-Vortäuschung",
        location: "University of Non-Existence, Imaginary Kingdom",
        location_ja: "存在しない大学、想像上の王国",
        location_fr: "Université de Non-Existence, Royaume Imaginaire",
        location_de: "Universität der Nicht-Existenz, Imaginäres Königreich",
        description:
            "Obtained a completely fake Master's degree in Advanced Googling and Stack Overflow Studies. Specialized in copy-pasting code from AI assistants and pretending to understand what it does. Graduated with honors in 'Looking Busy While Actually Watching YouTube Tutorials'.",
        description_ja: "高度なGoogle検索とStack Overflow研究の完全に偽の修士号を取得。AIアシスタントからコードをコピペして、それが何をするのか理解しているふりをすることを専門としました。「YouTubeチュートリアルを見ながら忙しそうに見せる」で優秀な成績で卒業。",
        description_fr: "J'ai obtenu un diplôme de Master complètement faux en Recherche Google Avancée et Études Stack Overflow. Spécialisé dans le copier-coller de code d'assistants IA et faire semblant de comprendre ce que ça fait. Diplômé avec mention en 'Avoir l'air Occupé en Regardant des Tutoriels YouTube'.",
        description_de: "Erhielt einen völlig gefälschten Master-Abschluss in Fortgeschrittener Google-Suche und Stack Overflow-Studien. Spezialisiert auf das Kopieren von Code von KI-Assistenten und so zu tun, als würde ich verstehen, was es macht. Abschluss mit Auszeichnung in 'Beschäftigt Aussehen während YouTube-Tutorials Schauen'.",
        icon: React.createElement(LuGraduationCap),
        date: "2023 Sep - 2024 May",
        date_ja: "2023年9月 - 2024年5月",
        date_fr: "Sep 2023 - Mai 2024",
        date_de: "Sep 2023 - Mai 2024",
    },
    {
        title: "Professional Code Destroyer",
        title_ja: "プロのコード破壊者",
        title_fr: "Destructeur de Code Professionnel",
        title_de: "Professioneller Code-Zerstörer",
        location: React.createElement("span", {},
            "Definitely Not ",
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " (They fired me)"
        ),
        location_ja: React.createElement("span", {},
            "絶対に",
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            "ではない（クビになった）"
        ),
        location_fr: React.createElement("span", {},
            "Certainement Pas ",
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " (Ils m'ont viré)"
        ),
        location_de: React.createElement("span", {},
            "Definitiv Nicht ",
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " (Sie haben mich gefeuert)"
        ),
        description:
            "Successfully broke every single feature I touched. Turned a simple button into a 500-error generator. Spent 90% of my time asking ChatGPT how to fix the mess I created. Got really good at saying 'It works on my machine' and blaming the backend team.",
        description_ja: "触ったすべての機能を見事に破壊しました。シンプルなボタンを500エラージェネレーターに変えました。作った混乱を修正する方法をChatGPTに聞くのに時間の90%を費やしました。「私のマシンでは動く」と言ってバックエンドチームを責めるのが得意になりました。",
        description_fr: "J'ai réussi à casser chaque fonctionnalité que j'ai touchée. J'ai transformé un simple bouton en générateur d'erreur 500. J'ai passé 90% de mon temps à demander à ChatGPT comment réparer le désordre que j'avais créé. Je suis devenu très bon pour dire 'Ça marche sur ma machine' et blâmer l'équipe backend.",
        description_de: "Ich habe erfolgreich jede einzelne Funktion kaputt gemacht, die ich berührt habe. Verwandelte einen einfachen Button in einen 500-Fehler-Generator. Verbrachte 90% meiner Zeit damit, ChatGPT zu fragen, wie ich das Chaos reparieren kann, das ich angerichtet hatte. Wurde sehr gut darin zu sagen 'Es funktioniert auf meiner Maschine' und das Backend-Team zu beschuldigen.",
        icon: React.createElement(FaVuejs),
        date: "2022 Aug - 2022 Dec",
        date_ja: "2022年8月 - 2022年12月",
        date_fr: "Août 2022 - Déc 2022",
        date_de: "Aug 2022 - Dez 2022",
    },
    {
        title: "Chief Bug Producer",
        title_ja: "チーフバグプロデューサー",
        title_fr: "Producteur en Chef de Bugs",
        title_de: "Chef-Bug-Produzent",
        location: "University of Chaos | Confusion City",
        location_ja: "カオス大学 | 混乱市",
        location_fr: "Université du Chaos | Ville de Confusion",
        location_de: "Universität des Chaos | Verwirrungsstadt",
        description:
            "Maintained a Financial Platform by constantly breaking it and then asking AI to fix it. Became an expert at creating bugs faster than anyone could fix them. My greatest achievement was making a graph that displayed random numbers and calling it 'dynamic data visualization'.",
        description_ja: "金融プラットフォームを常に壊してからAIに修正を依頼することで維持しました。誰よりも早くバグを作成する専門家になりました。最大の成果は、ランダムな数字を表示するグラフを作って「動的データ可視化」と呼んだことです。",
        description_fr: "J'ai maintenu une Plateforme Financière en la cassant constamment puis en demandant à l'IA de la réparer. Je suis devenu expert dans la création de bugs plus rapidement que quiconque ne pouvait les corriger. Mon plus grand accomplissement a été de faire un graphique qui affichait des nombres aléatoires et de l'appeler 'visualisation de données dynamique'.",
        description_de: "Ich wartete eine Finanzplattform, indem ich sie ständig kaputt machte und dann die KI bat, sie zu reparieren. Wurde Experte darin, Bugs schneller zu erstellen, als sie jemand beheben konnte. Meine größte Leistung war es, ein Diagramm zu erstellen, das zufällige Zahlen anzeigte und es 'dynamische Datenvisualisierung' zu nennen.",
        icon: React.createElement(FaReact),
        date: "2022 May - 2022 July",
        date_ja: "2022年5月 - 2022年7月",
        date_fr: "Mai 2022 - Juillet 2022",
        date_de: "Mai 2022 - Juli 2022",
    },
    {
        title: "BA in Fictional Languages",
        title_ja: "架空言語学士号",
        title_fr: "Licence en Langues Fictives",
        title_de: "Bachelor in Fiktiven Sprachen",
        location: "University of Make-Believe, Fantasy Land",
        location_ja: "作り話大学、ファンタジーランド",
        location_fr: "Université de Faire-Semblant, Pays Fantastique",
        location_de: "Universität der Fantasie, Märchenland",
        description:
            "Graduated with a Bachelor's degree in absolutely nothing useful. Learned how to speak fluent nonsense and write essays about topics I completely made up. My thesis was titled 'Why I Have No Actual Skills: A Comprehensive Study'.",
        description_ja: "全く役に立たない学士号を取得して卒業しました。流暢なナンセンスを話し、完全に作り上げたトピックについてエッセイを書く方法を学びました。私の論文のタイトルは「なぜ私には実際のスキルがないのか：包括的研究」でした。",
        description_fr: "J'ai obtenu un diplôme de licence en absolument rien d'utile. J'ai appris à parler couramment le non-sens et à écrire des essais sur des sujets que j'ai complètement inventés. Ma thèse s'intitulait 'Pourquoi je n'ai aucune compétence réelle : Une étude complète'.",
        description_de: "Ich graduierte mit einem Bachelor-Abschluss in absolut nichts Nützlichem. Lernte fließend Unsinn zu sprechen und Essays über Themen zu schreiben, die ich völlig erfunden hatte. Meine Abschlussarbeit trug den Titel 'Warum ich keine echten Fähigkeiten habe: Eine umfassende Studie'.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 Sep - 2023 Jun",
        date_ja: "2019年9月 - 2023年6月",
        date_fr: "Sep 2019 - Juin 2023",
        date_de: "Sep 2019 - Jun 2023",
    },

]

// Removed experiencesDataZn as we now use single data source with i18n


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Next.js Multilingual Starter Template (Epic Failure Edition)",
        "title_ja": "Next.js多言語スターターテンプレート（壮大な失敗版）",
        "title_fr": "Template de Démarrage Multilingue Next.js (Édition Échec Épique)",
        "title_de": "Next.js Mehrsprachiges Starter-Template (Epische Misserfolg-Edition)",
        "description": "Attempted to create a modern multilingual Next.js template, but my 2018 MacBook Pro had other plans. Every npm install took 20 minutes, hot reload was more like 'cold crawl', and my laptop sounded like a jet engine trying to compile TypeScript. The project technically works, but I'm pretty sure it's held together by prayers and Stack Overflow answers.",
        "desc_ja": "モダンな多言語Next.jsテンプレートを作ろうとしましたが、私の2018年MacBook Proには別の計画がありました。npm installは毎回20分かかり、ホットリロードは「コールドクロール」のようで、TypeScriptをコンパイルしようとするとラップトップがジェット機のような音を立てました。プロジェクトは技術的には動きますが、祈りとStack Overflowの回答で支えられていると確信しています。",
        "desc_fr": "J'ai tenté de créer un template Next.js multilingue moderne, mais mon MacBook Pro 2018 avait d'autres plans. Chaque npm install prenait 20 minutes, le hot reload ressemblait plus à un 'cold crawl', et mon laptop sonnait comme un moteur d'avion essayant de compiler TypeScript. Le projet fonctionne techniquement, mais je suis sûr qu'il tient grâce aux prières et aux réponses de Stack Overflow.",
        "desc_de": "Ich versuchte, ein modernes mehrsprachiges Next.js-Template zu erstellen, aber mein MacBook Pro 2018 hatte andere Pläne. Jeder npm install dauerte 20 Minuten, Hot Reload war eher wie 'Cold Crawl', und mein Laptop klang wie ein Düsentriebwerk beim Versuch, TypeScript zu kompilieren. Das Projekt funktioniert technisch, aber ich bin ziemlich sicher, dass es durch Gebete und Stack Overflow-Antworten zusammengehalten wird.",
        "tags": ["Next.js 15", "TypeScript", "TailwindCSS", "i18n", "MDX", "Tears", "Caffeine"],
        "imageUrl": firstImage,
        "projectUrl": "https://github.com/KayanoLiam/next-starter",
        "demoUrl": "https://github.com/KayanoLiam/next-starter"
    },
    {
        title: "JobHunter - The Scammer's Paradise Platform",
        title_ja: "JobHunter - 詐欺師の楽園プラットフォーム",
        title_fr: "JobHunter - La Plateforme Paradis des Arnaqueurs",
        title_de: "JobHunter - Die Betrüger-Paradies-Plattform",
        description: "Built a comprehensive job hunting platform with user authentication, job posting, and application tracking. Spent months perfecting the UI/UX, implementing search filters, and optimizing the database. Only realized after launch that 99% of job postings were from MLM schemes, crypto scams, and 'make $5000/week working from home' fraudsters. Turns out I created the perfect ecosystem for scammers. At least the code is clean! 🤷‍♂️",
        desc_ja: "ユーザー認証、求人投稿、応募追跡機能を備えた包括的な求職プラットフォームを構築しました。UI/UXの完璧化、検索フィルターの実装、データベースの最適化に数ヶ月を費やしました。ローンチ後に気づいたのは、求人投稿の99%がMLMスキーム、暗号通貨詐欺、「在宅で週5000ドル稼げる」詐欺師からのものだったということです。詐欺師にとって完璧なエコシステムを作ってしまったようです。少なくともコードはきれいです！🤷‍♂️",
        desc_fr: "J'ai construit une plateforme complète de recherche d'emploi avec authentification utilisateur, publication d'offres et suivi des candidatures. J'ai passé des mois à perfectionner l'UI/UX, implémenter des filtres de recherche et optimiser la base de données. J'ai réalisé après le lancement que 99% des offres d'emploi provenaient de systèmes MLM, d'arnaques crypto et d'escrocs promettant 'gagner 5000$/semaine en télétravail'. Il s'avère que j'ai créé l'écosystème parfait pour les arnaqueurs. Au moins le code est propre ! 🤷‍♂️",
        desc_de: "Ich baute eine umfassende Jobsuchplattform mit Benutzerauthentifizierung, Stellenausschreibungen und Bewerbungsverfolgung. Verbrachte Monate damit, die UI/UX zu perfektionieren, Suchfilter zu implementieren und die Datenbank zu optimieren. Erst nach dem Launch realisierte ich, dass 99% der Stellenausschreibungen von MLM-Systemen, Krypto-Betrügern und 'verdiene 5000$/Woche im Homeoffice'-Betrügern stammten. Anscheinend habe ich das perfekte Ökosystem für Betrüger geschaffen. Wenigstens ist der Code sauber! 🤷‍♂️",
        tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Scammers", "Regret"],
        imageUrl: secondImage,
        projectUrl: 'https://github.com/KayanoLiam/JobHunter',
        demoUrl: 'https://github.com/KayanoLiam/JobHunter',
    },
    {
        title: "SGmusic - The Cursor Subscription Casualty",
        title_ja: "SGmusic - Cursor購読料金の犠牲者",
        title_fr: "SGmusic - La Victime de l'Abonnement Cursor",
        title_de: "SGmusic - Das Cursor-Abonnement-Opfer",
        description: "Started building an ambitious music streaming platform with playlist management, user authentication, and audio visualization. The project was going great until my Cursor Pro subscription expired and I couldn't afford the renewal. Suddenly, I went from AI-powered coding wizard to a mere mortal trying to remember basic syntax. The codebase is now frozen in time like a digital fossil, forever stuck at 60% completion because I refuse to write code without my AI assistant. It's like trying to cook without a recipe after being spoiled by a personal chef.",
        desc_ja: "プレイリスト管理、ユーザー認証、音声可視化機能を備えた野心的な音楽ストリーミングプラットフォームの構築を開始しました。Cursor Proの購読が期限切れになり、更新料金を払えなくなるまでは順調でした。突然、AIパワードコーディングウィザードから基本的な構文を思い出そうとする単なる人間になってしまいました。コードベースは今やデジタル化石のように時間に凍結され、AIアシスタントなしでコードを書くことを拒否しているため、永遠に60%完成で止まっています。個人シェフに甘やかされた後にレシピなしで料理をしようとするようなものです。",
        desc_fr: "J'ai commencé à construire une plateforme de streaming musical ambitieuse avec gestion de playlists, authentification utilisateur et visualisation audio. Le projet allait bien jusqu'à ce que mon abonnement Cursor Pro expire et que je ne puisse pas me permettre le renouvellement. Soudain, je suis passé de magicien du codage assisté par IA à un simple mortel essayant de se rappeler la syntaxe de base. La base de code est maintenant figée dans le temps comme un fossile numérique, éternellement bloquée à 60% d'achèvement parce que je refuse d'écrire du code sans mon assistant IA. C'est comme essayer de cuisiner sans recette après avoir été gâté par un chef personnel.",
        desc_de: "Ich begann mit dem Aufbau einer ehrgeizigen Musik-Streaming-Plattform mit Playlist-Management, Benutzerauthentifizierung und Audio-Visualisierung. Das Projekt lief großartig, bis mein Cursor Pro-Abonnement ablief und ich mir die Verlängerung nicht leisten konnte. Plötzlich verwandelte ich mich von einem KI-gestützten Coding-Zauberer in einen gewöhnlichen Sterblichen, der sich an grundlegende Syntax zu erinnern versucht. Die Codebasis ist nun wie ein digitales Fossil in der Zeit eingefroren, für immer bei 60% Fertigstellung steckengeblieben, weil ich mich weigere, Code ohne meinen KI-Assistenten zu schreiben. Es ist wie Kochen ohne Rezept, nachdem man von einem Privatkoch verwöhnt wurde.",
        tags: ["React", "Node.js", "Web Audio API", "MongoDB", "Cursor Dependency", "Poverty"],
        imageUrl: thirdImage,
        projectUrl: 'https://github.com/KayanoLiam/SGmusic',
        demoUrl: 'https://github.com/KayanoLiam/SGmusic',
    },
    {
        title: "Standard PyOxidizer - The Hubris Chronicles",
        title_ja: "Standard PyOxidizer - 傲慢年代記",
        title_fr: "Standard PyOxidizer - Les Chroniques de l'Orgueil",
        title_de: "Standard PyOxidizer - Die Hybris-Chroniken",
        description: "In a moment of supreme overconfidence, I decided that Python's standard library wasn't fast enough and that I, a mere mortal who still googles 'how to reverse a list in Python', could rewrite it in Rust for better performance. Armed with 3 weeks of Python experience and a dangerous amount of self-belief, I embarked on this Icarus-like journey. Turns out, reimplementing decades of battle-tested code is slightly more complex than I anticipated. The project crashed harder than my ego when I realized I didn't even understand Python's import system, let alone how to replicate it in Rust. Now it serves as a monument to developer hubris.",
        desc_ja: "極度の過信の瞬間に、Pythonの標準ライブラリが十分に高速ではないと判断し、「Pythonでリストを逆順にする方法」をまだググっている単なる凡人の私が、パフォーマンス向上のためにRustで書き直せると決めました。3週間のPython経験と危険なほどの自信を武器に、このイカロスのような旅に出発しました。何十年もの実戦テスト済みコードを再実装することは、予想よりもわずかに複雑であることが判明しました。Pythonのインポートシステムすら理解していない、ましてやRustでそれを複製する方法など知らないことに気づいたとき、プロジェクトは私の自尊心よりも激しくクラッシュしました。今では開発者の傲慢さの記念碑として機能しています。",
        desc_fr: "Dans un moment de surconfiance suprême, j'ai décidé que la bibliothèque standard de Python n'était pas assez rapide et que moi, un simple mortel qui google encore 'comment inverser une liste en Python', pouvais la réécrire en Rust pour de meilleures performances. Armé de 3 semaines d'expérience Python et d'une quantité dangereuse de confiance en soi, je me suis embarqué dans ce voyage à la Icare. Il s'avère que réimplémenter des décennies de code testé au combat est légèrement plus complexe que prévu. Le projet s'est écrasé plus fort que mon ego quand j'ai réalisé que je ne comprenais même pas le système d'import de Python, encore moins comment le répliquer en Rust. Maintenant, il sert de monument à l'orgueil des développeurs.",
        desc_de: "In einem Moment höchster Selbstüberschätzung entschied ich, dass Pythons Standardbibliothek nicht schnell genug war und dass ich, ein gewöhnlicher Sterblicher, der immer noch 'wie man eine Liste in Python umkehrt' googelt, sie in Rust für bessere Performance umschreiben könnte. Bewaffnet mit 3 Wochen Python-Erfahrung und einer gefährlichen Menge an Selbstvertrauen, begab ich mich auf diese Ikarus-ähnliche Reise. Es stellte sich heraus, dass die Neuimplementierung von jahrzehntelang kampferprobtem Code etwas komplexer ist als erwartet. Das Projekt stürzte härter ab als mein Ego, als mir klar wurde, dass ich nicht einmal Pythons Import-System verstand, geschweige denn, wie man es in Rust repliziert. Jetzt dient es als Monument für Entwickler-Hybris.",
        tags: ["Rust", "Python", "PyO3", "Delusions of Grandeur", "Crashed Dreams", "Humility"],
        imageUrl: fourthImage,
        projectUrl: 'https://github.com/KayanoLiam/Standard_PyOxidizer',
        demoUrl: 'https://github.com/KayanoLiam/Standard_PyOxidizer',
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

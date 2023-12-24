import styles from '@/app/projects/projects.module.css'
import Card from '@/app/ui/card';
import Tags from '@/app/ui/tags';

export default function Projects() {
    interface Project {
        key: number,
        title: string,
        description: string,
        link?: { href: string, title: string },
        tags: string[]
    }

    const projects: Project[] = [
        {
            key: 1,
            title: "Projet Géode",
            description: "Développement d'une base de données relationnelle pour la gestion d'une collection minéralogique" +
                " accompagnée d'un logiciel développé en Java et d'une fonctionnalité permettant d'identifier des pierres selon " +
                "certains paramètres.",
            tags: [
                "Java",
                "SQL",
                "SQLite",
                "Swing",
            ]

        },
        {
            key: 2,
            title: "Bug Board",
            description: "Projet réalisé dans le cadre de mon semestre à Dundalk Institute of Technology. Celui-ci consistait à " +
                "créer un jeu en C++ où l'on contrôle un insecte pouvant manger les autres insectes plus petits que soi et de grossir" +
                " et dont le but est donc d'être le dernier survivant sur le plateau",
            link: { href: "https://github.com/JOAO-Ethan/Bug_Board", title: "page GitHub du code" },
            tags: ["C++", "SFML"]
        },
        {
            key: 3,
            title: "Fractales",
            description: "Projet réalisé en groupe dans le cadre de mon BUT consistant à la réalisation d'un " +
                "librairie de génération de fractales en Java.",
            tags: ["Java", "Git", "Projet en groupe"]
        },

    ]

    const github: string = "https://github.com/JOAO-Ethan"
    return (
        <main>
            <h1>Mes projets</h1>
            <h2>
                <a href={github} className={styles.githubLink} title="Ma page GitHub contenant tous mes projets">GitHub</a>
            </h2>
            <div className={styles.wrapper}>
                {projects.map((p, idx) =>
                    <Card
                        key={p.key}
                        className={idx === projects.length - 1 && !!(projects.length % 3) ? styles.last : ''}
                        title={p.link ? <a href={p.link.href} title={p.link.title}>{p.title}</a> : p.title} content={
                            <div className={styles.project}>
                                <p>
                                    {p.description}
                                </p>
                                <div>
                                    <Tags tags={p.tags} />
                                </div>
                            </div>}
                    />)}
            </div>
        </main>
    );
}
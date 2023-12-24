import Card from "@/app/ui/card";
import SkillProgress, { Skill } from "@/app/skills/skill";
import styles from '@/app/skills/skills.module.css';

export default function Skills() {
    const skills: {
        key: number,
        category: string,
        skills: Skill[]
    }[] = [
            {
                key: 1,
                category: "Développement",
                skills: [
                    { key: 1.1, name: "Java", maxGrade: 5, grade: 4 },
                    { key: 1.2, name: "Python", maxGrade: 5, grade: 4 },
                    { key: 1.3, name: "C++", maxGrade: 5, grade: 3 },
                ]
            },
            {
                key: 2,
                category: "Développement Web",
                skills: [
                    { key: 2.1, name: "PHP", maxGrade: 5, grade: 4 },
                    { key: 2.2, name: "Symfony", maxGrade: 5, grade: 3 },
                    { key: 2.3, name: "Laravel", maxGrade: 5, grade: 2 },
                    { key: 2.4, name: "TypeScript", maxGrade: 5, grade: 3 },
                    { key: 2.5, name: "React", maxGrade: 5, grade: 2 },
                    { key: 2.6, name: "NextJS", maxGrade: 5, grade: 2 },
                    { key: 2.7, name: "HTML", maxGrade: 5, grade: 4 },
                    { key: 2.8, name: "CSS", maxGrade: 5, grade: 1 },
                ]
            },
            {
                key: 3,
                category: "Système",
                skills: [
                    { key: 3.1, name: "Bash", maxGrade: 5, grade: 3 },
                    { key: 3.2, name: "Linux", maxGrade: 5, grade: 3 },
                    { key: 3.3, name: "Windows", maxGrade: 5, grade: 2 },
                ]
            },
            {
                key: 4,
                category: "Base de données",
                skills: [
                    { key: 4.1, name: "SQL", maxGrade: 5, grade: 5 },
                    { key: 4.2, name: "PostgreSQL", maxGrade: 5, grade: 4 },
                    { key: 4.3, name: "Méthode Merise", maxGrade: 5, grade: 3 },
                    { key: 4.4, name: "PL/pgSQL", maxGrade: 5, grade: 3 },
                    { key: 4.5, name: "MongoDB", maxGrade: 5, grade: 3 },
                    { key: 4.6, name: "Cassandra", maxGrade: 5, grade: 2 },
                    { key: 4.7, name: "Neo4J", maxGrade: 5, grade: 1 },
                    { key: 4.8, name: "Apache Spark", maxGrade: 5, grade: 1 },
                ]
            },
            {
                key: 5,
                category: "Outils & IDE",
                skills: [
                    { key: 5.1, name: "Git", maxGrade: 5, grade: 4 },
                    { key: 5.2, name: "Gitlab & Github", maxGrade: 5, grade: 3 },
                    { key: 5.3, name: "Vs Code", maxGrade: 5, grade: 3 },
                    { key: 5.4, name: "Eclipse (Java)", maxGrade: 5, grade: 3 },
                    { key: 5.5, name: "IntelliJ (Java)", maxGrade: 5, grade: 3 },
                    { key: 5.6, name: "PHPStorm (PHP)", maxGrade: 5, grade: 3 },
                    { key: 5.7, name: "Clion (C++)", maxGrade: 5, grade: 3 },
                    { key: 5.8, name: "Pycharm (Python)", maxGrade: 5, grade: 3 },
                ]
            },
        ];
    const languages: { key: number, language: string, level: string }[] = [
        {
            key: 6,
            language: "Français",
            level: "Langue Maternelle"
        },
        {
            key: 7,
            language: "Anglais",
            level: "B2"
        },
        {
            key: 8,
            language: "Espagnol",
            level: "A2"
        },
        {
            key: 9,
            language: "Portugais",
            level: "Débutant (autodidacte)"
        },
        {
            key: 10,
            language: "Japonais",
            level: "Débutant (autodidacte)"
        },
    ];
    return (
        <main>
            <h1 className="title">Mes compétences</h1>
            <div className={styles.skillWrapper}>
                <Card key={0} title="Langues" content={<>{
                    languages.map(l => <div key={l.key} className={styles.language}><span>{l.language}</span><span>{l.level}</span></div>)
                }</>} />
                {skills.map(skill =>
                    <Card 
                    key={skill.key}
                    title={skill.category} content={<>
                        {skill.skills.map(s => <SkillProgress key={s.key} name={s.name} grade={s.grade} maxGrade={s.maxGrade}
                        />)}
                    </>}
                    />)}
            </div>
        </main>
    );
}
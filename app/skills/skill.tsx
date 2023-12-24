import styles from '@/app/skills/skill.module.css'
export interface Skill {
    key: number, 
    name: string, 
    grade: number, 
    maxGrade: number, 
}

export default function SkillProgress(skill: Skill) {
    const points: string[] = [];
    for(let i = 0; i < skill.grade; i++){
        points.push(`${styles.skillPoint} ${styles.full}`);
    }
    for(let i = 0; i < (skill.maxGrade - skill.grade); i++){
        points.push(`${styles.skillPoint} ${styles.empty}`);
    }
    return (
        <div className={styles.skill}>
            <p className={styles.skillName}>{skill.name}</p>
            <div className={styles.pointsWrapper}>
                {points.map((point, idx) => <div key={idx} className={point}></div>)}
            </div>
        </div>
    )
}
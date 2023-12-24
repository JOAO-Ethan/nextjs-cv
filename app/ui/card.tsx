import styles from '@/app/ui/card.module.css'

export default function Card({
    title,
    content,
    className,
    key,
}: {
    title: string | JSX.Element,
    content: string | JSX.Element,
    className?: string | undefined,
    key: number
}){
    return (
        <div key={key} className={`${styles.card} ${className !== undefined && className}`}>
            <div className={styles.cardTitle}>
                <h3>{title}</h3>
            </div>
            <div className={styles.cardBody}>
                {content}
            </div>
        </div>
    );
}
import styles from '@/app/ui/timeline.module.css'

export interface Timepoint {
    beginning: Date,
    end: Date,
    title: string,
    content: string
}

export default function Timeline(data: { timepoints: Timepoint[] }) {

    return (<div className={styles.timelineDiv}>
        <ul className={styles.timeline}>
            {data.timepoints.sort((a, b) => b.beginning.getTime() - a.beginning.getTime()).map(t => <li key={t.beginning.getTime()}>
                <span className={styles.date}>
                    {t.beginning.getTime() != t.end.getTime() ?
                        <>
                            {('0' + t.beginning.getDate()).slice(-2)}/{('0' + t.beginning.getMonth()).slice(-2)}/{t.beginning.getFullYear()}
                            -
                            {('0' + t.end.getDate()).slice(-2)}/{('0' + t.end.getMonth()).slice(-2)}/{t.end.getFullYear()}
                        </> :
                        <>
                            {('0' + t.beginning.getDate()).slice(-2)}/{('0' + t.beginning.getMonth()).slice(-2)}/{t.beginning.getFullYear()}
                        </>
                    }
                </span>
                <div className={styles.content}>
                    <h3>{t.title}</h3>
                    <p>{t.content}</p>
                </div>
            </li>)}
        </ul>
    </div>);
}
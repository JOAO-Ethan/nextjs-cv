import styles from '@/app/ui/tags.module.css'



export default function Tags(props : {tags: string[]}){

    return (<div className={styles.tagsWrapper}>
        {props.tags.map((tag, idx) => <span key={idx} className={styles.tag}>{tag}</span>)}
    </div>);
}
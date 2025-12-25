import styles from './_Text.module.css'
function TitleSub({ content } : { content: string}) {
    return (
        <h2 className={styles.subtitle}>
            {content}
        </h2>
    );
}

export default TitleSub;
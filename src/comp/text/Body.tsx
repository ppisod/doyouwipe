import styles from './_Text.module.css'

function Body ({content}: {content: string}) {
    return (
        <>
            <p className={styles.body}>{content}</p>
        </>
    );
}

export default Body;
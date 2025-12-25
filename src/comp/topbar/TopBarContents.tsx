import styles from './_TopBar.module.css'

class TopBarContents {
    static text ({ content } : { content: string }) {
        return (
            <h2 className={styles.topBarText}>
                {content}
            </h2>
        );
    }

    static link ({ link, content } : { link: string, content: string }) {
        return (
            <a className={styles.topBarLink} href={link}>
                {content}
            </a>
        );
    }
}

export default TopBarContents;
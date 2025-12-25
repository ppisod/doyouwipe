import styles from './Button.module.css'

function Button ({col, content}: {col: number, content: string}) {
    let style = styles.buttonOk;
    if (col > 0) {
        style = styles.buttonGood;
    } else if (col < 0) {
        style = styles.buttonBad;
    }
    return (
        <button className={`${styles.button} ${style}`}>
            {content}
        </button>
    );
}
export default Button;
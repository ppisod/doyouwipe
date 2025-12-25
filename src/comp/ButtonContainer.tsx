import styles from "./Button.module.css"

interface ButtonContainerProps {
    children: React.ReactNode
}

function ButtonContainer ({children}: ButtonContainerProps) {
    return (
        <div className={styles.cont}>
            {children}
        </div>
    );
}

export default ButtonContainer;
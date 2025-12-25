import styles from './_TopBar.module.css'

interface TopBarProps {
    children: React.ReactNode
}

function TopBar ({ children }: TopBarProps) {
    return (
        <div className={styles.topBar}>
            {children}
        </div>
    );
}

export default TopBar;
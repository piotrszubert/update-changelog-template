import styles from '@/styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>
                    Update.
                </span>
            </div>
        </header>
    );
}
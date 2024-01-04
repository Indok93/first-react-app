import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.infoWrapper}>
                <h4 className={styles.infoHeader}>Contact Information</h4>
                <p>(+45) 88 88 88 88</p>
                <p>info@something.com</p>
                <p>Gravsten 666, Aalborg, Danmark</p>
            </div>
        </footer>
    )
}
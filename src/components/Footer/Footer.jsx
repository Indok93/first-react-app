import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.infoWrapper}>
                <h4 className={styles.infoHeader}>Contact Information</h4>
                <p>Gravsten 666, Aalborg, Danmark</p>
                <p>info@something.com</p>
                <p>(+45) 88 88 88 88</p>
            </div>
        </footer>
    )
}
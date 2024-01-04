import styles from "./Pagetitle.module.scss";

export const Pagetitle = props => {
    return (
        <h1 className={styles.homepage}>{props.pagetitle}</h1>
    )
}
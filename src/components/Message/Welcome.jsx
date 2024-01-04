import styles from "./Welcome.module.scss";

export const Welcome = props => {
    return (
        <p className={styles.welcomemessage}>Welcome to the page {props.name}</p>
    )
}
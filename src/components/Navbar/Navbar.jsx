import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><a href="#">Option1</a></li>
                <li><a href="#">Option2</a></li>
                <li><a href="#">Option3</a></li>
                <li><a href="#">Option4</a></li>
            </ul>
        </nav>
    )
}
import { Navbar } from '../../components/Navbar/Navbar';
import { Welcome } from '../Message/Welcome';
import { Pagetitle } from '../Pagetitle/Pagetitle';
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <Navbar />
            <Pagetitle pagetitle="First React App" />
            <Welcome name="Indo" />
            <Welcome name="Santa" />
            <Welcome name="Claus" />
        </header>
    )
}
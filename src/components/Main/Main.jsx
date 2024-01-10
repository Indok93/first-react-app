import { List } from "../List/List"
import { Gallery } from "../Gallery/Gallery"
import styles from "./Main.module.scss";

export const Main = () => {
    const arrayFood = [
        'Lasagne', 'Pizza', 'Food3', 'Food4', 'Food5'
    ];
    const arrayMovies = [
        'I am Legend', 'Avatar', 'The Insidious', 'Central Intelligence', 'Talk To Me'
    ];
    return (
        <main className={styles.mainWrapper}>
            <Gallery />

            <h2 className={styles.foodHeader}>Favourite food</h2>
            <List data={arrayFood} />

            <h2 className={styles.moviesHeader}>Favourite movies</h2>
            <List data={arrayMovies} />
        </main>
    )
}
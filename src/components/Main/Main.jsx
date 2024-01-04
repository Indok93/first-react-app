import { List } from "../List/List"

export const Main = () => {
    const arrayFood = [
        'Lasagne', 'Pizza', 'livret3', 'liveret4', 'livret5'
    ];
    const arrayMovies = [
        'I am Legend', 'Avatar', 'The Insidious', 'Central Intelligence', 'Talk To Me'
    ];
    return (
        <main>
            <h2>Favourite food</h2>
            <List data={arrayFood}/>
            <h2>Favourite movies</h2>
            <List data={arrayMovies}/>
        </main>
    )
}
import { Navbar } from '../../components/Navbar/Navbar';
import { Welcome } from '../Message/Welcome';
import { Pagetitle } from '../Pagetitle/Pagetitle';

export const Header = () => {
    return (
        <header>
            <Navbar />
            <Pagetitle pagetitle="First React App" />
            <Welcome name="Indo" />
            <Welcome name="Arne" />
            <Welcome name="John" />
        </header>
    )
}
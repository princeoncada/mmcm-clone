import Header from '../components/Header.jsx';
import Menubar from '../components/Menubar.jsx';
import Hero from '../components/home/Hero.jsx';

export default function Home() {
    return (
        <div className="w-screen max-w-full">
            <Header />
            <Menubar />
            <Hero />
        </div>
    );
}
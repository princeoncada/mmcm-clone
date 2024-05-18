import Header from '../components/Header.jsx';
import MenuBar from '../components/MenuBar.jsx';
import Hero from '../components/home/Hero.jsx';

export default function Home() {
    

    return (
        <div className="w-screen max-w-full">
            <Header />
            <MenuBar />
            <Hero />
        </div>
    );
}
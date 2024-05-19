import Header from '../components/Header.jsx';
import Menubar from '../components/Menubar.jsx';
import Hero from '../components/home/Hero.jsx';
import About from '../components/home/About.jsx';
import Program from '../components/home/Program.jsx';
import Collab from '../components/home/Collab.jsx';
import Flux from '../components/home/Flux.jsx';
import MoreAbout from '../components/home/MoreAbout.jsx';
import Articles from '../components/home/Articles.jsx';
import Maps from '../components/home/Maps.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    

    return (
        <div className="w-screen max-w-full">
            <Header />
            <Menubar />
            <Hero />
            <About />
            <Program />
            <Collab />
            <Flux />
            <MoreAbout />
            <Articles />
            <Maps />
            <Footer />
        </div>
    );
}
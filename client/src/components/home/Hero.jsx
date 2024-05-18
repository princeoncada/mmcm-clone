import { useState } from 'react';

export default function Hero() {
    const [button, setButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        './hero/hero1.jpg',
        './hero/hero2.png',
        './hero/hero3.png',
        './hero/hero4.png',
        './hero/hero5.png',
        './hero/hero6.png'
    ];

    function handleButton() {
        setButton(true);
        setTimeout(() => {
            setButton(false);
        }, 800);
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        handleButton();
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        handleButton();
    };

    return (
        <div className="relative flex overflow-hidden" style={{ height: '55vw' }}>
            <button
                className="absolute left-0 h-full bg-slate-200 bg-opacity-30 z-10 flex items-center justify-center"
                onClick={handlePrevious}
                style={{ width: "10vw" }}
                disabled={button}
            >
                <i className='text-2xl bx bx-chevron-left'></i>
            </button>
            <button
                className="absolute right-0 h-full bg-slate-200 bg-opacity-30 z-10 flex items-center justify-center"
                onClick={handleNext}
                style={{ width: "10vw" }}
                disabled={button}
            >
                <i className='text-2xl bx bx-chevron-right'></i>
            </button>
            <div id="hero-container" className="relative w-full h-full">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`hero${index + 1}`}
                        className={`absolute w-full h-full object-fill transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>
            <div className="absolute bottom-2 md:bottom-5 lg:bottom-8 left-0 right-0 flex justify-center gap-2 md:gap-3">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors duration-500 ease-in-out ${index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

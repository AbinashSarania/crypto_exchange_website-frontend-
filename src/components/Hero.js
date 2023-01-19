import React from 'react';
import heroImg from './hero-img.jpg';
import { useSpring, animated } from 'react-spring';
import { useTrail } from 'react-spring';

const Hero = () => {
    const buttons = [
        { text: 'Sign Up' },
        { text: 'Learn More' },
    ];

    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        delay: 500,
        config: { duration: 1000 },
    });
    const buttonAnimations = useTrail(buttons.length, {
        from: { transform: 'scale(0)' },
        to: { transform: 'scale(1)' },
        config: { mass: 1, tension: 250, friction: 20 },
        delay: 1000,
    });

    return (
        <section
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-center flex-col">
                <animated.h1 className="text-black text-6xl font-bold leading-none" style={textAnimation}>
                    Welcome to Crypto Exchange
                </animated.h1>
                <animated.p className="text-black text-lg mt-2" style={textAnimation}>
                    Buy and sell your favorite cryptocurrencies with ease.
                </animated.p>
                <div className="mt-6 flex justify-center">
                    {buttonAnimations.map((animation, index) => (
                        <animated.button
                            key={index}
                            className={`bg-yellow-300 hover:bg-yellow-500 rounded-md text-white py-2 px-4 ${index === 1 ? 'ml-4' : ''}`}
                            style={animation}
                        >
                            {buttons[index].text}
                        </animated.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

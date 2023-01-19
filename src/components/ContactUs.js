import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import mapImg from './map.png'
import '@fortawesome/fontawesome-free/css/all.css';


const Contact = () => {
    const mapAnim = useSpring({
        from: { opacity: 0, transform: 'translate3d(50px, 0, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        delay: 800,
        config: { duration: 1000 },
    })

    const formAnim = useSpring({
        from: { opacity: 0, transform: 'translate3d(-50px, 0, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        delay: 1000,
        config: { duration: 1000 },
    })

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-black text-3xl font-bold pb-8">Contact Us</h2>
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <animated.img src={mapImg} alt="map" className="w-full rounded-lg shadow-md" style={mapAnim} />
                    </div>
                    <div>
                        <animated.div className="bg-gray-200 rounded-lg p-4" style={formAnim}>
                            <h3 className="text-black text-lg font-medium mb-4">Send us a message</h3>
                            <form>
                                <div className="mb-4">
                                    <input type="text" className="border-2 p-2 rounded-lg w-full" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="border-2 p-2 rounded-lg w-full" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="border-2 p-2 rounded-lg w-full" placeholder="Message"></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="bg-black text-white rounded-lg p-2">Send</button>
                                </div>
                            </form>
                            <div className="mt-8 flex justify-center">
                                <a href="https://www.instagram.com" className="text-blue-500 mx-4 social-icon">
                                    <i className="fab fa-instagram fa-2x fa-shake"></i>
                                </a>
                                <a href="https://www.twitter.com" className="text-blue-500 mx-4 social-icon">
                                    <i className="fab fa-twitter fa-2x fa-shake"></i>
                                </a>
                                <a href="https://www.facebook.com" className="text-blue-500 mx-4 social-icon">
                                    <i className="fab fa-facebook fa-2x fa-shake"></i>
                                </a>
                                <a href="mailto:example@email.com" className="text-blue-500 mx-4 social-icon">
                                    <i className="fas fa-envelope fa-2x fa-shake"></i>
                                </a>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact





import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import aboutImg from './about-img.png'

const About = () => {
  const textAnim = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 800,
    config: { duration: 1000 },
  })

  const imgAnim = useSpring({
    from: { opacity: 0, transform: 'translate3d(-50px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 1000,
    config: { duration: 1000 },
  })

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-black text-3xl font-bold pb-8">About Us</h2>
        <div className="grid grid-cols-1 gap-8">
          <div>
          <animated.img src={aboutImg} alt="about us" className="w-1/5 mx-auto rounded-lg shadow-md" style={imgAnim} />
          </div>
          <div>
            <animated.p className="text-black text-lg leading-relaxed" style={textAnim}>
              We are a team of experienced professionals in the cryptocurrency industry.
              Our mission is to make buying and selling cryptocurrencies accessible to everyone.
              We strive to provide our users with a safe and user-friendly platform.
            </animated.p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default About

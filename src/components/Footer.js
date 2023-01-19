import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">Copyright © {new Date().getFullYear()} Crypto Exchange</p>
                <div className="flex">
                    <a href="#" className="text-white mx-4">Terms of Service</a>
                    <a href="#" className="text-white mx-4">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
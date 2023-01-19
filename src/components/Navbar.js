import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="bg-white mt-3">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-black font-medium text-lg">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-end">
                    <Link to="/about" className="text-black mr-4">
                        About
                    </Link>
                    <Link to="/contactus" className="text-black mr-4">
                        Contact Us
                    </Link>
                    <Link to="/login" className="text-black mr-4">
                        Login
                    </Link>
                    <button className="bg-yellow-300 hover:bg-yellow-500 rounded-md text-white py-1 px-2 font-medium">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

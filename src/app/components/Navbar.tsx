"use client";
import next from "../../../public/next.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSettings } from "react-icons/fi";


 export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleSettings = () => {
        setSettingsOpen(!settingsOpen);
    }

    // so far so good...
    //change navbar logo to your name in a cool font 
    //remove border from navbar
    //make it minimalist
    //Think of the theme, How do I want to package myself
    //clone existing well designed apps

    return (
            <nav className="bg-white flex justify-between items-center w-full py-2 px-9 " >
                {/* Logo */}
                <div className=" rounded-xl">
                    <Link href="/">
                        <Image
                            src="/Logo file.png"
                            alt="Logo"
                            width={150}
                            height={75}
                            className="transition-transform duration-500 ease-in-out hover:animate-float"
                        />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div>
                    <ul className="hidden md:flex space-x-4 items-center">
                        <li>
                            <button className="text-white bg-blue-500 px-4 py-2 rounded transition ease-in hover:bg-green-400 shadow-md hover:shadow-none">
                                Sign up
                            </button>
                        </li>
                        <li>
                            <button className="text-blue-500 bg-white px-4 py-2 border border-gray-300 rounded transition ease-in hover:bg-blue-200 hover:text-blue-700 shadow-md hover:shadow-none">
                                Log in
                            </button>
                        </li>
                        <li className="relative">
                            <button onClick={toggleSettings} className="flex items-center space-x-2 text-blue-500 hover:text-blue-800">
                                <FiMenu size={24} />
                            </button>

                            {/* Dropdown menu */}
                            {settingsOpen && (
                                <ul className="absolute right-0 mt-2 w-40 bg-white border  border-gray-300 rounded shadow-lg">
                                    <li className="px-4 py-2 hover:bg-blue-200 hover:cursor-pointer">Profile</li>
                                    <li className="px-4 py-2 hover:bg-blue-200 hover:cursor-pointer">Settings</li>
                                    <li className="px-4 py-2 hover:bg-blue-200 hover:cursor-pointer">Log out</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden relative">
                    <button onClick={handleNav}>
                            <FiMenu size={24} />
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col px-4 absolute right-0 mt-2">
                            <li>Hello</li>
                            <li>Hi</li>
                            <li>Whats up</li>
                        </ul>
                    </div>
                )}
            </nav>
    )
 }
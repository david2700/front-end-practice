"use client";
import next from "../../../public/next.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";
import { useState } from "react";

 export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between h-full w-full items-center px-4 2xl:px-16">
                <Link href="/">
                    <Image
                    src={next}
                    alt="Logo"
                    width="205"
                    height="75"
                    className="cursor-pointer"
                    priority
                    />
                </Link>
                
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/about">
                            <li className="ml-10 uppercase hover:border-b text-lg">Home</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 uppercase hover:border-b text-lg">Contact Us</li>
                        </Link>
                        <Link href="/services">
                            <li className="ml-10 uppercase hover:border-b text-lg">About</li>
                        </Link>
                        <Link href="/services">
                            <li className="ml-10 uppercase hover:border-b text-lg">Blog</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" :
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href={"/"}>
                            <li onClick={() => setMenuOpen(false)} className="py:4 cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link href={"/about"}>
                            <li onClick={() => setMenuOpen(false)} className="py:4 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <Link href={"/contact"}>
                            <li onClick={() => setMenuOpen(false)} className="py:4 cursor-pointer">
                                Contact
                            </li>
                        </Link>
                        <Link href={"/services"}>
                            <li onClick={() => setMenuOpen(false)} className="py:4 cursor-pointer">
                                Services
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer" />
                    <AiOutlineFacebook size={30} className="cursor-pointer" />
                </div>
            </div>
        </nav>
    )
 }
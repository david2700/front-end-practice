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
            
        </nav>
    )
 }
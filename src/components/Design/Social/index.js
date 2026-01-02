"use client"
import React from "react"

// Icons
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Social() {
    return (
        <ul className="flex flex-row justify-center w-full gap-2 mt-1 absolute -bottom-4.5">
            <li className="w-fit bg-[#0077b5] hover:bg-blue-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105 border border-gray-800">
                <a href="https://www.linkedin.com/in/vik-patra-5b710240/" target="_blank"><FaLinkedin size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105 border border-gray-800">
                <a href="https://www.instagram.com/vik_patra/" target="_blank"><FaInstagram size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-green-500 hover:bg-green-600 rounded-full p-1.5 transition-all duration-300 hover:scale-105 border border-gray-800">
                <a href="https://wa.me/447501247715" target="_blank"><FaWhatsapp size={24} className="text-white" /></a>
            </li>
            <li className="w-fit bg-blue-600 hover:bg-blue-700 rounded-full p-1.5 transition-all duration-300 hover:scale-105 border border-gray-800">
                <a href="tel:+447501247715" target="_blank"><IoMdCall size={24} className="text-white" /></a>
            </li>
        </ul>
    )
}
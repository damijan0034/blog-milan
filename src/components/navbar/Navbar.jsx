"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import DarkMode from '../DarkMode'

const links = [
    {
        id: "1",
        title: "Home",
        url: "/"
    },
    {
        id: "2",
        title: "About",
        url: "/about"
    },
    {
        id: "3",
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: "4",
        title: "Blog",
        url: "/blog"
    },
    {
        id: "5",
        title: "Contact",
        url: "/contact"
    },
    {
        id: "6",
        title: "Dashboard",
        url: "/dashboard"
    },
]




const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-10'>
        <Link className='font-bold' href={"/"}>lamamia</Link>
        <div className='space-x-2 text-[14px] flex items-center'>
            <DarkMode />
            {
                links.map((link)=>(
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))
            }
            <Button title="logout" />
        </div>
       
    </div>
  )
}
export default Navbar
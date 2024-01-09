"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import DarkMode from '../DarkMode'
import { GiHamburgerMenu } from "react-icons/gi"
import Image from 'next/image'

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
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            <div className='flex justify-between items-center h-10'>
                <Link className='font-bold' href={"/"}>lamamia</Link>
                <DarkMode />
                <div className='space-x-2 text-[14px]  items-center
             hidden sm:flex
        '>


                    {
                        links.map((link) => (
                            <Link key={link.id} href={link.url}>{link.title}</Link>
                        ))
                    }





                    <Button title="logout" />



                </div>
                {/*Menu icons*/}
                {
                    <Image
                        src={openMenu ? "/close.png" : "/open.png"}
                        width={24} height={24} alt='menu icon'
                        className='cursor-pointer sm:hidden transition-all'
                        onClick={()=>setOpenMenu(!openMenu)}
                    />
                }

            </div>
                {/*Menu*/}
                {
                    openMenu &&
                    <div className='flex flex-col bg-red-500
                        gap-10 w-[100%] justify-center items-center
                        text-xl p-2 font-bold
                    '>
                    {
                            links.map((link) => (
                                <Link key={link.id} href={link.url}>{link.title}</Link>
                            ))
                        }
    
                    </div>
                }
               

        </div>
    )
}
export default Navbar
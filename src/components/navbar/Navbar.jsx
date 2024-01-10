"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import DarkMode from '../DarkMode'
import Image from 'next/image'

const links=[
    {
        id:"1",
        title:"Home",
        url:"/"
    },
    {
        id:"2",
        title:"About",
        url:"/about"
    },
    {
        id:"3",
        title:"Portfolio",
        url:"/portfolio"
    },
    {
        id:"4",
        title:"Blog",
        url:"/blog"
    },
    {
        id:"5",
        title:"Contact",
        url:"/contact"
    },
    {
        id:"6",
        title:"Dashboard",
        url:"/dashboard"
    },
]




const Navbar = () => {
    const[open,setOpen]=useState(false)
  return (
    <div className='flex justify-between items-center h-10 relative'>
        <Link className='font-bold' href={"/"}>lamamia</Link>
        <div className='space-x-2 text-[14px] flex items-center'>
            <DarkMode />
            {
                links.map((link)=>(
                    <Link key={link.id} href={link.url}
                        className='hidden sm:flex'
                    >{link.title}
                    
                    </Link>
                ))
            }
            <Button  title="logout" />
            
                <Image src={open ? "/close.png" : "/open.png"}
                    width={22} height={22} alt='menu-icon'
                    className='sm:hidden text-right cursor-pointer'
                    onClick={()=>setOpen(!open)}
                />
            
        </div>

       
        {
            open && (
                <div  className='sm:hidden flex flex-col absolute
                top-10 right-0 bg-red-500  text-white gap-5
                justify-center items-center opacity-90 w-full z-50
       '>
        
       {
        
                links.map((link)=>(
                    <Link key={link.id} href={link.url}
                        
                    >{link.title}
                    
                    </Link>
                ))
            }
       </div>
            )

        }
       
    </div>
  )
}

export default Navbar
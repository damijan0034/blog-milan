import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className=''>
        
        <h2 className='font-bold text-[20px] my-4'>Choose A Gallery</h2>
        <div className=' md:flex space-y-5 sm:space-x-10   '> 
        <div className='flex-1 relative h-[400px] w-full  border mt-5 ' style={{backgroundImage:"url('/illustration.png')",backgroundSize:"cover"}} >
            <Link href={"/portfolio/illustrations"}>
           
                <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>ILLUSTRATIONS</h2>   
            </Link>
            </div>
            
            <div className='flex-1  relative h-[400px] w-full border   ' style={{backgroundImage:"url('/apps.jpg')",backgroundSize:"cover"}} >
            <Link href={"/portfolio/applications"}>
           
                <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>APPLICATIONS</h2>   
            </Link>
            </div>
            <div className='flex-1 relative h-[400px] w-full border   ' style={{backgroundImage:"url('/websites.jpg')",backgroundSize:"cover"}} >
            <Link href={"/portfolio/websites"}>
           
                <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>WEBSITES</h2>   
            </Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default Portfolio
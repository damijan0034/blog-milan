import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
        
        <h2 className='font-bold text-[20px] my-4'>Choose A Gallery</h2>
        <div className='sm:flex sm:space-x-10 '> 
            
            <Link href={"/portfolio/applications"}
            className='flex-1 w-full h-[400px] relative border  my-10 '>
                <Image src="/apps.jpg" alt='illustration' fill
                className='object-cover '
                
                />
                <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>APPLICATIONS</h2>
            </Link>
            
            <Link href={"/portfolio/illustrations"}
            className='flex-1 w-full border border-3 h-[400px] relative my-10 '>
                <Image src="/illustration.png" alt='contact' fill
                className='object-cover '
                />
                 <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>ILLUSTRATIONS</h2>
            </Link>
            <Link href={"/portfolio/websites"}
             className='flex-1 w-full border border-3 h-[400px] relative my-10  '>
                <Image src="/websites.jpg" alt='contact' fill
                className='object-cover '
                />
                 <h2 className='absolute bottom-2 text-2xl 
                font-bold left-2'>WEBSITES</h2>
            </Link>
            
        </div>
    </div>
  )
}

export default Portfolio
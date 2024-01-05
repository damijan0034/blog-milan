import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex flex-col my-10'>
        <div className='w-full flex flex-col h-[250px] relative'>
            <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt='about' fill 
                    className='object-cover  '
            />
            <div className='left-3 bottom-3 absolute opacity-85
             bg-[#53c28b] p-1'>
            <h1 className=' text-white font-bold text-xl ' >
                Digital Storytellers
                </h1>
                <h2 className='text-white font-semibold text-sm'>
                Handcrafting award winning digital experiences
                </h2>
            </div>
           
        </div>
        <div className='flex space-x-8'>
            <div className='flex-1'>
                <h1 className='my-8 font-bold text-xl'>Who Are We?</h1>
                <p className='text-[14px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
                </p>
            </div>
            <div className='flex-1'>
                <h1 className='my-8 font-bold text-xl'>What We Do?</h1>
                <p className='text-[14px] mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
                </p>
                <Link href={"/contact"}>
                    <Button  title="Contact" />
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default AboutPage
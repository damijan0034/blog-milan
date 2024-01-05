import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <h1 className='text-center mt-10 text-6xl font-extrabold '>Let Keep In Touch</h1>
        <div className='sm:flex'>
            <div className='flex-1 w-full h-[400px] relative my-10 mx-auto '>
                <Image src="/contact.png" alt='contact' fill
                className='object-contain m-10 items-center '
                />
            </div>
            <div className='flex-1 '>
                <form class="flex flex-col gap-10 mx-auto pt-20 w-[80%]">
                    <input className='border bg-transparent h-10 p-2'
                    placeholder='name' type="text" />
                    <input className='border bg-transparent h-10 p-2'
                    placeholder='email' type="text" />
                    <textarea className='border bg-transparent p-2 h-[150px] ' 
                    placeholder='message' id="" ></textarea>
                    <button className='bg-[#53c38b] mb-3 py-2 w-20 text-white rounded-md'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
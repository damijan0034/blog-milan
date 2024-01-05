import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between'>
        <div>All Rights reserved</div>
        <div className='flex gap-3'>
            <Image className='text-sm opacity-60 cursor-pointer' src="/1.png" alt='image' width={25} height={15} />
            <Image className='text-sm opacity-60 cursor-pointer' src="/2.png" alt='image' width={25} height={15} /> 
            <Image className='text-sm opacity-60 cursor-pointer' src="/3.png" alt='image' width={25} height={15} /> 
            <Image className='text-sm opacity-60 cursor-pointer' src="/4.png" alt='image' width={25} height={15} />  
        </div>
    </div>
  )
}

export default Footer
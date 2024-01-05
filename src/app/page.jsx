import Button from '@/components/Button'
import Image from 'next/image'
import Hero from "public/hero.png"

export default function Home() {
  return (
    <div className='md:flex mt-20 gap-[100px]'>
      <div className='flex-1 space-y-20'>
        <h1 className='text-6xl font-extrabold   '> 
        
        <span className='mb-5'>Better design </span>
        <span className='my-10'> for your digital</span>
        <span>products.</span>
        
       
         </h1>
        <p className="">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>

        <Button title="See our works" />  
      </div>
      <div className='flex-1  '>
        <Image className='w-[100%] object-cover' height={500}  src={Hero} alt='hero' />
      </div>
    </div>
  )
}

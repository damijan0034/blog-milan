import Post from '@/components/Post'
import Link from 'next/link'
import React from 'react'

const getData=async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok){
        throw new Error("Error")
    }
    return res.json()
}   


const Blog =async () => {
  const data=await getData()
  console.log(data)
  return (
    <div>
      {
        data.map(item=>(
          <Link className='cursor-pointer' href={`/blog/${item.id}`}>
                <Post key={item.id} title={item.title} body={item.body} />
          </Link>
          
        ))
      }
    </div>
  )
}

export default Blog
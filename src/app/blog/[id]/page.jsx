import Post from '@/components/Post'
import React from 'react'

const getData=async (id)=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if(!res.ok){
    console.log("Error occured")
  }
  return res.json()
}

const BlogPost =async ({params}) => {

  const id=params.id

  const blog=await getData(id)


 
  return (
    <Post key={blog.id} title={blog.title} body={blog.body} />
  )
}

export default BlogPost
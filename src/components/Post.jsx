import React from 'react'

const Post = ({title,body}) => {
  return (
    <div className='border mt-10  mb-3 p-3
        hover:shadow-amber-100 hover:shadow-md
    '>
        <h1 className='font-bold text-xl mb-3 uppercase text-center'>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Post
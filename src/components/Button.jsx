import React from 'react'

const Button = ({title}) => {
  return (
    <button 
        className='cursor-pointer  bg-[#53c28b]
    px-6 py-2 text-white rounded-md max-w-[180px] text-center  '>
        {title}
    </button>
  )
}

export default Button
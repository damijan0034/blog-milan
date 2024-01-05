import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[80%] mx-auto flex flex-col  min-h-[100vh] justify-between '>
        {children}
    </div>
  )
}

export default Container
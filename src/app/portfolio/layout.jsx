import React from 'react'

const PorfolioLayout = ({children}) => {
  return (
    <div>
        <h1 className='text-6xl font-extrabold '>Our Works</h1>
        {children}
    </div>
  )
}

export default PorfolioLayout
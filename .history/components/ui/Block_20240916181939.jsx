import React from 'react'

const Block = () => {
  return (
<div className='h-[17.5vh] bg-red-500 grid sm:grid-cols-5 grid-cols-3'>
  <div className='flex items-center justify-center sm:text-[1.7vw] text-white border-r '>
    3D Modeling
  </div>
  <div className='flex items-center justify-center text-white border-r '>
    Furniture
  </div>
  <div className='sm:flex items-center justify-center hidden text-white border-r '>
    Furniture
  </div>
  <div className='flex items-center justify-center text-white border-r '>
    Furniture
  </div>
  <div className='sm:flex hidden items-center justify-center border-r text-white'>
    Furniture
  </div>
</div>

  )
}

export default Block

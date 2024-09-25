import React from 'react'

const Block = () => {
  return (
<div className='h-[17.5vh] bg-red-500 grid sm:grid-cols-5 grid-cols-3'>
  <div className='flex items-center justify-center sm:text-[1.6vw] font-semibold tracking-tighter text-white border-r '>
    3D Modeling
  </div>
  <div className='flex items-center justify-center sm:text-[1.6vw] font-semibold tracking-tighter text-white border-r '>
    Furniture
  </div>
  <div className='sm:flex items-center sm:text-[1.6vw] font-semibold tracking-tighter justify-center hidden text-white border-r '>
    Interior Designing
  </div>
  <div className='flex items-center sm:text-[1.6vw] font-semibold tracking-tighter justify-center text-white border-r '>
    Furniture
  </div>
  <div className='sm:flex hidden sm:text-[1.6vw] font-semibold tracking-tighter items-center justify-center border-r text-white'>
    Furniture
  </div>
</div>

  )
}

export default Block

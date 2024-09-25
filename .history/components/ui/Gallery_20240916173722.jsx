import React from 'react'

const Gallery = () => {
  return (
    <div className='grid grid-cols-4 mx-2'>
      <div className='flex flex-col items-center justify-center'>
      <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/badroom.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"   src="/image/gallery2.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery.jpg" alt="" />
        </div>
      </div>
      <div className='flex items-center justify-center'>
      <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/swiper1.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"   src="/image/gallery11.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/living.jpg" alt="" />
        </div>
        </div>
      <div className='flex items-center justify-center'>hey </div>
      <div className='flex items-center justify-center'>hey </div>
    </div>
  )
}

export default Gallery

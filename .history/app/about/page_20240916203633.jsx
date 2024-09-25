import React from 'react'

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Who are we?</h1>
      </div>
      <div className='container'>
        <div className='pt-4'>
          <h2 className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great idea & interior Design</h2>
          <p className='text-2xl text-center font-medium pb-10 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit quas vitae, sed porro excepturi blanditiis recusandae, alias laboriosam iste quasi obcaecati nobis tenetur fugit, quo est consectetur perspiciatis? Earum, beatae quae!</p>
        </div>

      </div>
    </div>
  )
}
 
export default page

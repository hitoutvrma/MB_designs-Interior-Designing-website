import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { TbArrowUpRight } from "react-icons/tb"

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


      <div className='items-center lg:flex gap-x-8'>
        {/*Left side */}
      <div className='w-full'>
        <Image src="/image/gallery1123.jpg" width={700} height={700}/>
      </div>
      {/*Left side */}
      <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magnam. Doloremque, veritatis sed? Dolorem in perferendis, optio necessitatibus, sapiente illum eligendi debitis voluptates praesentium obcaecati dolor velit quo odit voluptas numquam repellat itaque iusto maxime laboriosam quos, commodi impedit beatae sunt voluptatum! Deserunt.<br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magnam. Doloremque, veritatis sed? Dolorem in perferendis, optio necessitatibus, sapiente illum eligendi debitis voluptates praesentium obcaecati dolor velit quo odit voluptas numquam repellat itaque iusto maxime laboriosam quos, commodi impedit beatae sunt voluptatum! Deserunt.<br/><br/>
        <span className='text-xl font-extrabold tracking-tight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam, voluptas pariatur sapiente minus praesentium eligendi perferendis rem delectus, ipsum, deleniti totam! Possimus, placeat! 
        </span>
      </p>
      <div className='sm:w-[13vw] w-[36vw]'>

      <Button className="flex w-full items-center px-8 py-5 m-2 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More<TbArrowUpRight className="w-5 h-5 ml-2"/></Button>
              
      </div>
      </div>
      </div>
      {/* TEAM SECTION */}
      <div className='lg:py-20'>
        <div className='pt-8 pb-4'>
          <h1 className='text-4xl font-bold tracking-wider text-center uppercase'>Team</h1>
        </div>
        <div className='grid py-8'>
          <div className='border-2 border-primary'>
            <div>
              <Image src="/image/profile2.jpg" width={200} height={200} alt='' className='mx-auto rounded-full'/>
              <h2>Building Surveys</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab impedit repudiandae!</p>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
 
export default page

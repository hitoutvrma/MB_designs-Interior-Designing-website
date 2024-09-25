import Image from 'next/image'
import React from 'react'

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <div>
                    <Image 
                    src="/image/aboutfront.png"
                    width={900}
                    height={500}
                    alt='About'
                    className='max-md:hidden'

                    />
                </div>

                <div className="items-center">
                    <h2 className='px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl'>We are award winning company</h2>
                    <p className='px-12 tracking-wider uppercase text-gray-400 mt-3'>Wrold  Award</p>
                    <p className='px-12 pb-4 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id explicabo ducimus sint veritatis, nulla eveniet doloribus ex cum quos, inventore nihil blanditiis, ea eaque. Sint deserunt quasi hic omnis error itaque! Ullam!
                    </p>
                    <p className='px-12 pb-4 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id explicabo ducimus sint veritatis, nulla eveniet doloribus ex cum quos, inventore nihil blanditiis, ea eaque. Sint deserunt quasi hic omnis error itaque! Ullam!
                    </p>
                </div>
            </div>
        </div>
  )
}

export default AboutComponent

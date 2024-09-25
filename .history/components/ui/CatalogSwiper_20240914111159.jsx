'use client';
import {TbArrowUpRight} from 'react-icons/tb';
import React from 'react'
import { Button } from './button';

const CatalogSwiper = () => {
  return (
    <div className='py-8 lg:py-28'>
      <div className='container grid pb-8 lg:grid-cols-1'>
        <div className='text-left'>
            <h1 className='py-4 text-4xl font-medium lg:text-6xl lg:py-0'>Modern Classic</h1>
            <h2 className='pb-6 text-xl font-bold tracking-wider mt-5'>LUXURY DECOR TO CREATE COMFORM IN OUR HOME</h2>
        </div>
        <div className='grid grid-cols-2 text-gray-500 gap-x-8'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore odit amet, quia molestiae eum, libero explicabo quidem nihil perspiciatis sed sint temporibus debitis ullam adipisci ipsa impedit quae eius modi? Odit, placeat? Dolor ipsum praesentium doloremque blanditiis possimus rem hic magni qui?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore odit amet, quia molestiae eum, libero explicabo quidem nihil perspiciatis sed sint temporibus debitis ullam adipisci ipsa impedit quae eius modi? Odit, placeat? Dolor ipsum praesentium doloremque blanditiis possimus rem hic magni qui?
            </p>
        </div>
        <a href="/gallery">
        <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2">View Gallery <TbArrowUpRight className='w-5 h-5 ml-2'/></Button>
         </a>
      </div>
    </div>
  )
}

export default CatalogSwiper

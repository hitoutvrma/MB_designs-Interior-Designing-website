'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
import MobileNavigation from './MobileNavigation';
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center '>
      <div>Yogendra Designer</div>
      <div className=''>
        Products
        About
        values
        Contact
      </div>
      <div className='flex gap-2'>
      <ThemeToggler/>
      <MobileNavigation className='xl:hidden'/>
      </div>
    </div>
  )
}

export default Header
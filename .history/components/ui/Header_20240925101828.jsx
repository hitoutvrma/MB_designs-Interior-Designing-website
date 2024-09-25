'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
import MobileNavigation from './MobileNavigation';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center '>
      <div className='font-serif'>MB Furnitures</div>
      <Nav containerStyles='hidden xl:flex gap-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles ='absolute left-0 top-full h-[2px] bg-primary w-full'
      />
      <div className='flex gap-2 items-center'>

      <ThemeToggler/>
      <div className='xl:hidden'>

      <MobileNavigation/>
      </div>
      </div>
    </div>
  )
}

export default Header

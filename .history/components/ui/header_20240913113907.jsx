'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
import MobileNavigation from './MobileNavigation';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center '>
      <div>Yogendra Designer</div>
      <Nav containerStyles='hidden xl:flex gap-8 items-center'/>
      <div className='flex gap-2'>
      <ThemeToggler/>
      <div className='xl:hidden'>

      <MobileNavigation/>
      </div>
      </div>
    </div>
  )
}

export default Header
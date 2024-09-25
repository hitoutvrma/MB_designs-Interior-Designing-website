'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center bg-red-900'>
      <div>logo</div>
      <div className='gap-10'>
        Products
        About
        values
        Contact
      </div>
      <ThemeToggler/>
    </div>
  )
}

export default Header

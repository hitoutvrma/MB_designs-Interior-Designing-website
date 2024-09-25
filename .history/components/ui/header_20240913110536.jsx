'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center bg-red-900'>
      <div>logo</div>
      <div className='m-2'>
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
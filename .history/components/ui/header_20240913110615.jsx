'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
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
      <ThemeToggler/>
    </div>
  )
}

export default Header

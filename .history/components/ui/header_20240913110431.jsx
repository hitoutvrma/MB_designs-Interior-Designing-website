'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center bg-red-900'>
      <div>logo</div>
      <ThemeToggler/>
    </div>
  )
}

export default Header

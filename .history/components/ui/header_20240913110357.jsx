'use client';
import React from 'react'
 import ThemeToggler from '../ThemeToggler'
const Header = () => {
  return (
    <div className='flex justify-between p-4 bg-red-900'>
      Header
      <ThemeToggler/>
    </div>
  )
}

export default Header

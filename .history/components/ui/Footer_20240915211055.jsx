import React from 'react'

const Footer = () => {
  return (
    
    <div class="flex justify-between bg-red-800 backdrop-blur-lg px-[14vw] py-[8vh] text-[17px] ">
  <div>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

    </head>
    <h1 class="pb-5 text-4xl">Follow us</h1>
    <div className='flex gap-x-6 pb-2 text-4xl'>
    <a href="https://instagram/hitoutvrma" className="text-gray-600 hover:text-pink-500 transition-transform duration-300 transform hover:scale-110"><i class="fa-brands fa-instagram" ></i></a>
      <a href="https://www.linkedin.com/in/hitesh-verma-3695b0254/" className="text-gray-600 hover:text-blue-700 transition-transform duration-300 transform hover:scale-110"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://x.com/hitesh_404" className="text-gray-600 hover:text-blue-700 transition-transform duration-300 transform hover:scale-110"><i class="fa-brands fa-facebook"></i></a>
    </div>
    <div>&copy; 2024-25 YOGENDRA DESIGNER. All rights reserved</div>
  </div>
  <div>
    <h1 class="pb-5 text-4xl">Contact us</h1>
    <div class="flex gap-x-2">
      <svg class="text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M6.62 10.79a15.533 15.533 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27c1.12.37 2.33.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 5a1 1 0 011-1h3.01a1 1 0 011 1c0 1.27.2 2.48.57 3.6a1 1 0 01-.27 1.09l-2.2 2.2z" />
      </svg>
      <a href="tel:+917000124803" class="hover:underline">+917000124803</a>
      <a href="tel:+917000124803" class="hover:underline">+917000124803</a>
    </div>
    <div class="flex gap-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v2l-8 5-8-5V6zm0 12V9l7.39 4.62a1 1 0 001.22 0L20 9v9H4z" />
      </svg>
      <a href="mailto:example@email.com" class="hover:underline">yogendra8@email.com</a>

      <a href="mailto:example@email.com" class="hover:underline">example@email.com</a>
    </div>
  </div>
</div>

  )
}

export default Footer

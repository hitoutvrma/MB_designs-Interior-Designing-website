import Image from 'next/image';
import React from 'react';
import { TbArrowNarrowRight} from "react-icons/tb";

const CatalogueSection = () => {
    const items=[
        {
            id:"01",
            category:"Bedroom setup",
            title:"bedroom setup",
            image:"/images/kitchen.jpg",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"02",
            category:"Kitchen setup",
            title:"bedroom setup",
            image:"/images/kitchen.jpg",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"03",
            category:"Drawing setup",
            title:"bedroom setup",
            image:"/images/kitchen.jpg",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"04",
            category:"Living setup",
            title:"bedroom setup",
            image:"/images/kitchen.jpg",
            description:"kuch to likh dunga yaha pe"
        },
    ]
  return (
    <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-red-700'>
      {items.map((item)=>(
        <div key={item.id}
        className='relative overflow-hidden group'
        >
            <div>
                <Image
                src={item.image}
                width={380}
                height={100}
                alt=''
                className='w-full'/>
            </div>
            <div className='absolute top-0 p-8 w-full bg-white text-black bg-opacity-60 backdrop-blur-sm'>
                <div className='flex justify-between pb-4'>
                    <p className='text-sm'>{item.category}</p>
                    <span className='text-sm'>{item.id}</span>
                </div>
                    <a className="text-xl block font-semibold" href="">{item.title}</a>
                    <p className='py-4'>{item.description}</p>
                    <a className='inline-flex items-center font-medium' href="">See details <TbArrowNarrowRight className='ml-2'/></a>
            </div>
            <div className='inset-0 bg-red-700  hidden flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl group-hover:translate-y-full transition duration-300 ease-in-out border border-r-2'>
                <p className='tracking-wider -rotate-90'>{item.category}</p>
                <span>{item.id}</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogueSection

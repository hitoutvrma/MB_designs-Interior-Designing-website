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
    <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300'>
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
            <div className='absolute top-0'>
                <div>
                    <p>{item.category}</p>
                    <span>{item.id}</span>
                </div>
                    <a href="">{item.title}</a>
                    <p>{item.description}</p>
                    <a href="">See details <TbArrowNarrowRight/></a>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogueSection

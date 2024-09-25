import Image from 'next/image';
import React from 'react';
import { TbArrowNarrowRight} from "react-icons/tb";

const CatalogueSection = () => {
    const items=[
        {
            id:"01",
            category:"Bedroom setup",
            title:"bedroom setup",
            image:"someimage",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"02",
            category:"Kitchen setup",
            title:"bedroom setup",
            image:"someimage",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"03",
            category:"Drawing setup",
            title:"bedroom setup",
            image:"someimage",
            description:"kuch to likh dunga yaha pe"
        },
        {
            id:"04",
            category:"Living setup",
            title:"bedroom setup",
            image:"someimage",
            description:"kuch to likh dunga yaha pe"
        },
    ]
  return (
    <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2'>
      {items.map((item)=>(
        <div key={item.id}>
            <div>
                <Image/>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CatalogueSection
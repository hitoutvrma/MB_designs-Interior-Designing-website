import Image from "next/image";
import { Button } from "./button";
import { TbArrowUpRight } from "react-icons/tb";
const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-16 px-8 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
      <div className='lg:w-1/2 xl:py-14 lg:py-8'>
        <p className='tracking-widest uppercase'>Offer for the best interior</p>
        <h1 className='h1'>
        Make your home a <br/>piece of art
      </h1>
      <p className='pb-6 text-muted-foreground xl:pb-10'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa architecto sit? Voluptate inventore in, quidem eos similique, cumque consequatur, dignissimos dicta maxime provident eveniet blanditiis enim doloremque quia placeat est magni.
      </p>
      <a href="/contact">
      <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
        Book Now <TbArrowUpRight className="w-5 h-5 ml-2"/>
      </Button>
      </a>
      </div>
      <div className='w-1/2'>
      <Image
      src="/image/hall.png"
      height={500}
      width={800}
      alt=""
      className="absolute right-22 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
      />
      </div>
    </div>
  )
}

export default HeroSection

//Hooks

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
    {
        path:'/',name:'home'
    },
    {
        path:'/about',name:'about'
    },
    {
        path:'/gallery',name:'gallery'
    },
    {
        path:'/projects',name:'projects'
    },
    {
        path:'/contact',name:'contact'
    },
]
const Nav = ({ containerStyles, linkStyles, underlineStyles } ) => {

    const path = usePathname();
  return (
    <div className={`${containerStyles}`} >
        {
            links.map((link,index) =>{
                return(
                    <Link href={link.path}
                    key={index} className="uppercase">
                        {link.name}
                        
                    </Link>
                )
            })
        }
      </div>
  )
}

export default Nav

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme(); 

  return (
    <div>
      <Button className="h-[3vh] w-[3vw]" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
        <SunIcon className="h-[1.2rem] w-[1.2rem]"/>
        <MoonIcon className="w-[1.2rem] "/>
      </Button>
    </div>
  )
}

export default ThemeToggler
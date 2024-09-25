import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme(); 

  return (
    <div>
      <Button  onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
        <SunIcon className="h-[1rem] w-[1rem] scale-0"/>
        <MoonIcon className="absolute"/>
      </Button>
    </div>
  )
}

export default ThemeToggler

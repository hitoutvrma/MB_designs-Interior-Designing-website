import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme(); 

  return (
    <div>
      <Button  onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
        <SunIcon className="h-[0.5rem] w-[0.5rem] scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0"/>
        <MoonIcon className="w-[0.5rem] absolute scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100"/>
      </Button>
    </div>
  )
}

export default ThemeToggler

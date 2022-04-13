import React, {useState, createContext, ReactElement} from "react"

export const ThemeContext = createContext<object>({})

interface props {
    children: ReactElement
}

export default function Context({children}: props){
    const [theme, setTheme] = useState<boolean>(true)
    const toggleTheme: Function = () => {
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
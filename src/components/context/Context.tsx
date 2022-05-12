import React, {createContext, ReactElement, useState} from "react"

interface appContextInterface {
    theme: boolean,
    toggleTheme: Function
}

export const ThemeContext = createContext<appContextInterface | null>(null)

interface props {
    children: ReactElement
}

interface mouseEventInt {
    onClick: Function
}

export default function Context({children}: props) {
    const [theme, setTheme] = useState<boolean>(true)
    const toggleTheme = () => {   
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
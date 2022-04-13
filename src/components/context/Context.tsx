import React, {createContext, ReactElement, useState} from "react"

interface appContextInterface {
    theme: boolean,
    toggleTheme: Function
}

export const ThemeContext = createContext<appContextInterface | null>(null)

interface props {
    children: ReactElement
}

export default function Context({children}: props) {
    const [theme, setTheme] = useState<boolean>(true)
    const toggleTheme: Function = () => {
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
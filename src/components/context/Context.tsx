import React, {useState, createContext, ReactChildren} from "react"

export const ThemeContext = createContext("")

interface props {
    children: ReactChildren
}

export default function Context({children}: props){
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
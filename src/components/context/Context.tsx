import React, {createContext, ReactElement, useState} from "react"

interface appContextInterface {
    theme: boolean,
    toggleTheme: Function
}

export const DarkModeContext = createContext<appContextInterface | null>(null)

interface props {
    children: ReactElement
}

export default function Context({children}: props) {
    const [theme, setTheme] = useState<boolean>(true)
    const toggleTheme = () => {
        setTheme(!theme)
    }
    return (
        <DarkModeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    )
}
import {useState, createContext, ReactComponentElement, ReactElement} from "react";

interface props {
    children: ReactElement
}
export const LogoContext = createContext(null)

export default function ContextNavigationLogo({children}: props){
    const[stl, setStl] = useState(false)
    const[video, setVideo] = useState(false)
    const[admin, setAdmin] = useState(false)
    return(
       <LogoContext.Provider value={{stl, video, admin}}>
           {children}
       </LogoContext.Provider>
    )
}
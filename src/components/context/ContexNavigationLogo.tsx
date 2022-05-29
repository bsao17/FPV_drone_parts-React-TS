import {useState, createContext, ReactElement} from "react";

interface props {
    children: ReactElement
}

export const LogoContext = createContext(null)

export default function ContextNavigationLogo({children}: props) {
    const [pageStl, setPageStl] = useState<boolean>(false)
    const [pageAdmin, setPageAdmin] = useState<boolean>(false)
    const [pageVideo, setPageVideo] = useState<boolean>(false)

    const togglePageStl = (value) => {
        setPageStl(value)
    }

    const togglePageVideo = (value) => {
        setPageVideo(value)
    }

    const togglePageAdmin = (value) => {
        setPageAdmin(value)
    }

    return (
        <LogoContext.Provider value={{pageStl, pageVideo, pageAdmin, togglePageStl, togglePageVideo, togglePageAdmin}}>
            {children}
        </LogoContext.Provider>
    )
}
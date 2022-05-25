import React, {ReactElement} from "react"

interface draggableContextType {
    posX: string,
    posY: string
}

interface props {
    children: ReactElement
}

const dragWindow = React.createContext<draggableContextType | null>(null)

export default function draggableContext({children}: props){
    const initialPosition: draggableContextType = {
        posX: "10px",
        posY: "10px"
    }
    return(
        <dragWindow.Provider value={initialPosition}>
            {children}
        </dragWindow.Provider>
    )
}
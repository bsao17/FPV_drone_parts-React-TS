import React, {ReactElement, createContext} from "react"

interface draggableContextType {
    posX: string,
    posY: string
}

interface props {
    children: ReactElement
}

const dragWindow = createContext<draggableContextType | null>(null)

export default function DraggableContext({children}: props) {
    const initialPosition: draggableContextType = {
        posX: "10px",
        posY: "10px"
    }
    return (
        <dragWindow.Provider value={initialPosition}>
            {children}
        </dragWindow.Provider>
    )
}
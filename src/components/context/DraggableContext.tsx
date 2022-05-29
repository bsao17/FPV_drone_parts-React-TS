import React, {ReactElement, createContext, useState} from "react"

interface draggableContextType {
    posX: string,
    posY: string
}

interface props {
    children: ReactElement
}

export const dragWindow = createContext<draggableContextType | null>(null)

export default function DraggableContext({children}: props) {
    const initialPosition: draggableContextType = {
        posX: "10px",
        posY: "10px"
    }
    const [positionState, setPositionState] = useState(initialPosition)

    return (
        <dragWindow.Provider value={positionState}>
            {children}
        </dragWindow.Provider>
    )
}
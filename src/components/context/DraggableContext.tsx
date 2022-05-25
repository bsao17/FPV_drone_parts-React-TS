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
    const dragWindowOnMouseMove = (e) => {
        setPositionState({posX: initialPosition.posX = e.pageX, posY: initialPosition.posY = e.pageY}
        )
    }
    return (
        <dragWindow.Provider value={initialPosition}>
            {children}
        </dragWindow.Provider>
    )
}
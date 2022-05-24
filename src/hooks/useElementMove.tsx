import {useEffect, useRef, useState} from "react";

export default function useElementMove(){
    const ref = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState({
        posX: "10px",
        posY: "10px"
    })

    const toDragWindow = () => {
        ref.current.style.top = mousePos.posY;
        ref.current.style.right = mousePos.posX;
    }

    const fetchCursorPosition = (e) => {
        setMousePos({
            posX: e.screenX,
            posY: e.screenY
        })
    }

    // @ts-ignore
    useEffect(fetchCursorPosition, [])

}
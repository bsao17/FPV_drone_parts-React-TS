import {useEffect, useRef, useState} from "react";

export default function useElementMove(ref){

    const [mousePos, setMousePos] = useState({
        posX: "10px",
        posY: "10px"
    })

    const fetchCursorPosition = (e) => {
        setMousePos({
            posX: e.screenX,
            posY: e.screenY
        })
    }

    // @ts-ignore
    useEffect(fetchCursorPosition, [])

}
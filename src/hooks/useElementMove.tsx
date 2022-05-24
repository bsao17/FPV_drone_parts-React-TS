import {useEffect, useRef, useState} from "react";

export default function useElementMove(state, fetch){
    const [mousePos, setMousePos] = useState(state)
    useEffect(fetch, [])
    return mousePos
}
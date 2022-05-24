import React, {useEffect, useRef, useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";

interface mousePosition {
    posX: string,
    posY: string
}

export default function Navigation_draggable(){
    const currentPosition: mousePosition = {
        posX: "10px",
        posY: "10px"
    }
    const ref = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState(currentPosition)

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

    useEffect(toDragWindow, [])

    return (
        <div ref={ref} className={styles.container} draggable={true}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
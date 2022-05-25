import React, {useEffect, useRef} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import Draggable from 'react-draggable';

interface props {
    posX: string,
    posY: string
}

export default function Navigation_draggable({posX, posY}: props) {
    const ref = useRef<HTMLUListElement>(null)

    function drag_handle(e){
        e.dataTransfer.setData("text/plain", e.target.ref)
    }

    useEffect(() => {
        ref.current.style.top = posY
        ref.current.style.right = posX
    }, [])

    return (
        <Draggable>
            <ul className={styles.list} ref={ref} onDragStart={drag_handle} draggable={"true"}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </Draggable>
    )
}
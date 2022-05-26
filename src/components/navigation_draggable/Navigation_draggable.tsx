import React, {useContext, useEffect, useRef} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import {dragWindow} from "../context/DraggableContext";
import Draggable from 'react-draggable';

export default function Navigation_draggable() {
    const dragContext = useContext(dragWindow)
    const ref = useRef<HTMLUListElement | null>(null)
    useEffect(() => {
        ref.current.style.top = dragContext.posY
        ref.current.style.right = dragContext.posX
    }, [])
    return (
        <div className={styles.container}>
            <Draggable>
                <ul className={styles.list} ref={ref} draggable={true}>
                    <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                    <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                    <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
                </ul>
            </Draggable>
        </div>
    )
}
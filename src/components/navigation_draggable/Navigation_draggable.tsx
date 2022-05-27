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
            <Draggable handle={"#listHeader"} defaultPosition={{x: 0, y: 0}}>
                <ul id={"dragHandle"} className={styles.list} ref={ref} draggable={true}>
                    <table id={"listHeader"} className={styles.tableNavigation}>
                        <thead className={styles.theadNavigation}>
                        <tr>Click here To Move Menu</tr>
                        </thead>
                    </table>
                    <li id={"stl"} className={styles.listItem}><Link to={"/"}>STL Parts</Link></li>
                    <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                    <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
                </ul>
            </Draggable>
        </div>
    )
}
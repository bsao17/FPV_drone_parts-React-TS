import React, {useEffect, useRef, useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import useElementMove from "../../hooks/useElementMove";

interface mousePosition {
    posX: string,
    posY: string
}

export default function Navigation_draggable(){
    const moveElement = useElementMove()
    console.log(mousePos)
    return (
        <div ref={ref} className={styles.container} onChange={toDragWindow} draggable={true}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
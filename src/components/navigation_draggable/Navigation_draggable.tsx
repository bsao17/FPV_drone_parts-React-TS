import React, {useEffect, useRef, useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import useElementMove from "../../hooks/useElementMove";

interface mousePosition {
    posX: string,
    posY: string
}

export default function Navigation_draggable(){
    const ref = useRef<HTMLDivElement>(null)
    const currentPosition = {
        posX: "10px",
        posY: "10px"
    }
    const moveElement = useElementMove(currentPosition ,ref)

    const toDragWindow = () => {
        ref.current.style.top = currentPosition.posY;
        ref.current.style.right = currentPosition.posX;
    }

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
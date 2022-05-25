import React, {useEffect, useRef, useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";

interface props {
    posX: string,
    posY: string
}

export default function Navigation_draggable({posX, posY}: props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref.current.style.top = posY
        ref.current.style.right = posX
    }, [])

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
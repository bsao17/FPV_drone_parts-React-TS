import React, {useEffect, useRef, useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";

interface props {
    posX: string,
    posY: string
}

export default function Navigation_draggable({posX, posY}: props) {
    const ref = useRef<HTMLDivElement>(null)

    function dragWindow(a, b){
        ref.current.style.top = a
        ref.current.style.left = b
    }

    useEffect(()=>{
        ref.current.style.top = posY
        ref.current.style.left = posX
    }, [])

    return (
        <div ref={ref} className={styles.container} onMouseUp={()=>{
            dragWindow(posX, posY)
        }} draggable={true}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
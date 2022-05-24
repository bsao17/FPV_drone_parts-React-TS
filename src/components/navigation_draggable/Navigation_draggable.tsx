import React, {useState} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";

interface mousePosition {
    posX: String,
    posY: String
}

export default function Navigation_draggable(){
    const [mousePos, setMousePoq] = useState<mousePosition>({
        posX: "10px",
        posY: "10px"
    })
    console.log({"position de la souris":typeof mousePos})
    return (
        <div className={styles.container} draggable={true}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
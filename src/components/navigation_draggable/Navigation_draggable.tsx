import React from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";

export default function Navigation_draggable(){
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
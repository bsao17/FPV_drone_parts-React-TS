import React from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import Draggable from 'react-draggable';

export default function Navigation_draggable() {
    return (
        <div className={styles.container}>
            <Draggable>
                <ul className={styles.list} draggable={true}>
                    <li className={styles.listItem}><Link to={"/"}>Home</Link></li>
                    <li className={styles.listItem}><Link to={"/video"}>Video</Link></li>
                    <li className={styles.listItem}><Link to={"/admin"}>Admin</Link></li>
                </ul>
            </Draggable>

        </div>
    )
}
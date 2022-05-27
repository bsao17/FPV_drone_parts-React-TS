import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../context/darkContext";
import styles from "./navigation.module.scss"

export default function Navigation() {
    const context = useContext(DarkModeContext)

    return (
        <div id={styles.container}>
            <ul id={context.theme ? styles.list : styles.listDark}>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/"}>STL Parts</Link></li>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/video"}>Vidéos</Link></li>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
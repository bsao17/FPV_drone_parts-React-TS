import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../context/Context";
import styles from "./navigation.module.scss"

export default function Navigation() {
    const context = useContext(DarkModeContext)
    return (
        <div id={styles.container}>
            <ul id={context.theme ? styles.list : styles.listDark}>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/"}>Home</Link></li>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/video"}>Video</Link></li>
                <li className={styles.itemList}><Link
                    style={context.theme ? {color: "black"} : {color: "white", textShadow: "1px 1px 1px black"}}
                    to={"/admin"}>Admin</Link></li>
            </ul>
        </div>
    )
}
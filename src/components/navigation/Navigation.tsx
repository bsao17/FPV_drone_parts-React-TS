import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../context/Context";
import styles from "./navigation.module.scss"

export default function Navigation() {
    const context = useContext(ThemeContext)
    return (
        <div id={styles.container}>
            <ul id={context.theme ? styles.list : styles.listDark}>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={"/"}>Home</Link></li>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={""}>Video</Link></li>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={""}>Contact</Link></li>
            </ul>
        </div>
    )
}
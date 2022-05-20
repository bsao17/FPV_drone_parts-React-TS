import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../context/Context";
import styles from "./navigation.module.scss"

export default function Navigation() {
    const context = useContext(ThemeContext)
    return (
        <div id={styles.container}>
            <ul id={styles.list}>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={"/"}>Home</Link></li>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={""}>About</Link></li>
                <li className={styles.itemList}><Link style={context.theme ? {color: "black"} : {color: "white"}}
                                                      to={""}>Contact</Link></li>
            </ul>
        </div>
    )
}
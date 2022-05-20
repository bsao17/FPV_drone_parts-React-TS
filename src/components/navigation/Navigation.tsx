import React, {useState, useEffect} from "react";
import {Link, Route} from "react-router-dom";
import styles from "./navigation.module.scss"
import Home from "../home/Home";

export default function Navigation(){
    return (
        <div id={styles.container}>
            <ul id={styles.list}>
                <li className={styles.itemList}><Link to={"/"}>Home</Link></li>
                <li className={styles.itemList}><Link to={""}>About</Link></li>
                <li className={styles.itemList}><Link to={""}>Contact</Link></li>
            </ul>
        </div>
    )
}
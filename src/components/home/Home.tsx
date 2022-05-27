import React from "react"
import styles from "./home.module.scss"
import HeaderBanner from "../header/HeaderBanner";
import Views3D from "../viewParts/Views3D";

export default function Home() {
    return (
        <div className={styles.container}>
            <HeaderBanner title={"STL Parts"}/>
            <Views3D/>
        </div>
    )
}
import React from "react";
import styles from "./signin.module.scss"
import Home from "../home/Home";
import DarkButton from "../darkButton/DarkButton";
import HeaderBanner from "../header/HeaderBanner";

const Signin = () => {
    return (
        <div className={styles.container}>
            <HeaderBanner title={"Signin"}/>
        </div>
    )
}

export default Signin
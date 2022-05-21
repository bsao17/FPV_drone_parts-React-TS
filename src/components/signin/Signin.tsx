import React from "react";
import styles from "./signin.module.scss"
import Home from "../home/Home";
import DarkButton from "../darkButton/DarkButton";

const Signin = () => {
    return (
        <div className={styles.container}>
            <Home myTitle={"Signin"}/>
            <h1>Connection</h1>
            <DarkButton/>
        </div>
    )
}

export default Signin
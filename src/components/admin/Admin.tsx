import React from "react";
import styles from "./signin.module.scss"
import HeaderBanner from "../header/HeaderBanner";

const Admin = () => {
    return (
        <div className={styles.container}>
            <HeaderBanner title={"Admin"}/>
        </div>
    )
}

export default Admin
import React, {useContext} from "react";
import styles from "./video.module.scss"
import {DarkModeContext} from "../context/Context";
import HeaderBanner from "../header/HeaderBanner";

const Video = () => {
    const context = useContext(DarkModeContext)
    return (
        <div className={styles.container}>
            <HeaderBanner title={'Video'}/>
        </div>
    )
}

export default Video
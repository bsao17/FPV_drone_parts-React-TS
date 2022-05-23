import React, {useContext} from "react";
import styles from "./video.module.scss"
import Home from "../home/Home";
import DarkButton from "../darkButton/DarkButton";
import {DarkModeContext} from "../context/Context";
import styled from "styled-components";
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
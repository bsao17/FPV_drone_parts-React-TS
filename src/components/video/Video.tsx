import React, {useContext} from "react";
import styles from "./video.module.scss"
import Home from "../home/Home";
import DarkButton from "../darkButton/DarkButton";
import {DarkModeContext} from "../context/Context";
import styled from "styled-components";

const Video = () => {
    const context = useContext(DarkModeContext)
    return (
        <div className={styles.container}>
            <Home myTitle={"Video"}/>
            <h1>Video</h1>
            <DarkButton/>
        </div>
    )
}

export default Video
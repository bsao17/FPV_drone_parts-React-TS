import {useContext, useState} from "react";
import styles from "./headerBanner.module.scss";
import Navigation from "../navigation/Navigation";
import {DarkModeContext} from "../context/darkContext";
import PictureBanner from "./PictureBanner";
import Navigation_draggable from "../navigation_draggable/Navigation_draggable";

interface title {
    title: String,
}

function HeaderBanner({title}: title) {
    const darkContext = useContext(DarkModeContext)
    return (
        <div id={darkContext.theme ? styles.container : styles.containerDark}>
            <PictureBanner/>
            {/* Navigation window, desktop screen display */}
            <Navigation/>
            {/* Navigation window, mobile responsive screen display */}
            <Navigation_draggable/>
            <h1 className={darkContext.theme ? styles.title : styles.titleDark}>
                <span>{title}</span>
            </h1>
        </div>
    );
}

export default HeaderBanner;

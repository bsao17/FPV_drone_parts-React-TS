import {useContext, useState} from "react";
import styles from "./headerBanner.module.scss";
import Navigation from "../navigation/Navigation";
import {DarkModeContext} from "../context/darkContext";
import PictureBanner from "./PictureBanner";
import Navigation_draggable from "../navigation_draggable/Navigation_draggable";
import {BsFileEarmarkPdfFill} from "react-icons/bs"
import {FaVideo} from "react-icons/fa"
import {RiAdminFill} from "react-icons/ri"

interface title {
    title: String,
}

function HeaderBanner({title}: title) {
    const darkContext = useContext(DarkModeContext)
    return (
        <div id={darkContext.theme ? styles.container : styles.containerDark}>
            <PictureBanner/>
            {/* responsive Navigation window, display on desktop screen */}
            <Navigation/>
            {/* responsive Navigation window, display on mobile screen */}
            {/*@ts-ignore*/}
            <Navigation_draggable stl={BsFileEarmarkPdfFill()} video={FaVideo()} admin={RiAdminFill()}/>
            <h1 className={darkContext.theme ? styles.title : styles.titleDark}>
                <span>{title}</span>
            </h1>
        </div>
    );
}

export default HeaderBanner;

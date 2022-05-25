import {useContext, useState} from "react";
import styles from "./headerBanner.module.scss";
import Navigation from "../navigation/Navigation";
import {DarkModeContext} from "../context/darkContext";
import PictureBanner from "./PictureBanner";
import Navigation_draggable from "../navigation_draggable/Navigation_draggable";

interface props {
    title: String,
}

interface positionNavWindow {
    posX: string,
    posY: string
}

function HeaderBanner({title}: props) {
    let initialPosition: positionNavWindow = {
        posX: "50px",
        posY: "10px"
    }
    const context = useContext(DarkModeContext)
    const [initialPositionNav, setInitialPositionNav] = useState(initialPosition)
    return (
        <div id={context.theme ? styles.container : styles.containerDark}>
            <PictureBanner/>
            <h1 className={context.theme ? styles.title : styles.titleDark}>
                <span>{title}</span>
            </h1>
            <Navigation/>
            <Navigation_draggable posX={initialPositionNav.posX} posY={initialPositionNav.posY}/>
        </div>
    );
}

export default HeaderBanner;

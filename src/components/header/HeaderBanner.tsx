import {useContext, useState} from "react";
import styles from "./headerBanner.module.scss";
import Navigation from "../navigation/Navigation";
import {DarkModeContext} from "../context/darkContext";
import PictureBanner from "./PictureBanner";
import Navigation_draggable from "../navigation_draggable/Navigation_draggable";
import {dragWindow} from "../context/DraggableContext";

interface props {
    title: String,
}

interface positionNavWindow {
    posX: string,
    posY: string
}

function HeaderBanner({title}: props) {
    const dragContext = useContext(dragWindow)
    let initialPosition: positionNavWindow = {
        posX: dragContext.posX,
        posY: dragContext.posY
    }
    const darkContext = useContext(DarkModeContext)
    const [initialPositionNav, setInitialPositionNav] = useState(initialPosition)
    return (
        <div id={darkContext.theme ? styles.container : styles.containerDark}>
            <PictureBanner/>
            <h1 className={darkContext.theme ? styles.title : styles.titleDark}>
                <span>{title}</span>
            </h1>
            {/* Navigation window, desktop screen display */}
            <Navigation/>
            {/* Navigation window, mobile responsive screen display */}
            <Navigation_draggable posX={initialPositionNav.posX} posY={initialPositionNav.posY}/>
        </div>
    );
}

export default HeaderBanner;

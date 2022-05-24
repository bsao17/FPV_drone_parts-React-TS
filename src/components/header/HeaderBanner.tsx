import {useContext, useState} from "react";
import styles from "./headerBanner.module.scss";
import banner from "./images/Mountains_Banner.jpg";
import Navigation from "../navigation/Navigation";
import {DarkModeContext} from "../context/Context";
import PictureBanner from "./PictureBanner";
import Navigation_draggable from "../navigation_draggable/Navigation_draggable";

interface props {
    title: String
}

function HeaderBanner(props: props) {
    const context = useContext(DarkModeContext)
    const [title] = useState<String>(props.title);
    return (
        // Picture banner with title and dark button
        <div id={ context.theme ? styles.container : styles.containerDark}>
{/*
            <img className={styles.banner} src={banner} alt="Banner Mountain" />
*/}
            <PictureBanner/>
            <h1 className={ context.theme ? styles.title : styles.titleDark}>
                <span>{title}</span>
            </h1>
            <Navigation/>
            <Navigation_draggable/>
        </div>
    );
}

export default HeaderBanner;

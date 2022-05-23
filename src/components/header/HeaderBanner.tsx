import { useState } from "react";
import styles from "./headerBanner.module.scss";
import banner from "./images/Mountains_Banner.jpg";
import Navigation from "../navigation/Navigation";

interface props {
    title: String
}

function HeaderBanner(props: props) {
    const [title] = useState<String>(props.title);
    return (
        // Picture banner with title and dark button
        <div id={styles.container}>
            <img className={styles.banner} src={banner} alt="Banner Mountain" />
            <h1 className={styles.title}>
                <span>{title}</span>
            </h1>
            <Navigation/>
        </div>
    );
}

export default HeaderBanner;

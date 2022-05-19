import React from "react"
import styles from "./views3D.module.scss"
import support from "./images/FPV-support_2022.png"
import {Link} from "react-router-dom";

class Views3D extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {/* <video id={styles.antenna} controls>
          <source src={"./assets/video/Antenna-FPV_2022.mp4"} type={"video/mp4"} />
        </video> */}
                <div className={"d-flex flex-column justify-content-center align-items-center "}>
                    <img id={styles.image} src={support} alt="FPV-support"/>
                    <h3>Support GoPro</h3>
                    <div className={styles.buttons}>
                        <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                           href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                        <a href={"https://bsao17.github.io/FPV_drone_parts/FPV-support.html"} className={"btn btn-primary"} >3D View</a>
                    </div>
                </div>
                <hr id={styles.separation}/>
            </div>
        );
    }
}

export default Views3D;

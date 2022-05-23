import React, {useContext} from "react"
import styles from "./views3D.module.scss"
import support from "./images/FPV-support_2022.png"
import support2 from "./images/FPV2-support_2022.png"
import {DarkModeContext} from "../context/Context";

function Views3D() {
    const context = useContext(DarkModeContext)
        return (
            <div className={styles.container}>
                {/* Part One*/}
                <div className={"d-flex flex-column justify-content-center align-items-center "}>
                    <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support} alt="FPV-support"/>
                    <hr className={styles.separation}/>
                    <h3>Cam Support</h3>
                    <div className={styles.buttons}>
                        <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                           href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                        <a href={"https://bsao17.github.io/FPV_drone_parts/FPV-support.html"}
                           className={"btn btn-primary"}>3D View</a>
                    </div>
                    <hr className={styles.separationLong}/>
                </div>

                <hr/>
                <br/>

                {/* Part Two*/}
                <div className={"d-flex flex-column justify-content-center align-items-center "}>
                    <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support2} alt="FPV-support"/>
                    <hr className={styles.separation}/>
                    <h3>GoPro Support</h3>
                    <div className={styles.buttons}>
                        <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                           href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                        <a href={"https://bsao17.github.io/FPV_drone_parts/FPV-support.html"}
                           className={"btn btn-primary"}>3D View</a>
                    </div>
                </div>
                <hr className={styles.separationLong}/>
            </div>
        );
}

export default Views3D;

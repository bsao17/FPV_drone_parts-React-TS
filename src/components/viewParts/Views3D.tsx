import React, {useContext} from "react"
import styles from "./views3D.module.scss"
import support from "./images/FPV-support_2022.png"
import support2 from "./images/FPV2-support_GoPro.png"
import support3 from "./images/support_cam_CustomizedView.png"
import support4 from "./images/Antenna-FPV_2022.png"
import {DarkModeContext} from "../context/darkContext";

function Views3D() {
    const context = useContext(DarkModeContext)
    return (
        <div className={styles.container}>
            {/* Part One*/}
            <div className={"d-flex flex-column justify-content-center align-items-center "}>
                <h3 style={context.theme ? {color: "black"} : {color: "white"}}>Cam Support</h3>
                <br/>
                <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support}
                     alt="FPV-support"/>
                <hr className={styles.separation}/>
                <div className={styles.buttons}>
                    <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                       href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                    <a href={"https://bsao17.github.io/FPV_drone_parts/FPV-support.html"}
                       className={"btn btn-primary"}>3D View</a>
                </div>
                <hr className={styles.separationLong}/>
            </div>


            {/* Part Two*/}
            <div className={"d-flex flex-column justify-content-center align-items-center "}>
                <h3 style={context.theme ? {color: "black"} : {color: "white"}}>GoPro Support</h3>
                <br/>
                <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support2}
                     alt="FPV-support"/>
                <hr className={styles.separation}/>
                <div className={styles.buttons}>
                    <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                       href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                    <a href={"https://bsao17.github.io/FPV_drone_parts/assets/support_GoPro-2_2022.html"}
                       className={"btn btn-primary"}>3D View</a>
                </div>
            </div>
            <hr className={styles.separationLong}/>
            <div className={"d-flex flex-column justify-content-center align-items-center "}>
                <h3 style={context.theme ? {color: "black"} : {color: "white"}}>All Cam Support</h3>
                <br/>
                <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support3}
                     alt="FPV-support"/>
                <hr className={styles.separation}/>
                <div className={styles.buttons}>
                    <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                       href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                </div>
                <hr className={styles.separationLong}/>
            </div>
            <div className={"d-flex flex-column justify-content-center align-items-center "}>
                <h3 style={context.theme ? {color: "black"} : {color: "white"}}>All Cam Support</h3>
                <br/>
                <img className={"mb-3"} id={context.theme ? styles.image : styles.imageDark} src={support4}
                     alt="FPV-support"/>
                <hr className={styles.separation}/>
                <div className={styles.buttons}>
                    <a className={"btn btn-success me-3"} download={"cura GoPro modele (ver. 1.0.0)"}
                       href={"./fileSTL/FPV-support.stl"}>Donwload</a>
                    <a href={"https://bsao17.github.io/FPV_drone_parts/Antenna-FPV.html"}
                       className={"btn btn-primary"}>3D View</a>
                </div>
                <hr className={styles.separationLong}/>
            </div>
        </div>
    );
}

export default Views3D;

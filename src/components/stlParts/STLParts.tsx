import React, {useContext, useEffect} from "react"
import styles from "./home.module.scss"
import HeaderBanner from "../header/HeaderBanner";
import Views3D from "../viewParts/Views3D";
import {LogoContext} from "../context/ContexNavigationLogo";

export default function STLParts() {
    const context = useContext(LogoContext)
    useEffect(()=>{
        context.togglePageStl(true)
        context.togglePageVideo(false)
        context.togglePageAdmin(false)
    }, [])
    console.log(context.pageStl)
    return (
        <div className={styles.container}>
            <HeaderBanner title={"STL Parts"}/>
            <Views3D/>
        </div>
    )
}
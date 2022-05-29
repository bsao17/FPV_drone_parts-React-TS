import React, {useContext, useEffect} from "react";
import styles from "./signin.module.scss"
import HeaderBanner from "../header/HeaderBanner";
import {LogoContext} from "../context/ContexNavigationLogo";

const Admin = () => {
    const context = useContext(LogoContext)
    useEffect(()=>{
        context.togglePageStl(false)
        context.togglePageVideo(false)
        context.togglePageAdmin(true)
    }, [])
    return (
        <div className={styles.container}>
            <HeaderBanner title={"Admin"}/>
        </div>
    )
}

export default Admin
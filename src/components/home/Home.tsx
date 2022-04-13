import React, {useState, useContext} from "react";
import styles from "./home.module.scss";
import styled from "styled-components";
import {ThemeContext} from "../context/Context";
import banner from "./images/Mountains_Banner.jpg"

interface props {
}

const NightModeButton = styled.button`
  background-color: #000;
  border-radius: 5px;
  border: inset gray 5px;
  margin-top: 2%;
`
const DayModeButton = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: inset yellow 5px;
  margin-top: 2%;
`

function Home(props: props) {
    const [title] = useState<String>("My new Hobby")
    // const [theme, setTheme] = useState(true)
    const context = useContext(ThemeContext);


    return (
        <div id={styles.container}>
            <img className={styles.banner} src={banner} alt="Banner Mountain"/>
            <h1 className={styles.title}>
                <span>{title}</span>
                <br/>
                {/*@ts-ignore*/}
                {context.theme ? (<NightModeButton className={context.theme ? `btn btn-dark` : "btn btn-light"} onClick={context.toggleTheme}>
                    {/*@ts-ignore*/}
                    <h2>{context.theme ? "🌚" : "🌞"}</h2></NightModeButton>) : (
                    //@ts-ignore*
                    <DayModeButton className={context.theme ? "btn btn-dark" : "btn btn-light"} onClick={context.toggleTheme}>
                        {/*@ts-ignore*/}
                        <h2>{context.theme ? "🌚" : "🌞"}</h2></DayModeButton>)}
            </h1>
        </div>
    );
}

export default Home;

import React, {useState} from "react";
import styles from "./home.module.scss";
import styled from "styled-components";

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
    const [theme, setTheme] = useState(true)

    function darkMode() {
        setTheme(!theme)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span>{title}</span>
                <br/>
                {theme ? (<NightModeButton className={theme ? "btn btn-dark" : "btn btn-light"} onClick={darkMode}>
                    <h2>{theme ? "🌚" : "🌞"}</h2></NightModeButton>) : (
                    <DayModeButton className={theme ? "btn btn-dark" : "btn btn-light"} onClick={darkMode}>
                        <h2>{theme ? "🌚" : "🌞"}</h2></DayModeButton>)}
            </h1>
        </div>
    );
}

export default Home;

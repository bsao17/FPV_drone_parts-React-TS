import React, {useState, useContext, ReactElement, Context} from "react";
import styles from "./home.module.scss";

interface props {
}

const ref: React.RefObject<any> = React.createRef();


function Home(props: props) {
    const[title] = useState<String>("My new Hobby")
    const[theme, setTheme] = useState(true)
    // const darkTheme = useContext()

    function darkMode() {
        setTheme(!theme)
    }
    return (
        <div className={styles.container} >
            <h1 ref={ref} className={styles.title}>
                <span>{title}</span>
                <br/>
                <button className={theme ? "btn btn-dark" : "btn btn-light"} onClick={darkMode}><h2>{theme ? "🌚" : "🌞"}</h2></button>
            </h1>
        </div>
    );
}

export default Home;

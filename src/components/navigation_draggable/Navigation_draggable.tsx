import React, {ReactElement, useContext, useEffect, useRef} from "react";
import styles from "./navigation_draggable.module.scss"
import {Link} from "react-router-dom";
import {dragWindow} from "../context/DraggableContext";
import Draggable from 'react-draggable';
import {LogoContext} from "../context/ContexNavigationLogo";

interface props {
    stl: ReactElement,
    video: ReactElement,
    admin: ReactElement
}

export default function Navigation_draggable({stl, video, admin}: props) {
    const dragContext = useContext(dragWindow)
    const context = useContext(LogoContext)
    const ref = useRef<HTMLUListElement | null>(null)
    useEffect(() => {
        ref.current.style.top = dragContext.posY
        ref.current.style.right = dragContext.posX
    }, [])
    return (
        <div className={styles.container}>
            <Draggable handle={"#listHeader"} defaultPosition={{x: 0, y: 0}}>
                <ul id={"dragHandle"} className={styles.list} ref={ref} draggable={true}>
                    <table id={"listHeader"} className={styles.tableNavigation}>
                        <thead className={styles.theadNavigation}>
                        <tr>
                            <th>Click here To Move Menu</th>
                        </tr>
                        </thead>
                    </table>
                    <li id={"stl"} className={styles.listItem}>
                        <Link to={"/"}>
                            <span className={"me-2 text-danger"}>{context.pageStl && stl}</span>
                             STL-Parts
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to={"/video"}>
                            <span className={"me-2 text-danger"}>{context.pageVideo && video}</span>
                            Videos
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to={"/admin"}>
                            <span className={"me-2 text-danger"}>{context.pageAdmin && admin}</span>
                            Admin
                        </Link>
                    </li>
                </ul>
            </Draggable>
        </div>
    )
}
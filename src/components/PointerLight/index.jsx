"use client";

import { useEffect, useState } from "react";
import styles from "./pointer.module.css";

export default function PointerLight({ y, x }) {
    const [scroll, setScroll] = useState(0);

    function updateScroll() {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);

        //Al desmontarse el componente, se elimina el evento para no generar un loop
        return function () {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <div
            className={styles.pointer}
            style={{ top: y + scroll, left: x }}
        ></div>
    );
}

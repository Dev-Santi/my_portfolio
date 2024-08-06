import style from "./header.module.css";
import { useState, useEffect } from "react";

function Indices() {
    const [scroll, setScroll] = useState(0);

    console.log(scroll);

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
        <div className={style.indice}>
            <ul>
                <li className={scroll <= 1000 ? style.active : ""}>
                    <span></span>
                    <a href="#">
                        <p>PROYECTOS</p>
                    </a>
                </li>
                <li className={scroll > 1000 ? style.active : ""}>
                    <span></span>
                    <a href="#about">
                        <p>SOBRE MÍ</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Indices;

"use client";

import { useState, useEffect } from "react";
import style from "./header.module.css";

function Indices() {
  const [scroll, setScroll] = useState(0);
  const [safeLoad, setSafeLoad] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  //Como solo el segundo renderizado se realiza en el cliente, el objeto window no existe en el primero.
  useEffect(() => {
    setSafeLoad(true);
  }, []);

  if (safeLoad) {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <div className={style.indice}>
      <ul>
        <li
          className={
            safeLoad && scroll < window.innerHeight / 4 ? style.active : ""
          }
        >
          <span></span>
          <a href='#'>
            <p>SOBRE MÍ</p>
          </a>
        </li>
        <li
          className={
            safeLoad && scroll > window.innerHeight / 4 ? style.active : ""
          }
        >
          <span></span>
          <a href='#projects'>
            <p>PROYECTOS</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Indices;

"use client";

import { useState, useEffect } from "react";
import style from "./header.module.css";

function Indices() {
  const [scroll, setScroll] = useState(0);
  const [safeLoad, setSafeLoad] = useState(false);

  const handleClick1 = () => {
    window.scrollBy(0, -999);
  };

  const handleClick2 = () => {
    window.scrollBy(0, 600);
  };

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
          onClick={handleClick1}
        >
          <span></span>
          <p>SOBRE MÍ</p>
        </li>
        <li
          className={
            safeLoad && scroll > window.innerHeight / 4 ? style.active : ""
          }
          onClick={handleClick2}
        >
          <span></span>
          <p>PROYECTOS</p>
        </li>
      </ul>
    </div>
  );
}

export default Indices;

import style from "./about.module.css";

function Special({ children }) {
  return <span className={style.special}>{children}</span>;
}

export default Special;

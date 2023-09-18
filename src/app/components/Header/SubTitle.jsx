import style from "./header.module.css";

function SubTitle({ children }) {
  return <h2 className={style.subtitle}>{children}</h2>;
}

export default SubTitle;

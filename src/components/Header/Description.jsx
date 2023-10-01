import { BsDownload } from "react-icons/bs";
import style from "./header.module.css";

function Description() {
  return (
    <>
      <p className={style.description}>
        ¡Bienvenido a mi portafolio web! <br /> Aquí encontrarás información
        sobre mí y mis proyectos.
      </p>
      <a className={style.cv} href='/cv/cv_santiago_larrosa.pdf' download>
        <span>CV</span>
        <BsDownload />
      </a>
    </>
  );
}

export default Description;

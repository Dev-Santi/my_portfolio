import style from "./header.module.css";

function Description() {
   return (
      <>
         <p className={style.description}>
            ¡Bienvenido a mi sitio web! <br /> Aquí encontrarás información sobre mí y podrás ver algunos de mis
            proyectos.
         </p>
      </>
   );
}

export default Description;

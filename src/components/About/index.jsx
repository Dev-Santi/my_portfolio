import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import Special from "./Special";
import style from "./about.module.css";

function About() {
  return (
    <section id='about' className={style.about}>
      <h2 className='sections_title'>Sobre mí</h2>
      <p>
        Soy un apasionado estudiante y desarrollador de software con la ambición de superarse tanto
        a nivel profesional como personal.
      </p>
      <p>
        Obtuve el título de <Special>Bachiller en Administracion de Empresas</Special> en{" "}
        <Link href='https://www.utu.edu.uy/node/1426' target='_blank'>
          UTU - Villa Muñoz
        </Link>
        ; luego me interesé por el desarrollo de software, y a comienzos de 2022 inicié la carrera
        de <Special>Desarrollador Full Stack</Special> en la academia{" "}
        <Link href='https://www.coderhouse.com.uy/nosotros' target='_blank'>
          CoderHouse
        </Link>
        , en la cual aprendí a utilizar lenguajes y herramientas tales como{" "}
        <Special>HTML, CSS, JavaScript, SASS, React, NodeJs, Express y MongoDB</Special>.
      </p>
      <p>
        Actualmente, me encuentro cursando la carrera de <Special>Ingeniería en Sistemas</Special>{" "}
        en la{" "}
        <Link href='https://fi.ort.edu.uy/ingenieria-en-sistemas' target='_blank'>
          Universidad ORT
        </Link>
        , al mismo tiempo que continúo fortaleciendo mis habilidades en el desarrollo de
        aplicaciones web mediante la realización de proyectos.
      </p>
      <div className={style.container}>
        <p>
          <span>
            Ante cualquier consulta, no dudes en contactarme a través de mis redes sociales.
          </span>
        </p>
        <Link id={style.download} href='/cv/cv_santiago_larrosa.pdf'>
          <span>CV</span>
          <BsDownload />
        </Link>
      </div>
    </section>
  );
}

export default About;

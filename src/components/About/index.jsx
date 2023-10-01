import { BsDownload } from "react-icons/bs";
import Special from "./Special";
import style from "./about.module.css";
import Modal from "@/components/Modal";

function About() {
  return (
    <section id='about' className={style.about}>
      <h2 className='sections_title'>Sobre mí</h2>

      <p>
        Soy un apasionado estudiante y desarrollador de software con la ambición
        de superarse tanto a nivel profesional como personal.
      </p>
      <p>
        Obtuve el título de{" "}
        <Special>Bachiller en Administracion de Empresas</Special> en{" "}
        <a href='https://www.utu.edu.uy/node/1426' target='_blank'>
          UTU - Villa Muñoz
        </a>
        , luego me interesé por el desarrollo de software, y a comienzos de 2022
        inicié la carrera de <Special>desarrollador Full Stack</Special> en la
        academia{" "}
        <a href='https://www.coderhouse.com.uy/nosotros' target='_blank'>
          CoderHouse
        </a>
        , en la cual aprendí a utilizar lenguajes y herramientas tales como{" "}
        <Special>
          HTML, CSS, JavaScript, SASS, React, NodeJs, Express y MongoDB
        </Special>
        .
      </p>
      <p>
        Mi experiencia desarrollando aplicaciones web ha sido principalmente en
        el area del frontend, pero estoy capacitado para trabajar tanto del lado
        del cliente como del servidor.
      </p>
      <p>
        Actualmente, me encuentro cursando la carrera de{" "}
        <Special>ingeniería en sistemas</Special> en la{" "}
        <a href='https://fi.ort.edu.uy/ingenieria-en-sistemas' target='_blank'>
          Universidad ORT
        </a>
        , al mismo tiempo que continúo fortaleciendo mis habilidades en el
        desarrollo de aplicaciones web mediante la realización de proyectos.
      </p>
      <p>
        Ante cualquier consulta, no dudes en contactarme a través de mis redes
        sociales.
      </p>
      <div className='buttons'>
        <a className='button a' href='/cv/cv_santiago_larrosa.pdf' download>
          <span>CV</span>
          <BsDownload />
        </a>
        <Modal
          src={"/certificates/web_developer.png"}
          alt={"Certificado de curso Desarrollo Web"}
          text={"Desarrollador Web 🎓"}
        />
        <Modal
          src={"/certificates/javascript.png"}
          alt={"Certificado de curso JavaScript"}
          text={"JavaScript 🎓"}
        />
      </div>
    </section>
  );
}

export default About;

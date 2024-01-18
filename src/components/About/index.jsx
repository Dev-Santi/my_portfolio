import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import Special from "./Special";
import style from "./about.module.css";

function About() {
    return (
        <section id="about" className={style.about}>
            <h2 className="sections_title">Sobre mí</h2>
            <p>
                ¡Hola!👋 Mi nombre es Santiago, soy un desarrollador de software
                que se especializa en el campo del desarrollo web. Me dedico a
                estudiar las últimas tendencias y tecnologías, siempre en
                búsqueda de mejorar mis habilidades y ofrecer soluciones
                innovadoras.
            </p>
            <p>
                Además, me desempeño como desarrollador web independiente,
                llevando a cabo proyectos que desafían mi creatividad y
                conocimientos 💻✨.
            </p>
            <p>
                También me encuentro cursando la carrera de{" "}
                <Special>Ingeniería en Sistemas</Special> en la{" "}
                <Link
                    href="https://fi.ort.edu.uy/ingenieria-en-sistemas"
                    target="_blank"
                >
                    Universidad ORT
                </Link>
            </p>
            <div className={style.container}>
                <p>
                    <span>
                        Si quieres hacer una consulta, no dudes en contactarme a
                        través de mis redes sociales.
                    </span>
                </p>
                <Link id={style.download} href="/cv/cv_santiago_larrosa.pdf">
                    <span>Currículum</span>
                    <BsDownload />
                </Link>
            </div>
        </section>
    );
}

export default About;

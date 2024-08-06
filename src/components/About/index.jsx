import { BsDownload } from 'react-icons/bs';
import Link from 'next/link';
import Special from './Special';
import style from './about.module.css';

function About() {
    return (
        <section id='about' className={style.about}>
            <h2 className='sections_title'>Sobre mí</h2>
            <p>
                ¡Hola! 👋 Soy Santiago, un desarrollador de software especializado 
                en la creación de sitios web modernos y eficientes.
            </p>
            <p>
                Actualmente, trabajo como desarrollador en la organización benéfica Inkua 
                y estoy cursando la carrera de {" "}
                <Special>Ingeniería en Sistemas</Special> en la {' '}
                <Link href='https://fi.ort.edu.uy/ingenieria-en-sistemas' target='_blank'>
                    Universidad ORT.
                </Link>
            </p>
            <p>
                Además, me desempeño como desarrollador web independiente, gestionando proyectos que me permiten aplicar 
                y expandir mis habilidades técnicas y creativas 💻.
            </p>
            <div className={style.container}>
                <p>
                    <span>
                        Si quieres hacer una consulta, no dudes en contactarme a través de mis
                        redes sociales.
                    </span>
                </p>
                <Link id={style.download} href='/cv/cv_santiago_larrosa.pdf'>
                    <span>Currículum</span>
                    <BsDownload />
                </Link>
            </div>
        </section>
    );
}

export default About;

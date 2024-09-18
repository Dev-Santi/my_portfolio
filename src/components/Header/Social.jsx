import style from "./header.module.css";
import { BsInstagram, BsGithub, BsLinkedin, BsFillEnvelopeAtFill, BsWhatsapp } from "react-icons/bs";

function Social() {
   return (
      <div className={style.social}>
         <a data-testid="github" href="https://github.com/Dev-Santi" target="_blank">
            <BsGithub />
         </a>
         <a
            data-testid="linkedin"
            href="https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/"
            target="_blank"
         >
            <BsLinkedin />
         </a>
         <a data-testid="email" href="mailto:info@santiagolarrosa.tech?subject=Consulta " target="_blank">
            <BsFillEnvelopeAtFill id={style.mail_icon} />
         </a>
         <a data-testid="instagram" href="https://www.instagram.com/web_montevideo/" target="_blank">
            <BsInstagram />
         </a>
         <a data-testid="whatsapp" href="https://wa.me/+59897111899" target="_blank">
            <BsWhatsapp />
         </a>
      </div>
   );
}

export default Social;

import style from "./header.module.css";
import {
    BsInstagram,
    BsGithub,
    BsLinkedin,
    BsFillEnvelopeAtFill,
    BsWhatsapp,
} from "react-icons/bs";

function Social() {
    return (
        <div className={style.social}>
            <a id="githubTest" href="https://github.com/Dev-Santi" target="_blank">
                <BsGithub />
            </a>
            <a
                id="linkedinTest"
                href="https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a id="emailTest" href="mailto:bauzalarrosasantiago@gmail.com" target="_blank">
                <BsFillEnvelopeAtFill id={style.mail_icon} />
            </a>
            <a id="instagramTest" href="https://www.instagram.com/santii.larrosa/" target="_blank">
                <BsInstagram />
            </a>
            <a id="whatsappTest" href="https://wa.me/+59897111899" target="_blank">
                <BsWhatsapp />
            </a>
        </div>
    );
}

export default Social;

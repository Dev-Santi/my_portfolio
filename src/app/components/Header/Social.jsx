import style from "./header.module.css";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFillEnvelopePlusFill,
} from "react-icons/bs";

const Social = () => {
  return (
    <div className={style.social}>
      <a href='https://github.com/Dev-Santi' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://www.instagram.com/santii.larrosa/' target='_blank'>
        <BsInstagram />
      </a>
      <a
        href='https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='mailto:bauzalarrosasantiago@gmail.com' target='_blank'>
        <BsFillEnvelopePlusFill id={style.mail_icon} />
      </a>
    </div>
  );
};

export default Social;

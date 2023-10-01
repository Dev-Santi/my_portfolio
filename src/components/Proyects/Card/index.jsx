import style from "../proyects.module.css";
import Image from "./Image";
import Title from "./Title";
import Category from "./Category";
import Description from "./Description";
import Tools from "./Tools";
import Link from "next/link";

function Card({ proyect }) {
  return (
    <Link target='_blank' href={proyect.website}>
      <div className={style.card}>
        <div className={style.content}>
          <Title title={proyect.title} />
          <Category category={proyect.category} />
          <Description description={proyect.description} />
          <Tools tools={proyect.tools} />
        </div>
        <Image src={proyect.img} alt={proyect.alt} />
      </div>
    </Link>
  );
}

export default Card;

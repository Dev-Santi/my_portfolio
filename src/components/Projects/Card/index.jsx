import style from "../projects.module.css";
import Image from "./Image";
import Title from "./Title";
import Category from "./Category";
import Description from "./Description";
import Tools from "./Tools";
import Link from "next/link";

function Card({ project }) {
  return (
    <Link target='_blank' href={project.website}>
      <div className={style.card}>
        <div className={style.content}>
          <Title title={project.title} />
          <Category category={project.category} />
          <Description description={project.description} />
          <Tools tools={project.tools} />
        </div>
        <Image src={project.img} alt={project.alt} />
      </div>
    </Link>
  );
}

export default Card;

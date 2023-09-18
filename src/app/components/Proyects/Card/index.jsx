import style from "../proyects.module.css";
import Image from "./Image";
import Title from "./Title";
import Category from "./Category";
import Description from "./Description";
import Tools from "./Tools";

function Card({ title, category, description, img, alt, tools, link }) {
  return (
    <a href={link} target='_blank'>
      <div className={style.card}>
        <Image src={img} alt={alt} />
        <div>
          <Title title={title} />
          <Category category={category} />
          <Description description={description} />
          <Tools tools={tools} />
        </div>
      </div>
    </a>
  );
}

export default Card;

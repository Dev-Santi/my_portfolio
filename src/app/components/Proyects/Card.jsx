import style from "./proyects.module.css";
import ToolTag from "./ToolTag";
import { BsArrowUpRight } from "react-icons/bs";

function Card({ title, category, description, img, alt, tools, link }) {
  return (
    <a href={link} target='_blank'>
      <div className={style.card}>
        <div>
          <img src={img} alt={alt} />
        </div>
        <div>
          <h3>
            {title}
            {<BsArrowUpRight />}
          </h3>
          <h4>{category}</h4>
          <p>{description}</p>
          <div className={style.tools_container}>
            {tools.map((tool) => {
              return <ToolTag content={tool} />;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;

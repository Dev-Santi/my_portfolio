import Card from "./Card";
import Title from "./Title";
import proyects from "../../../../public/proyects/proyects";

function Proyects() {
  return (
    <section>
      <Title />
      {proyects.map((proyect) => {
        return (
          <Card
            key={proyect.link}
            title={proyect.title}
            category={proyect.category}
            description={proyect.description}
            img={proyect.img}
            alt={proyect.alt}
            tools={proyect.tools}
            link={proyect.link}
          />
        );
      })}
    </section>
  );
}

export default Proyects;

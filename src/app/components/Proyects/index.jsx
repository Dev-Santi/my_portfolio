import Card from "./Card";
import proyects from "./proyects";

//Card needs: title, category, description, img, alt, tools
const Proyects = () => {
  return (
    <section>
      <h2 className='sections_title'>Proyectos</h2>
      {proyects.map((proyect) => {
        return (
          <Card
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
};

export default Proyects;

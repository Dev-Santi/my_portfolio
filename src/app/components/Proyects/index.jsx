import Card from "./Card";
import proyects from "./proyects";

//Card needs: title, category, description, img, alt, tools
function Proyects() {
  return (
    <section>
      <h2 className='sections_title'>Proyectos</h2>
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

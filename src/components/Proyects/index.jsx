import Card from "./Card";
import Title from "./Title";
import proyects from "@/proyects";

function Proyects() {
  return (
    <section>
      <Title />
      <ul>
        {proyects.map((proyect) => {
          return (
            <li key={proyect.id}>
              <Card proyect={proyect} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Proyects;

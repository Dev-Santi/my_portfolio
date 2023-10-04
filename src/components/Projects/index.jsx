import Card from "./Card";
import Title from "./Title";
import project from "@/projects";

function Projects() {
  return (
    <section id='projects'>
      <Title />
      <ul>
        {project.map((project) => {
          return (
            <li key={project.id}>
              <Card project={project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;

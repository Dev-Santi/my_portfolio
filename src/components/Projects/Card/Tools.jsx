import style from "../projects.module.css";
import ToolTag from "./ToolTag";

export default function Tools({ tools }) {
  return (
    <div className={style.tools_container}>
      {tools.map((tool) => {
        return <ToolTag key={tool} content={tool} />;
      })}
    </div>
  );
}

import style from "../projects.module.css";

function ToolTag({ content }) {
  return <div className={style.tool_tag}>{content}</div>;
}

export default ToolTag;

import { BsArrowUpRight } from "react-icons/bs";

export default function Title({ title }) {
  return (
    <h3>
      {title}
      {<BsArrowUpRight />}
    </h3>
  );
}

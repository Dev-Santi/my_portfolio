import style from "./header.module.css";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import Social from "./Social";

const Header = () => {
  return (
    <header className={style.header}>
      <Title>Santiago Larrosa</Title>
      <SubTitle>Desarrollador Full Stack</SubTitle>
      <Description />
      <Social />
    </header>
  );
};

export default Header;

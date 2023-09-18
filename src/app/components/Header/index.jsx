import style from "./header.module.css";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Description from "./Description";
import Social from "./Social";
import Indices from "./Indices";

function Header() {
  return (
    <header className={style.header}>
      <div>
        <Title>Santiago Larrosa</Title>
        <SubTitle>Desarrollador Frontend</SubTitle>
        <Description />
        <Indices />
      </div>
      <div>
        <Social />
      </div>
    </header>
  );
}

export default Header;

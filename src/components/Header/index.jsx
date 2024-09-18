import style from "./header.module.css";
import Title from "./Title";
import Description from "./Description";
import Social from "./Social";
import Indices from "./Indices";

function Header() {
   return (
      <header className={style.header}>
         <div>
            <Title />
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

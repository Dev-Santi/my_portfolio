import About from "./components/About";
import Header from "./components/Header";
import LigthPoint from "./components/LigthPoint";
import Proyects from "./components/Proyects";

export default function Home() {
  return (
    <main>
      <div>
        <LigthPoint />
        <Header />
      </div>
      <div>
        <About />
        <Proyects />
      </div>
    </main>
  );
}

import About from "@/components/About";
import Header from "@/components/Header";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div>
        <About />
        <Proyects />
      </div>
    </main>
  );
}

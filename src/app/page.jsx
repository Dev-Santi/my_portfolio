import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div>
        <About />
        <Projects />
      </div>
    </main>
  );
}

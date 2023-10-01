import About from "@/components/About";
import Header from "@/components/Header";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main>
      <meta property='og:image' content='<generated>' />
      <meta
        property='og:image:alt'
        content='Foto del sitio web de Santiago Larrosa'
      />
      <meta property='og:image:type' content='/card_imgs/portfolio.png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='680' />
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

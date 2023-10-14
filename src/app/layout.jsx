import "./globals.css";
import { poppins } from "../Fonts/Fonts";

export const metadata = {
  title: "Santiago Larrosa",
  authors: [
    {
      name: "Santiago Larrosa Bauza",
      url: "https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/",
    },
  ],
  description:
    "Estudiante de ingeniería en sistemas que ofrece servicios como desarrollador web.",
  keywords: [
    "NextJs",
    "SSR",
    "React",
    "Portafolio",
    "Desarrollador web",
    "Desarrollador de software",
    "Estudiante",
    "Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

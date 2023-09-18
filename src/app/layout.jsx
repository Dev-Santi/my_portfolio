import "./globals.css";
import { poppins } from "./Fonts/Fonts";

export const metadata = {
  title: "Santiago Larrosa",
  authors: [
    {
      name: "Santiago Larrosa Bauza",
      url: "https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/",
    },
  ],
  description:
    "Desarrollador web y estudiante de ingeniería de sistemas en Universidad ORT",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

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

import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eicéramique",
  description: "site pour les potiers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/** suppressHydrationWarning= elimine le default dans l'inspecteur (extension incompatible) */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import "./css/globals.css";
import "./css/variables.css";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="dark">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

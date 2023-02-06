import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <div className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

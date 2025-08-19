import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const helveticaNowDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-now-display",
});

export const metadata = {
  title: "Casino",
  description: "Find the Best UK Online Casinos",
  icons: {
    icon: "/icons/casino-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${helveticaNowDisplay.variable}`}>
      <body>
        <Header />
        <main className="pt-20"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}

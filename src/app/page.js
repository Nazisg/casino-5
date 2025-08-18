import Header from "@/layout/Header";
import TopCasinos from "@/sections/TopCasinos";
import AboutUs from "@/sections/AboutUs";
import TermsAndConditions from "@/sections/Terms&Conditions";
import Footer from "@/layout/Footer";
import Banner from "@/sections/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-15">
        <Banner/>
        <TopCasinos />
        <AboutUs />
        <TermsAndConditions />
      </main>
      <Footer/>
    </>
  );
}
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AvisosSection from "../components/AvisosSection/AvisosSection";
import HeroInicio from "../components/HeroInicio/HeroInicio";

function Inicio() {
  return (
    <>
      <NavBar />

      <HeroInicio />

      <AvisosSection />

      <Footer />
    </>
  );
}

export default Inicio;


import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
// import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
// import Pricing from "../components/Pricing";
import ButtonGradient from "../assets/svg/ButtonGradient";



const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Benefits />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default HomePage;


import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
// import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
// import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import ButtonGradient from "../assets/svg/ButtonGradient";



const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default HomePage;

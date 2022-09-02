import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import Steps from "./components/steps_section/Steps";
import Testimonials from "./components/testimonials_section/Testimonials";
import CallToAction from "./components/CTA_section/CallToAction";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {ReactDOM.createPortal(
        <Header />,
        document.querySelector(".header-container")
      )}

      <Hero />
      <Steps />
      <Testimonials />
      <CallToAction />

      {ReactDOM.createPortal(
        <Footer />,
        document.querySelector(".footer-container")
      )}
    </>
  );
}

export default App;

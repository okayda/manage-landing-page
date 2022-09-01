import Header from "./components/header/Header";
import Hero from "./components/hero_section/Hero";
import Steps from "./components/steps_section/Steps";
import Testimonials from "./components/testimonials_section/Testimonials";
import CallToAction from "./components/CTA_section/CallToAction";
import Footer from "./components/footer/Footer";

import Overlay from "./components/overlay/Overlay";
import NavMobile from "./components/nav_mobile/NavMobile";
function App() {
  return (
    <>
      {/* <Overlay />
      <NavMobile /> */}
      <Header />
      <Hero />
      <Steps />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;

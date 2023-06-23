import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/andy-holmes-0LJCEORiYg8-unsplash.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;

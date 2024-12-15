import "./App.css";
import AboutSection from "./components/aboutSection";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProjectSection from "./components/projectSection";
import ServiceSection from "./components/serviceSection";
import TestimonialCarousel from "./components/testimonialCard";
import NewsAndBlogs from "./components/blogSection";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialCarousel />
      <NewsAndBlogs />
      <Footer/>
    </div>
  );
}

export default App;

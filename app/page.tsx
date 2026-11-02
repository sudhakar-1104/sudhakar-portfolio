import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Terminal from "@/components/terminal/Terminal";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Research />
      <Terminal />
      <Contact />
      <Footer />
    </main>
  );
}
"use client";
import About from "./About/About";
import Career from "./Career/Career";
import ScrollToTopButton from "./Common/ScrollToTopButton";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Links from "./Link/Links";
import Projects from "./Project/Projects";
import Skills from "./Skill/Skills";

function Portfolio() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header scrollTo={scrollTo} />
      <main>
        <Intro />
        <About />
        <Skills />
        <Links />
        <Projects />
        <Career />
        <Education />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Portfolio;

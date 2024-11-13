"use client";
import About from "./_components/About/About";
import Career from "./_components/Career/Career";
import ScrollToTopButton from "./_components/Common/ScrollToTopButton";
import Education from "./_components/Education/Education";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Intro from "./_components/Intro/Intro";
import Links from "./_components/Link/Links";
import Projects from "./_components/Project/Projects";
import Skills from "./_components/Skill/Skills";

export default function Home() {
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

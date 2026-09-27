import Nav from "@/components/Nav";
import Impact from "@/components/Impact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

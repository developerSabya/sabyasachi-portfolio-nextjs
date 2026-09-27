import { personalInfo } from "@/data/resume";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b hairline bg-bg/95 backdrop-blur sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold text-text">
          {personalInfo.name}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-text transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-sm font-medium px-4 py-2 rounded border hairline text-accent hover:bg-panel transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

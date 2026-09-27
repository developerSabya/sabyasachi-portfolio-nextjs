import { personalInfo, education } from "@/data/resume";

export default function Contact() {
  return (
    <footer id="contact" className="border-t hairline bg-panel">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-4">
              Let&apos;s talk about your front end.
            </h2>
            <p className="text-text-muted leading-relaxed max-w-md mb-8">
              Open to senior front-end and front-end architecture roles —
              especially where performance, data-heavy UI, or AI integration
              matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-5 py-3 rounded bg-accent text-accent-ink font-medium text-sm hover:brightness-110 transition"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded border hairline text-text text-sm font-medium hover:bg-panel-raised transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-text-muted mb-4">Education</p>
            {education.map((e) => (
              <div key={e.degree} className="mb-2">
                <p className="text-text font-medium">{e.degree}</p>
                <p className="text-text-muted text-sm">{e.institution}</p>
                <p className="font-data text-text-muted text-xs mt-1">{e.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t hairline flex flex-wrap justify-between gap-4 text-xs text-text-muted">
          <span>{personalInfo.name} · {personalInfo.location}</span>
          <span className="font-data">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}

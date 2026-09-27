import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="bg-panel border-y hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-text">
            Projects
          </h2>
          <span className="font-data text-sm text-text-muted hidden sm:block">
            selected work
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-panel-raised border hairline rounded-lg p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display font-semibold text-text text-lg leading-snug">
                  {p.title}
                </h3>
                <span className="font-data text-xs text-text-muted border hairline rounded px-2 py-0.5 shrink-0">
                  {p.status}
                </span>
              </div>

              <p className="text-text-muted text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-data text-xs text-text-muted border hairline rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="font-data text-sm text-accent mt-auto pt-2">
                {p.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

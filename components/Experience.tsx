import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="flex items-baseline justify-between mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text">
          Experience
        </h2>
        <span className="font-data text-sm text-text-muted hidden sm:block">
          2015 → present
        </span>
      </div>

      <div>
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-7 border-t hairline first:border-t-0"
          >
            <p className="font-data text-sm text-text-muted">{job.duration}</p>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-display text-lg font-semibold text-text">
                  {job.position}
                </h3>
                <span className="text-text-muted text-sm">— {job.company}</span>
                {job.current && (
                  <span className="font-data text-xs text-accent border border-accent/40 rounded px-2 py-0.5">
                    current
                  </span>
                )}
              </div>
              <ul className="space-y-2 mt-3">
                {job.achievements.map((a) => (
                  <li key={a} className="text-sm text-text-muted leading-relaxed flex gap-3">
                    <span
                      className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

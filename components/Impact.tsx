import { metrics } from "@/data/resume";

export default function Impact() {
  return (
    <section
      aria-label="Career impact metrics"
      className="border-y hairline bg-panel"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="font-display text-3xl font-semibold text-accent">
              {m.value}
            </p>
            <p className="text-sm text-text-muted mt-1 leading-snug">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

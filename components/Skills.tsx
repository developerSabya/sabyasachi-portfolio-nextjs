import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-12">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-sm text-text-muted mb-4">{group.label}</p>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="font-data text-sm text-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

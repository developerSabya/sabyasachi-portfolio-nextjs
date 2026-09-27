import Image from "next/image";
import { personalInfo, experience } from "@/data/resume";

export default function Hero() {
  const current = experience.find((e) => e.current) ?? experience[0];

  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <div>
          <p className="font-data text-sm text-accent mb-5">
            {personalInfo.location} · open to senior front-end roles
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-text text-balance">
            {personalInfo.title}, focused on interfaces that hold up at
            scale.
          </h1>
          <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
            {personalInfo.summary}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded bg-accent text-accent-ink font-medium text-sm hover:brightness-110 transition"
            >
              See the work
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded border hairline text-text text-sm font-medium hover:bg-panel transition"
            >
              LinkedIn profile
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-panel border hairline rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
              <Image
                src="/sabyasachi.png"
                alt="Sabyasachi Sahoo"
                width={720}
                height={720}
                priority
                className="h-[420px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </div>

          <div className="bg-panel border hairline rounded-lg p-7 space-y-6">
            <div>
              <p className="text-xs text-text-muted mb-1">Currently</p>
              <p className="text-text font-medium">
                {current.position} at {current.company}
              </p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Based in</p>
              <p className="text-text font-medium">{personalInfo.location}</p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-1">Experience</p>
              <p className="text-text font-medium">11+ years, front-end</p>
            </div>
            <div>
              <p className="text-xs text-text-muted mb-2">Reach me</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-data text-sm text-accent hover:underline break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

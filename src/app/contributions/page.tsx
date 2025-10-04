import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export const metadata = {
  title: "Contributions",
  description: "Explore all my contributions and projects. From web applications to AI-powered platforms, discover the full range of my work as a Frontend Lead.",
  keywords: [
    "Contributions",
    "Projects",
    "Portfolio",
    "Web Development",
    "React Projects",
    "Next.js Projects",
    "Full Stack Development",
    "Frontend Development"
  ],
  alternates: {
    canonical: "https://suyanksaraswat.dev/contributions",
  },
  openGraph: {
    title: "Contributions | Suyank Saraswat",
    description: "Explore all my contributions and projects. From web applications to AI-powered platforms, discover the full range of my work as a Frontend Lead.",
    url: "https://suyanksaraswat.dev/contributions",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ContributionsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                All Contributions
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Work & Contributions
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl">
                A comprehensive collection of my work across various industries, 
                from consumer goods to fintech and ed-tech. Each project represents 
                a unique challenge and learning opportunity.
              </p>
            </div>
          </div>
        </BlurFade>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
          {DATA.contributions.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
        
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

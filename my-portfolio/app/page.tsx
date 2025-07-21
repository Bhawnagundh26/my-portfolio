import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { Encryption } from "@/components/main/encryption";
import { Projects } from "@/components/main/projects";
import { Education } from "@/components/main/Education"; // ✅ Make sure this path is correct

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Education /> {/* ✅ Added */}
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
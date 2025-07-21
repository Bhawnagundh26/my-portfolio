"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";

const GITHUB_USERNAME = "Bhawnagundh26";

const imageList = [
  "/projects/1.jpg",
  "/projects/2.jpg",
  "/projects/3.jpg",
  "/projects/4.jpg",
  "/projects/5.jpg",
  "/projects/6.jpg",
  "/projects/7.jpg",
];

function formatTitle(name: string) {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const fallbackDescription = (name: string) =>
  `This project "${formatTitle(
    name
  )}" showcases real-world development experience and a clean problem-solving workflow.`;

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  updated_at: string;
};

export const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed.");
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );

        setRepos(filtered);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
<section id="projects" className="w-full py-20 px-6">
      <h1 className="text-[40px] font-semibold text-center text-white pb-10">
        Featured Works
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading projects...</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {repos.map((repo, idx) => (
            <ProjectCard
              key={repo.id}
              src={imageList[idx % imageList.length]} // loop image list
              title={formatTitle(repo.name)}
              description={repo.description || fallbackDescription(repo.name)}
              link={repo.html_url}
            />
          ))}
        </div>
      )}
    </section>
  );
};

import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { WelcomeMessage } from '../components/WelcomeMessage';
import Image from "next/image";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function ProjectsPage() {

// Get user data from localStorage
  const getUserData = () => {
    if (typeof window !== 'undefined') {
      const storedUserData = localStorage.getItem('userData');
      return storedUserData ? JSON.parse(storedUserData) : null;
    }
    return null;
  };

  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="relative">
          <div className="max-w-2xl mx-auto lg:mx-0 mb-8">
  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
    Welcome <span className="notion-emoji">👋</span>
  </h2>
  <WelcomeMessage />
</div>

{/* Header Image */}
          <div className="w-full relative h-[260px] rounded-lg overflow-hidden">
            <Image
              src="/Page-Header.png"
              alt="Tower Bridge London Clay Model"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
        </div>

{/* Notion-like Section */}
<div className="mt-8 flex flex-col md:flex-row w-full bg-zinc-900/50 rounded-lg overflow-hidden">
  {/* Left Sidebar */}
  <div className="w-full md:w-64 bg-zinc-800/50 p-4 border-r border-zinc-700">
    <div className="space-y-2">
      <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
        📝 Getting Started
      </div>
      <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
        🎯 Project Goals
      </div>
      <div className="text-zinc-400 text-sm font-medium hover:bg-zinc-700/50 p-2 rounded cursor-pointer transition-colors">
        📚 Documentation
      </div>
    </div>
  </div>

  {/* Main Content Area */}
  <div className="flex-1 p-6 overflow-y-auto max-h-[600px]">
    <div className="space-y-6">
      {/* Page Title */}
      <div 
        className="text-2xl font-bold text-zinc-100 outline-none" 
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        Getting Started
      </div>

      {/* Content Blocks */}
      <div 
        className="text-zinc-300 outline-none prose prose-invert max-w-none"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        <p>Welcome to our project documentation! This is an editable block where you can add your content. Just click and start typing...</p>
      </div>

      <div 
        className="bg-zinc-800/50 p-4 rounded-lg text-zinc-300 outline-none"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        This is a callout block. You can use it to highlight important information.
      </div>

      {/* Todo List Example */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-zinc-300">
          <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
          <span contentEditable="true" suppressContentEditableWarning={true}>
            Create project documentation
          </span>
        </div>
        <div className="flex items-center space-x-2 text-zinc-300">
          <input type="checkbox" className="rounded bg-zinc-700 border-zinc-600"/>
          <span contentEditable="true" suppressContentEditableWarning={true}>
            Set up development environment
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
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
import { NotionSection } from "../components/NotionSection";
import { ServiceArea } from "../components/ServiceArea";
import Script from 'next/script';

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
      <NotionSection />

{/* Divider line */}
<div className="w-full h-px bg-zinc-800" />

{/* Add ServiceArea component */}
<ServiceArea />

{/* Divider line */}
<div className="w-full h-px bg-zinc-800" />

{/* Climate Clock Footer */}
<footer className="w-full py-4 md:py-8 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="climate-clock-container">
      <Script 
        src="https://climateclock.world/widget-v2.js" 
        strategy="afterInteractive"
      />
      <climate-clock />
    </div>
  </div>
</footer>

      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
  <Image
    src="/Footer-image.png"
    alt="Footer"
    width={1920}
    height={50} // Set to desired max height
    className="w-full h-[50px]" // Fixed height of 30px
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      objectFit: 'contain', // Changed to 'contain' to prevent vertical cropping
      objectPosition: 'bottom center' // Ensure image stays at bottom and centered
    }}
    priority
  />
</div>
    </div>
  );
}
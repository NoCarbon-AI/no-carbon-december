import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { cloudOpsFaqs, devOpsFaqs, aiOpsFaqs } from '@/app/lib/constants/faqData';
import Faq from '@/app/components/Faq';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <ProtectedRoute>
      <div className="bg-zinc-50 min-h-screen">
        <Header project={project} views={views} />
        <ReportView slug={project.slug} />

        {/* FAQ sections */}
      {project.slug === 'cloudops' && <Faq faqs={cloudOpsFaqs} />}
      {project.slug === 'devops' && <Faq faqs={devOpsFaqs} />}
      {project.slug === 'aiops' && <Faq faqs={aiOpsFaqs} />}

        <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
          <Mdx code={project.body.code} />
        </article>
      </div>
    </ProtectedRoute>
  );
}
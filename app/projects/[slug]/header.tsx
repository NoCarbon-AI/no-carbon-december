"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { cloudOpsFaqs, devOpsFaqs, aiOpsFaqs } from '@/app/lib/constants/faqData';
import Faq from '@/app/components/Faq';
import gsap from "gsap";

const serviceItems = [
  {
    title: "CloudOps",
    href: "/projects/cloudops",
  },
  {
    title: "DevOps",
    href: "/projects/devops",
  },
  {
    title: "AIOps",
    href: "/projects/aiops",
  },
];

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		slug: string;
	};
	views: number;
};

export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

  useEffect(() => {
    if (showSubmenu && submenuRef.current) {
      gsap.fromTo(
        submenuRef.current,
        {
          opacity: 0,
          y: -10,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [showSubmenu]);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const submenuElement = submenuRef.current;
    const menuElement = menuRef.current;
    
    if (submenuElement && menuElement) {
      const submenuRect = submenuElement.getBoundingClientRect();
      const menuRect = menuElement.getBoundingClientRect();
      
      if (
        e.clientX < submenuRect.left ||
        e.clientX > submenuRect.right ||
        e.clientY < menuRect.bottom ||
        e.clientY > submenuRect.bottom
      ) {
        setShowSubmenu(false);
      }
    }
  };

	return (
		<header
			ref={ref}
			className="relative isolate bg-gradient-to-tl from-black via-zinc-900 to-black"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					{/* Navigation Menu */}
					<div className="flex justify-between gap-8">
					<Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? "text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Pricing
            </Link>
            
            <div 
              ref={menuRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
			<Link href="/projects">
              <button
                className={`duration-200 hover:font-medium ${
                  isIntersecting
                    ? "text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Services
              </button>
			  </Link>

              {showSubmenu && (
                <div 
                  ref={submenuRef}
                  className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 z-50"
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  <div className="py-1" role="menu">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700/50 hover:text-white duration-200"
                        role="menuitem"
                        onClick={() => setShowSubmenu(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`duration-200 hover:font-medium ${
                isIntersecting
                  ? "text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Contact
            </Link>
					</div>

					<Link
						href="/projects"
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? "text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
						}`}
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
				</div>
			</div>

			{/* Rest of your existing code remains the same */}
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
							{project.title}
						</h1>
						<Image 
              src="/nocarbon-ai-star.png"
              alt="Star decoration"
              width={24}
              height={24}
              className="absolute -top-2 -right-6"
            />
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							{project.description}
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link target="_blank" key={link.label} href={link.href}>
									{link.label} <span aria-hidden="true">&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{project.slug && (
				<div className="container mx-auto relative">
					<div className="absolute -bottom-[225px] left-0 lg:left-4 z-20 hidden md:block">
						{project.slug === 'cloudops' && (
							<Image
								src="/invite-nocarbon-uk.svg"
								alt="CloudOps"
								width={300}
								height={225}
								className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
								priority
							/>
						)}
						{project.slug === 'devops' && (
							<Image
								src="/Email-Nocarbon-UK.png"
								alt="DevOps"
								width={300}
								height={225}
								className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
								priority
							/>
						)}
						{project.slug === 'aiops' && (
							<Image
								src="/Schedule-Nocarbon-Uk.png"
								alt="AIOps"
								width={300}
								height={225}
								className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
								priority
							/>
						)}
					</div>
				</div>
			)}
		</header>
	);
};
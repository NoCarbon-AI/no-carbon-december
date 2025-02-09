"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [showSubmenu, setShowSubmenu] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
					<Link
							href="/pricing"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Pricing
						</Link>
						{/* Services Menu with Submenu */}
						<div 
              className="relative"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <Link
                href="#"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Services
              </Link>

			   {/* Submenu */}
			   {showSubmenu && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white duration-200"
                        role="menuitem"
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
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};

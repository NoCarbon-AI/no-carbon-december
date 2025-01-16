"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Image from "next/image";
import { Card } from "../components/card";
import { ContactNotionSection } from "../components/ContactNotionSection";
import { TRexAnimation } from "../components/TRexAnimation";


const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "Get me an Invite code",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:hello@nocarbon.uk",
		label: "Email",
		handle: "hello@nocarbon.uk",
	},
	{
		icon: <Github size={20} />,
		href: "https://calendly.com/samarjayee/15-mins-quick-call-nocarbon-uk",
		label: "A quick 15 mins call to discuss",
		handle: "Schedule a call",
	},
];

export default function Example() {
	return (
	  <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
		<Navigation />
		{/* Main container - Modified to match projects page structure */}
		<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
			{/* Add T-Rex Animation here */}
			<TRexAnimation />
		  {/* Notion Section */}
		  <div className="w-full">
			<ContactNotionSection />
		  </div>
  
		  {/* Divider line - Added for consistency */}
		  <div className="w-full h-px bg-zinc-800" />
  
		  {/* Cards Section */}
		  <div className="grid w-full grid-cols-1 gap-16 mx-auto sm:grid-cols-3 lg:gap-24">
			{socials.map((s) => (
			  <Card key={s.href}>
				<Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-16 md:p-12"
            >
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

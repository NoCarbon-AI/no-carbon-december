"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";

// Add this new component
const DinoHeader = () => {
	return (
	  <div className="relative h-24 w-full overflow-hidden border-b border-zinc-800">
		<div className="absolute w-full h-full">
		  {/* Ground */}
		  <div className="absolute bottom-0 w-full border-b border-zinc-600" />
		  
		  {/* Dinosaur */}
		  <motion.div
			className="absolute bottom-0 text-2xl sm:text-3xl md:text-4xl"
			initial={{ x: "-100%" }}
			animate={{
			  x: ["-100%", "100%"],
			  y: [0, -40, 0],
			}}
			transition={{
			  x: {
				duration: 6,
				repeat: Infinity,
				ease: "linear"
			  },
			  y: {
				duration: 0.8,
				repeat: Infinity,
				ease: "easeOut",
				times: [0, 0.5, 1]
			  }
			}}
		  >
			🦖
		  </motion.div>
  
		  {/* Cactus */}
		  <motion.div
			className="absolute bottom-0 text-xl sm:text-2xl md:text-3xl"
			initial={{ x: "-100%" }}
			animate={{
			  x: ["-100%", "100%"],
			}}
			transition={{
			  duration: 6,
			  repeat: Infinity,
			  ease: "linear"
			}}
		  >
			🌵
		  </motion.div>
		</div>
	  </div>
	);
  };


const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "Get me an Invite code",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "dev@chronark.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		label: "Github",
		handle: "chronark",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<DinoHeader />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-16 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-24 molecular-grid">
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

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
	  image: "/invite-nocarbon-uk.png"
	},
	{
	  icon: <Mail size={20} />,
	  href: "mailto:hello@nocarbon.uk",
	  label: "Email",
	  handle: "hello@nocarbon.uk",
	  image: "/Email-Nocarbon-UK.png"
	},
	{
	  icon: <Github size={20} />,
	  href: "https://calendly.com/samarjayee/15-mins-quick-call-nocarbon-uk",
	  label: "A quick 15 mins call to discuss",
	  handle: "Schedule a call",
	  image: "/Schedule-Nocarbon-Uk.png"
	},
  ];
  
export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <TRexAnimation />
        <div className="w-full">
          <ContactNotionSection />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <div key={s.href} className="relative">
              {/* Image Container - Positioned behind and overlapping */}
              <div className="absolute w-full h-64 top-[-20%] z-0">
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity duration-700 group-hover:opacity-90"
                />
              </div>

              {/* Card - Positioned on top */}
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16"
                >
                  <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />
                  
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>

                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
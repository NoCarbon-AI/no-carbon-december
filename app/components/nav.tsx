"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
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

  // GSAP animations for submenu
  useEffect(() => {
    if (!submenuRef.current) return;

    if (showSubmenu) {
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
    
    // Check if the mouse is moving to the submenu
    if (submenuElement && menuElement) {
      const submenuRect = submenuElement.getBoundingClientRect();
      const menuRect = menuElement.getBoundingClientRect();
      
      // If mouse is not moving towards submenu, hide it
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
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/pricing"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Pricing
            </Link>
            
            <div 
              ref={menuRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
    href="/projects"  // Add this Link wrapper
    className="duration-200 text-zinc-400 hover:text-zinc-100"
  >
              <button
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Services
              </button>
              </Link>
              
              {showSubmenu && (
                <div 
                  ref={submenuRef}
                  className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 z-50"
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
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
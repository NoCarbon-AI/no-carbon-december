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
  const menuRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowSubmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowSubmenu(!showSubmenu);
    } else if (e.key === 'Escape') {
      setShowSubmenu(false);
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
              href="/pricing"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Pricing
            </Link>
            
            {/* Services Menu with Submenu */}
            <div 
              ref={menuRef}
              className="relative"
              onMouseEnter={() => setShowSubmenu(true)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
              aria-expanded={showSubmenu}
              aria-haspopup="true"
            >
              <button
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setShowSubmenu(!showSubmenu)}
              >
                Services
              </button>

              {/* Submenu */}
              {showSubmenu && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 z-50"
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  <div className="py-1" role="menu">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white duration-200"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setShowSubmenu(false)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setShowSubmenu(false);
                          }
                        }}
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
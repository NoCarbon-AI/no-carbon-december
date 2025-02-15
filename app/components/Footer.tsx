// app/components/Footer.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdEmail, MdPhone } from 'react-icons/md';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "CloudOps", href: "/projects/cloudops" },
    { name: "DevOps", href: "/projects/devops" },
    { name: "AIOps", href: "/projects/aiops" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative w-full">
  <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/NoCarbon-Logo.png"
                alt="NoCarbon Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-400">
              Empowering sustainable cloud solutions for a greener future.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul>
              {services.map((service) => (
                <li key={service.name} className="mb-2">
                  <Link
                    href={service.href}
                    className="text-zinc-400 hover:text-zinc-200 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul>
              {company.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-zinc-200 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
      {/* Email Icon */}
      <a 
        href="mailto:hello@nocarbon.uk"
        className="text-zinc-400 hover:text-zinc-100 transition duration-200"
        aria-label="Email"
      >
        <MdEmail className="h-6 w-6" />
      </a>
      
      {/* Phone Icon (placeholder for now) */}
      <a 
        href="#" // This will be updated later with the actual phone number
        className="text-zinc-400 hover:text-zinc-100 transition duration-200"
        aria-label="Phone"
      >
        <MdPhone className="h-6 w-6" />
      </a>
    </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-8 border-t border-zinc-800">
          <p className="text-center text-sm text-zinc-400">
            © {currentYear} NoCarbon. All rights reserved.
          </p>
        </div>
      </div>

      {/* Footer Image - Added as part of the footer */}
      <div className="relative w-full h-[100px]">
        <Image
          src="/Footer-image.png"
          alt="Footer"
          width={1920}
          height={100}
          className="w-full h-[100px]"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom center'
          }}
          priority
        />
      </div>
    </footer>
  );
};
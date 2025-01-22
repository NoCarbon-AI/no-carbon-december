"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Card } from './card';
import Link from 'next/link';

const services = [
  {
    title: "☁️ CloudOps",
    image: "/No-Carbon-Cloud-UK-Management.png",
    description: "Cloud operations and management services for optimal performance",
    slug: "cloudops"
  },
  {
    title: "⚙️ DevOps",
    image: "/No-Carbon-Devops.png",
    description: "Streamlined development and operations integration",
    slug: "devops"
  },
  {
    title: "🤖 AIOps",
    image: "/No-Carbon-UK-AI-OPS.png",
    description: "AI-powered operational intelligence and automation",
    slug: "aiops"
  }
];

export const ServiceArea = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const images = container.querySelectorAll('.service-image');
    const cards = container.querySelectorAll('.service-card');

    // Reset positions
    gsap.set(images, { y: -50, opacity: 0 });
    gsap.set(cards, { y: 50, opacity: 0 });

    // Animate elements
    gsap.to(images, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
    });

    gsap.to(cards, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
        {services.map((service, index) => (
          <div key={service.slug} className="relative">
            {/* Image floating above card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 md:-top-20 z-10">
              <Image
                src={service.image}
                alt={service.title}
                width={100}
                height={100}
                className="service-image w-24 md:w-32 h-auto"
              />
            </div>
            
            {/* Card */}
            <div className="service-card pt-16 md:pt-20">
              <Link href={`/services/${service.slug}`}>
                <Card>
                  <div className="p-4 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm md:text-base text-zinc-200">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
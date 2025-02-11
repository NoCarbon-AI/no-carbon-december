"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Card } from './card';
import Link from 'next/link';

const services = [
  {
    title: "☁️ Intelligent CloudOps",
    image: "/No-Carbon-Cloud-UK-Management.png",
    description: "Cloud operations and management services for optimal performance",
    slug: "cloudops"

  },
  {
    title: "⚙️ Intelligent DevOps",
    image: "/No-Carbon-Devops.png",
    description: "Streamlined development and operations integration",
    slug: "devops"
  },
  {
    title: "🤖 Nextgen AIOps",
    image: "/No-Carbon-UK-AI-OPS.png",
    description: "AI-powered operational intelligence and automation",
    slug: "aiops"
  }
];

export const ServiceArea = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Add null check here
    if (!container) return;

    const images = container.querySelectorAll('.service-image');
    const cards = container.querySelectorAll('.service-card');

    // Reset positions
    gsap.set(images, { y: -50, opacity: 0 });
    gsap.set(cards, { y: 50, opacity: 0 });

    // Animate elements
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(images, {
      duration: 1.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
    })
    .to(cards, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
    }, "-=1");

    // Add floating animation
    images.forEach((image) => {
      gsap.to(image, {
        y: "+=15",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

     // Add sparkle animation for service titles with sparkles
  const titles = container.querySelectorAll('.service-title');
  titles.forEach((title) => {
    gsap.to(title.querySelector('.sparkle'), {
      opacity: 0.8,
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-20 px-4">
        <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto gap-16 md:gap-8">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center w-full md:w-auto mb-8 md:mb-0">
                    <div className="relative service-image w-48 h-48 mb-8 md:mb-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <Link href={`/projects/${service.slug}`} className="service-card w-full">
                    <Card
    title={
        <div className="relative service-title flex items-center">
            {service.title}
            <div className="sparkle-container ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" 
                          className="sparkle-path"
                    />
                </svg>
            </div>
        </div>
    }                   
                            description={service.description}
                            className="w-full md:w-[400px]"
                        />
                    </Link>
                </div>
            ))}
        </div>
    </div>
);
};
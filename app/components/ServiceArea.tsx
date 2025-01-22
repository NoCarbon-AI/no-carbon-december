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
    }, "-=0.5");

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

  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-20">
        <div className="flex justify-around items-start max-w-7xl mx-auto">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="relative service-image w-48 h-48">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <Link href={`/projects/${service.slug}`} className="service-card w-full">
                        <Card
                            title={service.title}
                            description={service.description}
                            className="w-[300px]"
                        />
                    </Link>
                </div>
            ))}
        </div>
    </div>
);
};
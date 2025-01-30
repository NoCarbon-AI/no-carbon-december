"use client";
import { PropsWithChildren, useRef } from "react";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { gsap } from 'gsap';

interface CardProps extends PropsWithChildren {
    title?: string;
    description?: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, description, className = "" }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    const borderRef = useRef<SVGPathElement>(null);

    const animateBorder = () => {
        if (!borderRef.current) return;

        // Reset animation
        gsap.set(borderRef.current, {
            strokeDashoffset: '100%',
            opacity: 1
        });

        // Create timeline
        const tl = gsap.timeline();

        tl.to(borderRef.current, {
            strokeDashoffset: '0%',
            duration: 0.6,
            ease: "power2.Out"
        }).to(borderRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.3
        });
    };

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
        animateBorder();
    }
    
    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className={`overflow-hidden relative duration-700 border group md:gap-8 hover:border-zinc-400/50 border-zinc-600 bg-zinc-900 ${className}`}
            style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                aspectRatio: "1",
                position: 'relative'
            }}
        >
            {/* SVG Border Animation */}
            <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 346.4 346.4"
    style={{ 
        zIndex: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible'
    }}
>
                <path
    ref={borderRef}
    d="M173.2 0 L346.4 86.6 L346.4 259.8 L173.2 346.4 L0 259.8 L0 86.6 Z"
    fill="none"
    stroke="url(#purpleGradient)"
    strokeWidth="3"
    strokeDasharray="100% 100%"
    strokeDashoffset="100%"
    opacity="0"
    style={{ vectorEffect: 'non-scaling-stroke' }}
/>
<defs>
    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6A00FF" />
        <stop offset="50%" stopColor="#AD00FF" />
        <stop offset="100%" stopColor="#FF00F5" />
    </linearGradient>
</defs>
            </svg>

            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                <motion.div
                    className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
                    style={style}
                />
                <motion.div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={style}
                />
            </div>
            <div className="relative z-20 h-full p-4 flex flex-col justify-center items-center text-center">
                {title && (
                    <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white 
                                 transition duration-300 ease-in-out
                                 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200
                    transition duration-300 ease-in-out">
            {description}
        </p>
    )}
    {children}
</div>
</div>
);
};
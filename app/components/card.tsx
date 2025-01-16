"use client";
import { PropsWithChildren } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

interface CardProps extends PropsWithChildren {
    title?: string;
    description?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, description }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    
    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className={`overflow-hidden relative duration-700 border group md:gap-8 hover:border-zinc-400/50 border-zinc-600 bg-zinc-900 ${props.className}`} // Added bg-zinc-900
            style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                aspectRatio: "1",
            }}
        >
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
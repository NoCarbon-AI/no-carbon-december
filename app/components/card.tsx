"use client";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    // ... existing mouse movement logic ...

    return (
        <div
            onMouseMove={onMouseMove}
            className="overflow-hidden relative duration-700 border group md:gap-8 hover:border-zinc-400/50 border-zinc-600"
            style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                aspectRatio: "1",  // Makes it perfectly hexagonal
                transform: "rotate(0deg)",  // You can adjust this to change the orientation
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

            {children}
        </div>
    );
};
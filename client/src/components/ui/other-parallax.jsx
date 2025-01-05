"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "../../lib/utils";

export const ParallaxScroll = ({ images, className }) => {
    const { scrollYProgress } = useScroll(); // Default to the viewport scroll

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div className={cn("h-auto w-full overflow-y-hidden mt-10", className)}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-10">
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            // Apply the translateY motion value here
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                        >
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                        >
                            <img
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
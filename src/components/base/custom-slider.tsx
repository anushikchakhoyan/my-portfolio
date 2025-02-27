import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import { Button } from "@ui/button";
import { cn } from "@lib/utils";

interface SliderProps {
    items?: any;
    className?: string;
}

interface SliderContentProps {
    items: any[];
    direction: number;
    currentIndex: number;
}

interface SliderArrowProps {
    handleClick: () => void;
    children: React.ReactNode;
}

interface SliderDotsProps {
    items: any[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

const CustomSlider: React.FC<SliderProps> = ({ items, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
    };

    return (
        <>
            <div className={cn(`mx-auto flex items-center justify-between w-full max-w-3xl p-8
                           bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow-sm`, className)}>
                <SliderArrow handleClick={prevSlide}>
                    <IoChevronBackOutline />
                </SliderArrow>
                <SliderContent
                    items={items}
                    direction={direction}
                    currentIndex={currentIndex}
                />
                <SliderArrow handleClick={nextSlide}>
                    <IoChevronForwardOutline />
                </SliderArrow>
            </div>
            <SliderDots
                items={items}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </>
    );
};

export default CustomSlider;

const SliderArrow: React.FC<SliderArrowProps> = (({ handleClick, children }) => {
    return (
        <Button
            size="icon"
            variant="link"
            onClick={handleClick}
            aria-label="Next experience"
            className="text-xl text-zinc-700 hover:text-pink-600 dark:text-pink-400 dark:hover:text-primary"
        >
            {children}
        </Button>
    )
});
SliderArrow.displayName = "SliderArrow";

const SliderDots: React.FC<SliderDotsProps> = (({ items, currentIndex, setCurrentIndex }) => {
    return (
        <div className="flex justify-center mt-6 gap-2">
            {items.map((_: any, index: number) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors
                             ${index === currentIndex
                            ? "bg-primary"
                            : "bg-gray-300 hover:bg-pink-300 dark:bg-zinc-700 dark:hover:bg-primary"
                        }`}
                    aria-label={`Go to experience ${index + 1}`}
                />
            ))}
        </div>
    )
});
SliderDots.displayName = "SliderDots";

const SliderContent: React.FC<SliderContentProps> = (({ items, direction, currentIndex }) => {
    if (!items[currentIndex]) {
        return null;
    }

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col w-xl md:flex-row items-center gap-4 md:gap-8"
            >
                <div className="w-20 h-20 mx-auto">
                    {items[currentIndex].logo}
                </div>
                <div className="text-center md:text-left flex-1 grid gap-1">
                    <h2 className="text-2xl text-zinc-900 dark:text-zinc-100">
                        {items[currentIndex].company}
                    </h2>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300">
                        {items[currentIndex].role}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {items[currentIndex].duration}
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
});
SliderContent.displayName = "SliderContent";
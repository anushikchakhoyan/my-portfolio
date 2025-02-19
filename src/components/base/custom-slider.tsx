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
                           bg-white dark:bg-gray-800 rounded-lg md:shadow-lg`, className)}>
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
            variant="outline"
            onClick={handleClick}
            aria-label="Next experience"
            className="text-xl text-pink-500 hover:text-pink-600"
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
                             ${index === currentIndex ? "bg-pink-500" : "bg-gray-300 hover:bg-pink-300"
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
                className="flex flex-col w-xl md:flex-row items-start gap-4 md:gap-8"
            >
                <div className="w-20 h-20 mx-auto">
                    {items[currentIndex].logo}
                </div>
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {items[currentIndex].company}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-1">
                        {items[currentIndex].role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {items[currentIndex].duration}
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
});
SliderContent.displayName = "SliderContent";

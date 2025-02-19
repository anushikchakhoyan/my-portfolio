import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useExperiencesData from "@hooks/use-experiences-data";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import { Button } from "@ui/button";

const ExperienceSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const experiences = useExperiencesData();

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % experiences.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex(prev => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <>
            <div className="mx-auto flex items-center justify-between w-full max-w-3xl p-8
                           bg-white dark:bg-gray-800 rounded-lg md:shadow-lg">
                <Button variant="outline" size="icon"
                    onClick={prevSlide}
                    aria-label="Previous experience"
                    className="text-xl text-pink-500 hover:text-pink-600"
                >
                    <IoChevronBackOutline />
                </Button>
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
                            {experiences[currentIndex].logo}
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                {experiences[currentIndex].company}
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-1">
                                {experiences[currentIndex].role}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {experiences[currentIndex].duration}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <Button variant="outline" size="icon"
                    onClick={nextSlide}
                    aria-label="Next experience"
                    className="text-xl text-pink-500 hover:text-pink-600"
                >
                    <IoChevronForwardOutline />
                </Button>
            </div>
            <div className="flex justify-center mt-6 gap-2">
                {experiences.map((_: any, index: number) => (
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
        </>
    );
};

export default ExperienceSlider;

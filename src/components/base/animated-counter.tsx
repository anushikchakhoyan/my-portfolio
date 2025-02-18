import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
    target: string;
    isInView: boolean;
    className?: string
}

const AnimatedCounter = ({ target, isInView, ...props }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);

    const number = parseInt(target.replace(/\D/g, ""), 10); // Get numeric part
    const suffix = target.replace(/\d+/g, ""); // Get non-numeric characters

    useEffect(() => {
        if (!isInView || isNaN(number)) return; // Start animation only when in view

        setCount(0); // Reset count to 0 when re-entering view

        let start = 0;
        const duration = 1000;
        const increment = number / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= number) {
                start = number;
                clearInterval(counter);
            }
            setCount(Math.round(start));
        }, 16);

        return () => clearInterval(counter);
    }, [isInView, number]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {count}{suffix}
        </motion.span>
    );
};

export default AnimatedCounter;

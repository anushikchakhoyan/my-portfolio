import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { SectionsLayout, AnimatedCounter } from "@base/";
import useRatesData from "@hooks/use-rates-data";

interface RatesProps {
    limit: [number, number];
}

const Rates = ({ limit }: RatesProps) => {
    const rates = useRatesData();
    const [start, end] = limit;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <SectionsLayout id="rates" className="h-auto my-5 pt-0 bg-zinc-100 dark:bg-zinc-800 flex justify-center">
            <div ref={ref} className="flex flex-col items-center justify-center md:flex-row w-full lg:w-5/6 gap-10 py-10">
                {rates.map(({ id, name, rate, description }) => (
                    <div key={id} className="text-center text-gray-900 dark:text-zinc-100">
                        <motion.div
                            key={id}
                            className="text-center text-gray-900 dark:text-zinc-100"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <AnimatedCounter
                                target={rate}
                                isInView={isInView}
                                className="text-3xl lg:text-4xl font-medium" />
                        </motion.div>
                        <p className="text-xl lg:text-2xl font-italiana">{name}</p>
                        <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">{description}</p>
                    </div>
                )).slice(start, end)}
            </div>
        </SectionsLayout>
    )
}

export default Rates;

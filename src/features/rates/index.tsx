import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { SectionsLayout, AnimatedCounter, Title } from "@base/";
import useRatesData from "@hooks/custom/use-rates-data";

interface RatesProps {
    limit: [number, number];
}

const Rates: React.FC<RatesProps> = ({ limit }) => {
    const rates = useRatesData();
    const [start, end] = limit;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <SectionsLayout id="rates" className="p-0">
            <div className="py-10 bg-zinc-50 dark:bg-zinc-800 rounded-lg flex justify-center">
                <div ref={ref} className="flex flex-col items-center justify-center md:flex-row w-full lg:w-5/6 gap-10">
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
                            <Title title={name} className="text-2xl md:text-xl lg:text-2xl" />
                            <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">{description}</p>
                        </div>
                    )).slice(start, end)}
                </div>
            </div>

        </SectionsLayout>
    )
}

export default Rates;

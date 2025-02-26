import React from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import useBenefitsData from "@hooks/custom/use-benefits-data";
import { SectionsLayout, Title } from "@base/";
import { Service } from "@lib/types";

const Benefits: React.FC<{ type: Service }> = ({ type }) => {
    const { t } = useTranslation();
    const benefits = useBenefitsData(type);

    return (
        <SectionsLayout id="benefits" className="bg-gold-100 dark:bg-zinc-900 text-center py-16">
            <Title title={t('benefits')} />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                {benefits.map((item, index) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)" }}
                        transition={{ duration: 0.3 }}
                        className={`overflow-hidden flex cursor-pointer
                            ${index % 2 === 0
                                ? "bg-zinc-800 text-white flex-row lg:flex-col-reverse"
                                : "bg-gray-100 text-zinc-800 flex-row lg:flex-col"
                            }`}
                    >
                        <GatsbyImage
                            image={item.image}
                            alt={item.image}
                            className="w-full h-full hidden sm:block max-h-60 md:max-h-[30rem]"
                        />
                        <div className="p-5 lg:p-10 min-h-44 gap-4 flex flex-col items-center justify-center">
                            <h3 className="text-xl lg:text-xl">{item.title}</h3>
                            <p className="text-xs lg:text-sm sm:max-w-xs">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionsLayout>
    );
};

export default Benefits;

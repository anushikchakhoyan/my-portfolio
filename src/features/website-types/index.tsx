import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import useWebsiteTypeaData from "@hooks/custom/use-website-types-data";
import { SectionsLayout } from "@base/";
import { cn } from "@lib/utils";

import coverImage from "@images/types/cover.jpg";
import { motion } from "framer-motion";

const WebsiteTypes: React.FC = () => {
    const { t } = useTranslation();
    const websites = useWebsiteTypeaData();

    return (
        <SectionsLayout id="website-types" className="h-[600px] md:h-[800px]">
            <Swiper
                direction="vertical"
                spaceBetween={0}
                mousewheel={{
                    forceToAxis: true,
                    thresholdDelta: 8,
                    thresholdTime: 300,
                }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="w-full h-full">
                <SwiperSlide className="relative flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="text-center xl:px-8 space-y-8 w-full lg:w-4/5 relative z-10">
                        <h3 className="text-2xl xl:text-4xl font-medium text-primary">{t('websiteTypesTitle')}</h3>
                        <p className="text-xl xl:text-2xl font-medium text-zinc-800 dark:text-gray-200">{t('websiteTypesDescription')}</p>
                    </div>
                </SwiperSlide>
                {websites.map(({ key, descKey, img }, index) => (
                    <SwiperSlide key={key} className={cn(`px-8 gap-6 xl:gap-4 rounded-lg
                   flex flex-col-reverse lg:flex-row items-center justify-center`,
                        index % 2 === 0 ? 'bg-zinc-50 dark:bg-zinc-700' : 'bg-zinc-200 dark:bg-zinc-800')}
                    >
                        <div className="w-4/5 lg:w-5/12 xl:w-1/2">
                            <GatsbyImage
                                image={img}
                                alt={key}
                                className="w-full h-full rounded-lg shadow-lg bg-secondary"
                            />
                        </div>
                        <div className="text-center xl:px-8 space-y-8 w-full lg:w-5/12 xl:w-1/2">
                            <h3 className="text-2xl xl:text-4xl font-medium text-zinc-800 dark:text-white">{t(key)}</h3>
                            <p className="text-xl xl:text-2xl font-medium text-gray-700 dark:text-gray-200">{t(descKey)}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionsLayout>
    );
};

export default WebsiteTypes;

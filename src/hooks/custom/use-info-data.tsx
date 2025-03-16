import { Info, Service } from "@lib/types";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { SERVICES_CATEGORY } from "@lib/constants";

export default function useInfoData(type: Service) {
    const { t } = useTranslation();

    const info: Record<Service, Info[]> = {
        [SERVICES_CATEGORY.website]: [],
        [SERVICES_CATEGORY.collaboration]: [],
        [SERVICES_CATEGORY.mentorship]: [
            {
                title: t('whatIsMentorshipTitle'),
            },
            {
                description: t('whatIsMentorshipDescription'),
            },
            {
                title: t('mentorshipProgramTitle'),
            },
            {
                description: t('mentorshipProgramDescription'),
            },
            {
                title: t('whoCanParticipateTitle'),
                items: t('whoCanParticipateItems', { returnObjects: true }) as string[],
            },
            {
                title: t('goalsTitle'),
                items: t('goalsItems', { returnObjects: true }) as string[],
            },
            {
                title: t('mentorshipProgramBenefitsTitle'),
                items: t('mentorshipProgramBenefitsItems', { returnObjects: true }) as string[],
            },
        ],
    }

    return info[type];
};

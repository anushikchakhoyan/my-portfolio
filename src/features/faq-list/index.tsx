import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@ui/accordion";
import { SectionsLayout } from "@base/";

interface FAQItem {
    title: string,
    description: string,
}

const FaqList = () => {
    const { t } = useTranslation();
    const items: FAQItem[] = Array.from({ length: 10 }, (_, index) => index + 1).map((data) => {
        return {
            title: t(`faqTitle${data}`),
            description: t(`faqDesc${data}`)
        };
    });

    return (
        <SectionsLayout id="title" title={t('frequentlyAskedQuestions')}>
            <div className="w-full md:w-2/3 lg:w-1/2 mx-auto px-4 md:px-5">
                {items.map(({ title, description }: FAQItem) => (
                    <Accordion key={title} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <p dangerouslySetInnerHTML={{ __html: title as string }} />
                            </AccordionTrigger>
                            <AccordionContent className="whitespace-pre-line">
                                <p dangerouslySetInnerHTML={{ __html: description as string }} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </SectionsLayout>
    )
}

export default FaqList;

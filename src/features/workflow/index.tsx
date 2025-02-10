import * as React from "react";
import { useTranslation } from "react-i18next";

import { SectionsLayout, Stepper } from "@base/";

const Workflow = () => {
  const { t } = useTranslation();

  const steps = [
    { id: 1, title: t('discoveryConsultation'), description: t('discoveryConsultationDesc') },
    { id: 2, title: t('planningStrategy'), description: t('planningStrategyDesc') },
    { id: 3, title: t('designDevelopment'), description: t('designDevelopmentDesc') },
    { id: 4, title: t('testingFeedback'), description: t('testingFeedbackDesc') },
    { id: 5, title: t('launchSupport'), description: t('launchSupportDesc') },
  ];

  return (
    <SectionsLayout id="content" className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="space-y-8">
        <h1 className="text-4xl font-medium font-italiana">{t('workingWithClient')}</h1>
        <span className="text-base">{t('buildingWebsite')}</span>
        <Stepper steps={steps} />
      </div>
    </SectionsLayout>
  )
}

export default Workflow;

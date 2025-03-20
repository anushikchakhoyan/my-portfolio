import React from "react";
import { Form, Formik } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { InputField, Title } from "@base/";
import { Button } from "@ui/button";

const SelectedPlan: React.FC<{ handleSubmit: (values: { email: string; }) => Promise<void> }> = ({ handleSubmit }) => {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 py-8 px-4 rounded-lg w-full max-w-lg">
                <Title title={t("choosePlanCta")} className="!text-base mb-5" />
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="w-full space-y-6">
                            <InputField name="email" label={t("email")} />
                            <Button
                                size="lg"
                                type="submit"
                                variant="outline"
                                className="w-full hover:scale-100"
                                disabled={isSubmitting}
                            >
                                {t("send")}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SelectedPlan;

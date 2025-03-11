import * as Yup from "yup";
import React from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Field, Form, Formik, FormikHelpers } from "formik";

import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from "@lib/constants";
import { useToast } from "@hooks/use-toast";
import { Textarea } from "@ui/textarea";
import { Button } from "@ui/button";
import { Input } from "@ui/input";

type SubscribeTypes = {
    email: string;
    name: string;
    message: string;
};

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    const { toast } = useToast()
    const initialValues: SubscribeTypes = { email: "", name: "", message: "" };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("requiredField") as string),
        email: Yup.string()
            .email(t("invalidEmail") as string)
            .required(t("requiredField") as string),
        message: Yup.string().required(t("requiredField") as string),
    });

    const handleSubmit = async (
        values: SubscribeTypes,
        { setSubmitting, resetForm }: FormikHelpers<SubscribeTypes>
    ): Promise<void> => {
        try {
            const response = await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                },
                EMAIL_JS_PUBLIC_KEY
            );

            if (response.status === 200) {
                toast({
                    variant: "success",
                    title: t('emailSent') as string,
                    description: t('emailSentDesc'),
                })
                resetForm();
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            toast({
                variant: "destructive",
                title: t('emailFailed') as string,
                description: t('emailFailedDesc'),
            })
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full md:w-1/2">
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4 w-full">
                        <Field
                            as={Input}
                            type="text"
                            name="name"
                            placeholder={t("fullName")}
                            className="h-12"
                        />
                        <Field
                            as={Input}
                            type="email"
                            name="email"
                            placeholder={t("email")}
                            className="h-12"
                        />
                        <Field
                            as={Textarea}
                            type="text"
                            name="message"
                            className="resize-none h-28"
                            placeholder={t("tellUsYourself")}
                        />
                        <Button
                            size="xl"
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4"
                            variant="secondary"
                        >
                            {isSubmitting ? t("submitting") : t("send")}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;

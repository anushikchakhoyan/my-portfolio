import * as Yup from "yup";
import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Formik, FormikHelpers } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from "@lib/constants";
import { SelectField, InputField, PhoneField } from "@base/";
import { useToast } from "@hooks/use-toast";
import { Textarea } from "@ui/textarea";
import { Button } from "@ui/button";

import "react-phone-number-input/style.css";

type SubscribeTypes = {
    email: string;
    phone: string;
    name: string;
    message: string;
    service: string;
};

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    const { toast } = useToast()
    const initialValues: SubscribeTypes = { email: "", phone: "", name: "", message: "", service: "" };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("requiredField") as string),
        email: Yup.string()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                t("invalidEmail") as string
            ).required(t("requiredField") as string),
        phone: Yup.string().matches(
            /^\+[1-9]{1}[0-9]{5,14}$/,
            t("invalidPhone") as string
        ).required(t("requiredField") as string),
        message: Yup.string().required(t("requiredField") as string),
        service: Yup.string().required(t("requiredField") as string),
    });

    const handleSubmit = async (
        values: SubscribeTypes,
        { setSubmitting, resetForm }: FormikHelpers<any>
    ): Promise<void> => {
        try {
            const response = await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    service: values.service
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
                        <InputField name="name" label={t("fullName")} />
                        <InputField name="email" label={t("email")} />
                        <PhoneField name="phone" label={t("phone")} />
                        <SelectField
                            name="service"
                            label={t("services")}
                            options={[
                                { value: "website", label: t('websiteCreation') },
                                { value: "mentorship", label: t("mentorship") },
                                { value: "collab", label: t("collaboration") },
                            ]}
                        />
                        <InputField
                            as={Textarea}
                            name="message"
                            label={t("tellUsYourself")}
                            className="resize-none h-28" />
                        <Button
                            size="xl"
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 text-lg"
                        >
                            {isSubmitting ? (
                                <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                            ) : t("send")}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;

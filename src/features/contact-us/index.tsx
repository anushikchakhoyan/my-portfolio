import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { FormEvent, SyntheticEvent, useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from "@/lib/constants";
import { UnderlineText, SectionsLayout } from "@/base/";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

type SubscribeTypes = {
  email: string;
  name: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  const initialValues: SubscribeTypes = { email: "", name: "", message: "" }

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
        alert(t("emailSent"));
        resetForm();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(t("emailFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionsLayout id="contact" title={t("contact")}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20">
        <div className="w-full md:w-1/2 px-4 md:px-5 flex items-start flex-col gap-5">
          <h2 className="text-4xl font-bold">{t("getInTouch")}</h2>
          <span className="px-3 text-lg font-medium font-josefinSans">
            ⎯ {t("haveSomethingShare")} {t("contactDescription")} {t("getBackToYouSoon")}
          </span>
          <p className="py-2">
            {t("reachOutViaEmail")}
            <UnderlineText text={"anush.chakhoyan.work@gmail.com"} className="inline-block text-sm" />
          </p>
        </div>
        <div className="w-full md:w-1/2 md:px-5 flex items-center justify-center">
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
                {/* <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs font-josefinSans"
                /> */}
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
                >
                  {isSubmitting ? t("submitting") : t("subscribe")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SectionsLayout>
  )
}

export default ContactUs

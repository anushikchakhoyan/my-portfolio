import * as Yup from "yup";
import * as React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";

import UnderlineText from "@/components/base/underline-text";
import SectionsLayout from "@/features/layout/section";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SubscribeTypes {
  email: string;
}

const ContactUs: React.FC = () => {
  const { t } = useTranslation()

  const initialValues: SubscribeTypes = { email: "" }

  const handleSubmit = (values: SubscribeTypes, actions: any) => {
    console.log({ values, actions })
    actions.setSubmitting(false)
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("invalidEmail") || "")
      .required(t("requiredField") || "")
  })

  return (
    <SectionsLayout id="contact" className="px-10">
      <div className="flex items-center justify-start w-full gap-20">
        <div className="w-1/2 px-5 flex items-start flex-col gap-5">
          <h1 className="text-5xl font-bold font-montserrat">{t("contact")}</h1>
          <span className="px-3 text-lg font-medium font-josefinSans">
            ⎯ {t("haveSomethingShare")} {t("contactDescription")} {t("getBackToYouSoon")}
          </span>
          <p className="py-2 font-montserrat">
            {t("reachOutMe")}
            <UnderlineText text={"anush.chakhoyan.work@gmail.com"} className="inline-block text-sm font-montserrat" />
          </p>
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
                  name="fullName"
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
                <ErrorMessage
                  name="email"
                  component="div"
                  className="px-3 text-red-500 text-xs font-josefinSans"
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
        <div className="w-1/4 flex items-center justify-center font-montserrat">
          <div className="bg-pink-50 w-full max-w-lg blur-3xl h-12 absolute -z-10" />
        </div>
      </div>
    </SectionsLayout>
  )
}
export default ContactUs

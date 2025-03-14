import React from "react";
import { useField, useFormikContext } from "formik";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import { cn } from "@lib/utils";

type PhoneProps = {
    name: string,
    label: string,
}

const PhoneField: React.FC<PhoneProps> = ({ name, label, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, helpers] = useField(name);

    const handleChange = (value: any) => {
        setFieldValue(field.name, value);
    };

    return (
        <div className="space-y-2">
            <PhoneInput
                {...field}
                {...props}
                international
                defaultCountry="AM"
                withCountryCallingCode
                onChange={handleChange}
                className={cn("h-12 rounded-lg border border-input px-3 py-1 text-base",
                    meta.touched && meta.error && "border-red-500"
                )}
            />
            {meta.touched && meta.error && (
                <div className="text-xs text-red-500">{meta.error}</div>
            )}
        </div>
    );
};

export default PhoneField;

import React from "react";
import { Field, useField } from "formik";

import { Input } from "@ui/input";

type InputProps = {
    as?: React.ReactNode | any,
    name: string,
    label: string,
    className?: string,
}

const InputField: React.FC<InputProps> = ({ name, label, className, ...props }) => {
    const [field, meta, helpers] = useField<{ name: string }>(name);

    return (
        <div className="w-full space-y-2">
            <Field
                as={Input}
                {...field}
                {...props}
                placeholder={label}
                onValueChange={(value: any) => {
                    helpers.setValue(value);
                }}
                className={`h-12 ${className} ${meta.touched && meta.error ? "border-red-500" : ""}`}
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-xs">{meta.error}</div>
            )}
        </div>
    )
}

export default InputField;
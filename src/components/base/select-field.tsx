import React from "react";
import { useField } from "formik";

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@ui/select";

type SelectProps = {
    name: string;
    label: string;
    options: {
        value: string;
        label: string;
    }[];
};

const SelectField: React.FC<SelectProps> = ({ name, label, options }) => {
    const [field, meta, helpers] = useField<string>(name);

    return (
        <div className="space-y-2">
            <Select
                value={field.value}
                onValueChange={(value) => {
                    helpers.setValue(value);
                }}
            >
                <SelectTrigger id={name} className={`h-12 ${meta.touched && meta.error ? "border-red-500" : ""}`}>
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {meta.touched && meta.error && (
                <div className="text-red-500 text-xs">{meta.error}</div>
            )}
        </div>
    );
};

export default SelectField;

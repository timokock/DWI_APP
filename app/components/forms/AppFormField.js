import React from 'react';
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
    
    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
    
    return (
        <>
            <AppTextInput
                width={width}
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />            
        </>
    )
}

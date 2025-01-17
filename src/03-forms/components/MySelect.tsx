import { ErrorMessage, useField } from "formik";
import React from "react";


interface Props {
    label: string;
    name: string;
    placeholder?:string;
    [x: string]: any;
    children?:React.ReactElement | React.ReactElement[];
}

export const MySelect = ({ label,children, ...props }: Props) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>{ children }  </select>
            <ErrorMessage name={props.name} component={'span'}/>
            {
                // meta.touched && meta.error && (
                //     <span className="error">{meta.error}</span>
                // )
            }
        </>
    )
}



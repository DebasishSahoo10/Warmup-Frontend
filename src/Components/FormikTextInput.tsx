import { TextInputPropTypes } from "../Declarations/declaration";
import { useField } from "formik";
import React from "react";


const FormikTextInput: React.FC<TextInputPropTypes> = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col flex-1">
      <label htmlFor={props.name} className="text-primary font-medium">{props.label} <span className="text-errorColor">*</span> </label>
      <input className={`border-2 border-borderColor p-1 rounded-lg text-sm md:text-base ${meta.touched && meta.error && "border-errorColor"}`} {...field} {...props} />
      {meta.touched && meta.error ? <div className="text-errorColor font-semibold">{meta.error}</div> : null}
    </div>
  );
};

export default FormikTextInput;

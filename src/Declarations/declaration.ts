import { ReactNode } from "react";

export type MoviesArray = [{ title: string }] | [];

export type FormikValueTypes = {
  initialValues: InitialValues;
};

export type InitialValues = {
  firstName: string;
  lastName: string;
  favMovie: string;
};

export type TextInputPropTypes = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export type SelectPropTypes = {
  label: string;
  name: string;
  children?: ReactNode;
};

export type SubmitButtonPropTypes = {
  isSubmitting : boolean;
  dirty : boolean;
  isValid : boolean;
  handleSubmit :  (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  setIsSubmit : React.Dispatch<React.SetStateAction<boolean>>
}

export type FormikSelectType = {
  status : string;
  data : Array<{title : string}>
}
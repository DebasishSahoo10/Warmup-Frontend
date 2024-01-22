import * as Yup from "yup";

export const MovieFormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(4, "Must be at least 4 characters")
    .required("Sorry this input can not be blank"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(4, "Must be at least 4 characters")
    .required("Sorry this input can not be blank"),
  favMovie: Yup.string().required("Select at least one movie"),
});

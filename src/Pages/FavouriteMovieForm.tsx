import { handleFavMovieSubmit, usePosts } from "../Data/DataUtils";
import { MovieFormSchema } from "../../Utils/FormYupSchema";
import FormikTextInput from "../Components/FormikTextInput";
import { initialValues } from "../../Utils/InitialData";
import FormikSelect from "../Components/FormikSelect";
import FormikButton from "../Components/FormikButton";
import { Formik, Form } from "formik";
import { useState } from "react";

const FavouriteMovieForm = () => {
  const { status, data } = usePosts();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  return (
    <>
      {!isSubmit && (
        <Formik initialValues={initialValues} validationSchema={MovieFormSchema} onSubmit={handleFavMovieSubmit}>
          {({ handleSubmit, isSubmitting, dirty, isValid }) => (
            <Form className="flex flex-col justify-between w-full h-[500px] md:h-[80vh]">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 w-full flex-wrap">
                  <FormikTextInput label="First Name" name="firstName" type="text" placeholder="Jane" />
                  <FormikTextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />
                </div>
                <FormikSelect status={status} data={data} />
              </div>
              <div className="flex justify-end">
                <FormikButton isSubmitting={isSubmitting} dirty={dirty} isValid={isValid} handleSubmit={handleSubmit} setIsSubmit={setIsSubmit}/>
              </div>
            </Form>
          )}
        </Formik>
      )}
      {isSubmit && (
        <div className="absolute top-[50%] md:left-[40%] text-primary font-medium">Thanks for submitting the form!</div>
      )}
    </>
  );
};

export default FavouriteMovieForm;

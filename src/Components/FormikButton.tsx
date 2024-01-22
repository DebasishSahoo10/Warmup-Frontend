import { SubmitButtonPropTypes } from "../Declarations/declaration";

const FormikButton : React.FC<SubmitButtonPropTypes> = ({isSubmitting, dirty, isValid, handleSubmit, setIsSubmit}) => {
  return (
    <button
      type="submit"
      className="p-1 rounded-lg text-white bg-btnBackground w-24 disabled:cursor-not-allowed"
      disabled={isSubmitting || !dirty || !isValid}
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
        setIsSubmit(true);
      }}
    >
      Submit
    </button>
  );
};

export default FormikButton;

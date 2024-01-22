import { FormikSelectType } from "../Declarations/declaration"
import FormikSelectInput from "./FormikSelectInput"

const FormikSelect : React.FC<FormikSelectType> = ({status, data}) => {
  return (
    <FormikSelectInput label="Favourite Star Wars Movie" name="favMovie">
    {status!=="loading" && (
      <>
        <option value="">Select your favourite one</option>
        {data.map((movie : {title : string}) => (
          <option value={movie.title} key={movie.title}>
            {movie.title}
          </option>
        ))}
      </>
    )}
    {status==="loading" && (
      <option className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent">
        Please wait movies are loading
      </option>
    )}
  </FormikSelectInput>
  )
}

export default FormikSelect
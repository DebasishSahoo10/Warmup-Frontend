import { InitialValues } from "../Declarations/declaration";
import { useQuery } from "react-query";
import axios from "axios";

export const handleFavMovieSubmit = async (values : InitialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export const usePosts = () => {
  const queryForAllTitle = "{allFilms{films{title}}}"
  const encodedQuery = encodeURIComponent(queryForAllTitle)
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      `https://swapi-graphql.netlify.app/.netlify/functions/index?query=${encodedQuery}`
    );
    return data.data.allFilms.films
  });
}

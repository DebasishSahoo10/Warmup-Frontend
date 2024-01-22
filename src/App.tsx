import { QueryClient, QueryClientProvider } from "react-query";
import FavouriteMovieForm from "./Pages/FavouriteMovieForm";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-5 md:w-[70%] flex flex-col gap-5">
        <h1 className="text-xl md:text-3xl font-bold text-primary">My Form</h1>
        <FavouriteMovieForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;

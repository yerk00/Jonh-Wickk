import { MovieMain } from "./components/MovieMain";
import "./App.css";
import { TopCastContainer } from "./components/TopCastContainer";
import { BookingButton } from "./components/BookingButton";
import { useEffect, useState } from "react";

function App() {
  const [dogs, setDogs] = useState("");
  // console.log(dogs);
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setDogs(data));
  }, []);

  return (
    <div className="App">
      <MovieMain dogs={dogs} />

      <TopCastContainer />

      <BookingButton />
    </div>
  );
}

export default App;

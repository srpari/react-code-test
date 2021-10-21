import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import LocationHeader from "./components/LocationHeader";
import LocationLists from "./components/LocationLists";

function App() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthLocations = async () => {
      const data = await fetch(
        "https://6033c4d8843b15001793194e.mockapi.io/api/locations"
      ).then((res) => res.json());
      setLocations(data);
      setIsLoading(false);
    };
    fecthLocations();
  }, []);
  // console.log("locations ", locations);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <LocationHeader />
      <LocationLists locationList={locations} />
    </>
  );
}

export default App;

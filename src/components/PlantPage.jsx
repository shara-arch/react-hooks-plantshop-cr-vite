import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => {
      if(!r.ok) throw new Error("Failed to fetch plants");
      return r.json();
    })
    .then((data) => {
      setPlants(data);
      setLoading(false);//Stop Loading
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    })
  },[])
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <main>
      <NewPlantForm onAddPlant={(plant) => setPlants((prevPlants) => [...prevPlants, plant])} />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;

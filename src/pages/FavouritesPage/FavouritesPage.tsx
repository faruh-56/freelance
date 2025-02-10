import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavouriteCards.css";
import { Navbar } from "../../components/Navbar/Navbar";

interface Location {
  name: string;
}

interface Level {
  name: string;
}

interface Company {
  name: string;
}

interface Job {
  id: number;
  name: string;
  company: Company;
  locations: Location[];
  levels: Level[];
}

export const FavouriteCards = () => {
  const [favorites, setFavorites] = useState<Job[]>([]); 

  useEffect(() => {
    const storedFavorites: Job[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    alert("Удалено из избранного!");
  };

  if (favorites.length === 0) {
    return (
      <div className="container">
        <Navbar />
        <p>Список избранного пуст.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar />
      {favorites.map((job) => (
        <div className="job-card" key={job.id}>
          <h2>{job.name}</h2>
          <p>
            <strong>Company:</strong> {job.company.name}
          </p>
          <p>
            <strong>Locations:</strong>{" "}
            {job.locations.map((loc) => loc.name).join(", ")}
          </p>
          <p>
            <strong>Levels:</strong> {job.levels.map((level) => level.name).join(", ")}
          </p>
          <Link to={`/card/${job.id}`} style={{ color: "blue" }}>
            Подробнее...
          </Link>
          <button
            className="remove-button"
            onClick={() => handleRemoveFromFavorites(job.id)}
          >
            Удалить из избранного
          </button>
        </div>
      ))}
    </div>
  );
};



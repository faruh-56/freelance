import { Link } from "react-router-dom";
import { useGetJobsQuery } from "../../store/api/freelance";
import "./MainPage.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const MainPage = () => {
  const { data, error, isLoading } = useGetJobsQuery({ page: 1 });

  const handleAddToFavorites = (job: any) => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = existingFavorites.some((fav: any) => fav.id === job.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...existingFavorites, job];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Добавлено в избранное!");
    } else {
      alert("Этот элемент уже добавлен в избранное.");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching jobs</p>;

  return (
    <div className="container">
      <Navbar />
      {data?.results.map((job) => (
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
            className="favorite-button"
            onClick={() => handleAddToFavorites(job)}
          >
            Добавить в избранное
          </button>
        </div>
      ))}
    </div>
  );
};

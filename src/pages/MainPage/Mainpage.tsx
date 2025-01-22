import { useGetJobsQuery } from "../../store/api/freelance"
import "./MainPage.css"

export const MainPage = () => {
  const { data, error, isLoading } = useGetJobsQuery({ page: 1 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching jobs</p>;

  return (
    <div>
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
        </div>
      ))}
    </div>
  );
}

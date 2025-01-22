import { useGetJobsQuery } from "../../store/api/freelance"

export const MainPage = () => {
  const { data, error, isLoading } = useGetJobsQuery({ page: 1 });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching jobs</p>;

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {data?.results.map((job) => (
                    <li key={job.id}>
                        <h2>{job.name}</h2>
                        <p>Company: {job.company.name}</p>
                        <p>
                            Locations:{" "}
                            {job.locations.map((loc) => loc.name).join(", ")}
                        </p>
                        <p>
                            Levels: {job.levels.map((level) => level.name).join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

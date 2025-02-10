import React from "react";
import { useParams } from "react-router-dom";
import { useGetJobDetailsQuery } from "../../store/api/freelance";
import "./CardsPage.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const CardsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: job, error, isLoading } = useGetJobDetailsQuery(id || "");

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных</p>;
  if (!job) return <p>Данные не найдены</p>;

  return (
    <div className="container">
      <Navbar />
      <div className="job-card">
        <h1 className="job-title">{job.name}</h1>
        <p className="job-info"><strong>Компания:</strong> {job.company.name}</p>
        <p className="job-info"><strong>Локация:</strong> {job.locations.map((loc:  any) => loc.name).join(", ")}</p>
        <p className="job-info"><strong>Уровень:</strong> {job.levels.map((level: any) => level.name).join(", ")}</p>
        <p className="job-info"><strong>Тип работы:</strong> {job.job_type}</p>
        <p className="job-info"><strong>Опубликовано:</strong> {new Date(job.publication_date).toLocaleDateString()}</p>
        <p className="job-info"><strong>Описание:</strong> {job.contents}</p>
        <p className="job-info">
          <strong>Откликнуться:</strong>{" "}
          <a href={job.refs.landing_page} target="_blank" rel="noopener noreferrer">
            {job.refs.landing_page}
          </a>
        </p>
      </div>
    </div>
  );
};




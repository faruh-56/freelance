import React from "react";
import { useParams } from "react-router-dom";
import { useGetJobDetailsQuery } from "../../store/api/freelance";
import "./CardsPage.css"
import { Navbar } from "../../components/Navbar/Navbar";

export const CardsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { error, isLoading } = useGetJobDetailsQuery(id || '');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading job details</p>;

    return (
        <div>
            <Navbar />
            <div className="jobCard">
                <h1 className="jobTitle">Intern, R&D Graduate Summer - Climate Science - FORCEE, Onsite</h1>
                <p className="jobInfo"><strong>Company:</strong> Sandia National Laboratories</p>
                <p className="jobInfo">
                    <strong>Description:</strong> We are seeking motivated graduate students in CLIMATE SCIENCE...
                </p>
                <p className="jobInfo"><strong>Locations:</strong> Albuquerque, NM</p>
                <p className="jobInfo"><strong>Levels:</strong> Internship</p>
                <p className="jobInfo"><strong>Publication Date:</strong> 11/12/2024</p>
                <p className="jobInfo"><strong>Job Type:</strong> external</p>
                <p className="jobInfo">
                    <strong>Apply Here:</strong>
                    <a href="https://www.themuse.com/jobs/sandianationallaboratories/intern-rd-graduate-summer-climate-science-forcee-onsite" target="_blank">
                        https://www.themuse.com/jobs/sandianationallaboratories/intern-rd-graduate-summer-climate-science-forcee-onsite
                    </a>
                </p>
            </div>
        </div>

    );
};



import React from "react";
import placeholder from "../../images/placeholder image.png";
import { Link } from "react-router-dom";

export default function Jobpost({ jobpost }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div>
      <div className="mt-[15px] w-[900px]  container ml-[20px] bg-gray-200 rounded-[12px] p-[8px]">
        <div className="flex">
          <div>
            {jobpost.photo && (
              <img
                className="w-[350px] h-[200px] object-cover rounded-[12px]"
                src={PF + jobpost.photo}
                alt=""
              />
            )}
            {!jobpost.photo && (
              <img
                className="w-[350px] h-[200px] object-cover rounded-[12px]"
                src={placeholder}
                alt=""
              />
            )}
          </div>
          <div className="ml-[20px]">
            <Link to={`/jobpost/${jobpost._id}`}>
              <p className=" text-3xl">{jobpost.title}</p>
            </Link>
            <p>{jobpost.company}</p>
            <p className=" text-xl">Location: {jobpost.location}</p>
            <p>Educational requirements: {jobpost.edureq}</p>
            <p>Experience: {jobpost.experience}</p>
            <div className="flex">
              <Link to={`/jobpost/${jobpost._id}`}>
                <button className="mt-[10px] ml-[10px] py-3 px-3 bg-blue-400 text-white rounded">
                  View full offer...
                </button>
              </Link>

              <button className="mt-[10px] ml-[40px] py-3 px-3 bg-blue-400 text-white rounded">
                Apply Now
              </button>
              <p className="mt-[25px] ml-[75px]">
                Deadline: {jobpost.deadline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

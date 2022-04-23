import Endbar from "../../components/endbar/Endbar";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import placeholder from "../../images/placeholder image.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Singlejob() {
  const loc = useLocation();
  const path = loc.pathname.split("/")[2];
  const [jobpost, setJobpost] = useState({});
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [edureq, setEdureq] = useState("");
  const [experience, setExperience] = useState("");
  const [additionreq, setAdditionreq] = useState("");
  const [employstatus, setEmploystatus] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobtype, setJobtype] = useState("");
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getJobpost = async () => {
      const res = await axios.get("/jobposts/" + path);
      setJobpost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setLocation(res.data.location);
      setCompany(res.data.company);
      setSalary(res.data.salary);
      setEdureq(res.data.salary);
      setExperience(res.data.experience);
      setAdditionreq(res.data.additionreq);
      setEmploystatus(res.data.employstatus);
      setVacancy(res.data.vacancy);
      setDeadline(res.data.deadline);
      setJobtype(res.data.jobtype);
    };
    getJobpost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/jobposts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/jobposts/" + path, {
        username: user.username,
        title,
        desc,
        location,
        company,
        salary,
        edureq,
        additionreq,
        employstatus,
        jobtype,
        vacancy,
        experience,
        deadline,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <div className="w-4/5 h-[1800px] mx-auto">
        {jobpost.photo && (
          <img
            className="mt-[10px] w-full h-[600px] rounded-[12px] object-cover"
            src={PF + jobpost.photo}
            alt=""
          />
        )}
        {!jobpost.photo && (
          <img
            className="mt-[10px] w-full h-[600px] rounded-[12px] object-cover"
            src={placeholder}
            alt=""
          />
        )}
        <div className="ml-[60px] py-[6px] px-[6px]">
          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Job position:
              </div>
              <ReactQuill
                theme="snow"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <div className="text-3xl  mt-[15px] font-bold">{title}</div>
              {jobpost.username === user?.username && (
                <>
                  <button
                    className="mr-[20px] py-3 px-3 bg-blue-400 text-white rounded"
                    onClick={handleDelete}
                  >
                    Delete Blog
                  </button>
                  <button
                    className="ml-[20px] py-3 px-3 bg-green-400 text-white rounded"
                    onClick={() => setUpdateMode(true)}
                  >
                    Update Blog
                  </button>
                </>
              )}
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Job Company:
              </div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <div className="text-xl mt-[15px]">{company}</div>
            </>
          )}
          {updateMode ? (
            <>
              <div className="mt-[15px] ml-[1000px]">Update Job Vacancy:</div>
              <input
                type="text"
                value={vacancy}
                onChange={(e) => setVacancy(e.target.value)}
                className="relative ml-[25px] ml-[1000px] w-[100px] border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <div className="mt-[15px] ml-[1000px]">Job vacancy:</div>
              <div className="mt-[15px] ml-[1000px]">{vacancy}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Job Responsibilities:
              </div>
              <textarea
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="relative mt-[15px] w-4/5 h-[200px] border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Job Responsibilities</p>
              <div className="text-xl mt-[15px]">{desc}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Employment Status:
              </div>
              <input
                type="text"
                value={employstatus}
                onChange={(e) => setEmploystatus(e.target.value)}
                className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Employment Status</p>
              <div className="text-xl mt-[15px]">{employstatus}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Educational Requirements:
              </div>
              <textarea
                type="text"
                value={edureq}
                onChange={(e) => setEdureq(e.target.value)}
                className="relative mt-[15px] w-4/5 h-[200px] border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Educational Requirements</p>
              <div className="text-xl mt-[15px]">{edureq}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Experience Requirements:
              </div>
              <textarea
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="relative mt-[15px] w-4/5 h-[200px] border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Experience Requirements</p>
              <div className="text-xl mt-[15px]">{experience}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Additional Requirements:
              </div>
              <textarea
                type="text"
                value={additionreq}
                onChange={(e) => setAdditionreq(e.target.value)}
                className="relative mt-[15px] w-4/5 h-[200px] border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Additional Requirements</p>
              <div className="text-xl mt-[15px]">{additionreq}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Job Location:
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
              <button
                className="ml-[20px] py-3 px-3 bg-green-400 text-white rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Job Location</p>
              <div className="text-xl mt-[15px]">{location}</div>
            </>
          )}

          {updateMode ? (
            <>
              <div className="text-3xl  mt-[15px] font-bold">
                Update Job Salary:
              </div>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              <p className="font-bold text-xl">Job Salary</p>
              <div className="text-xl mt-[15px]">{salary}</div>
            </>
          )}
          <div className="items-center">
            {updateMode ? (
              <>
                <div className="text-3xl  mt-[15px] font-bold">
                  Update Job Deadline:
                </div>
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                />
              </>
            ) : (
              <>
                <Link
                  to={`/jobpost/${jobpost._id}/applynow`}
                  className="ml-[470px] mt-[100px] py-3 px-3 bg-blue-400 text-white rounded"
                >
                  Apply Now
                </Link>
                <p className="font-bold text-xl">Application Deadline</p>
                <div className="text-xl mt-[15px]">{deadline}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <Endbar />
    </div>
  );
}

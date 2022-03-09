import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

export default function ApplyNow() {
  const loc = useLocation();
  const path = loc.pathname.split("/")[2];
  const [jobtitle, setjobTitle] = useState("");
  const [jobcandidates, setjobcandidates] = useState([]);
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
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getJobpost = async () => {
      const res = await axios.get("/jobposts/" + path);
      setjobTitle(res.data.title);
      setJobpost(res.data);
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
      setjobcandidates(res.data.jobcandidates);
    };
    getJobpost();
  }, [path]);

  return (
    <div>
      <div className="w-4/5 bg-slate-400 mx-auto h-[800px] space-y-4">
        <div>
          <div className="mt-[10px] text-2xl ">Name</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <div className="mt-[10px] text-2xl ">Temporary Address</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <div className="mt-[10px] text-2xl ">Permanent Address</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <div className="mt-[10px] text-2xl ">Zip code</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <div className="mt-[10px] text-2xl ">Date of birth</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <div className="mt-[10px] text-2xl ">Email Address</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <div className="mt-[10px] text-2xl ">Mobile Phone</div>
          <input
            type="text"
            className="relative mt-[15px] w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
          />
        </div>
        <button className="mr-[20px] py-3 px-3 bg-blue-400 text-white rounded">
          Delete Blog
        </button>
      </div>
    </div>
  );
}

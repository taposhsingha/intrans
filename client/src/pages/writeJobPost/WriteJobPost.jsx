import placeholder from "../../images/placeholder image.png";
import React, { useContext, useState } from "react";
import Endbar from "../../components/endbar/Endbar";
import axios from "axios";
import { Context } from "../../context/Context";

export default function WriteJobPost() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [edureq, setEdureq] = useState("");
  const [experience, setExperience] = useState("");
  const [additionreq, setAdditionreq] = useState("");
  const [employstatus, setEmploystatus] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [deadline, setDeadline] = useState("");
  const [desc, setDesc] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJobPost = {
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
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newJobPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/jobposts", newJobPost);
      window.location.replace("/jobpost/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="w-4/5 mx-auto rounded-[7px] justify-center items-center bg-slate-200 p-[40px]">
        <div>
          {file && (
            <img
              className=" w-[1100px] mx-auto rounded-[10px]"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}
          {!file && (
            <img
              className=" w-[1100px] mx-auto rounded-[10px]"
              src={placeholder}
              alt=""
            />
          )}

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <form className="space-y-6 ml-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Position:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Responsibilites:
              </label>
              <textarea
                type="text"
                className="w-4/5 border h-[300px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Employment Status(Full time/part-time):
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setEmploystatus(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job postition vacancy left:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setVacancy(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Educational Requirements:
              </label>
              <textarea
                type="text"
                className="w-4/5 border h-[150px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setEdureq(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Company name:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Company Location:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Experience Requirements:
              </label>
              <textarea
                type="text"
                className="w-4/5 border h-[200px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Additional Requirements:
              </label>
              <textarea
                type="text"
                className="w-4/5 border h-[180px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setAdditionreq(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Salary:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter Job Industry Type:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setJobtype(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-xl text-gray-600">
                Enter deadline:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <button
              className="block mt-2 mx-auto w-24 bg-green-400 hover:bg-green-300 p-[8px] rounded text-green-900 hover:text-green-800 transition duration-300"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

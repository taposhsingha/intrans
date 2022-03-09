import React, { useContext, useState } from "react";
import Endbar from "../../components/endbar/Endbar";
import axios from "axios";
import { Context } from "../../context/Context";

export default function EditArticle() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="w-4/5 flex items-center justify-center mx-auto">
        <div className="bg-white rounded  w-[1100px] ">
          {file && (
            <img
              className=" w-[1100px] mx-auto rounded-[10px]"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <form className="space-y-4 ml-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-bold text-gray-500">
                Enter Title:
              </label>
              <input
                type="text"
                className="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-500">
                Write your blog:
              </label>
              <textarea
                type="text"
                className="w-4/5 border border-purple-200 h-[200px] rounded outline-none focus:border-blue-500"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button
              className="block mt-2 ml-2 w-24 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
      <Endbar />
    </div>
  );
}

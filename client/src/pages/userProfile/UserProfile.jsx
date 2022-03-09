import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function UserProfile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");
  const [experience, setExperience] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      desc,
      experience,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div>
      <div>
        <div class="w-4/5 mx-auto mt-[25px] h-[600px]  space-y-7">
          <form onSubmit={handleSubmit}>
            <div class="mt-10  font-bold text-5xl font-ubun text-zinc-700">
              Update Your account
            </div>
            <div class="font-bold text-3xl font-ubun text-zinc-700">
              Profile Picture
            </div>
            <img
              class="mt-[10px] w-[200px] h-[200px] rounded-full object-cover"
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <div class="font-bold text-3xl font-ubun text-zinc-700">
              Username
            </div>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
              class="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
            <div class="font-bold text-3xl font-ubun text-zinc-700">Email</div>
            <input
              type="text"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
              class="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
            <div class="font-bold text-3xl font-ubun text-zinc-700">
              Password
            </div>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              class="w-4/5 border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
            <div class="font-bold text-3xl font-ubun text-zinc-700">
              Talk About Yourself
            </div>
            <textarea
              type="text"
              placeholder={user.desc}
              onChange={(e) => setDesc(e.target.value)}
              class="w-4/5 border h-[150px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
            <div class="font-bold text-3xl font-ubun text-zinc-700">
              Your Educational Experience
            </div>
            <textarea
              type="text"
              placeholder={user.experience}
              onChange={(e) => setExperience(e.target.value)}
              class="w-4/5 border h-[150px] border-purple-200 p-3 rounded outline-none focus:border-blue-500"
            />
            <button
              class="mx-auto py-3 px-6 bg-green-400 text-white rounded block"
              type="submit"
            >
              Update
            </button>
            {success && <span>Profile has been updated...</span>}
            <button class=" py-3 px-6 bg-red-400 text-white rounded block">
              Delete your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

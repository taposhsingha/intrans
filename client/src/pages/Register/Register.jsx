import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-slate-800">
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 class="font-poppin font-bold text-3xl mb-10 text-purple-800">
            Create Your Account
          </h2>
          <form class="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label class="block mb-2 font-bold text-gray-500">Name</label>
              <input
                type="text"
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border border-purple-200 p-3 rounded outline-none focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              class="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 hover:text-purple-800 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <div class="flex items-center">
              <label class="mb-2 font-bold text-gray-500">
                Already have an account
              </label>
              <button class="ml-2 w-16 bg-blue-400 hover:bg-blue-300 p-[8px] rounded text-blue-900 hover:text-blue-800 transition duration-300">
                Login
              </button>
              {error && (
                <span class="mt-[10px] ml-[10px]">Something went wrong!</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

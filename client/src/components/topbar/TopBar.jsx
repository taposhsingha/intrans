import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="max-w-8xl mx-auto  text-gray-600 px-4 ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div>
            <a
              href="/"
              className="flex items-center py-4 px-2 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="/">Interns site</a>
            </a>
          </div>
        </div>
        {/* Buttons */}
        <div className="hidden md:flex space-x-6 py-4 px-3 items-center">
          <a href="#">Why join</a>
          <a href="/write">Write a Blog</a>
          <a href="/writejobpost">Write a Job offer</a>
          <a href="#">Members</a>
          <a href="/jobspage">Find Internships</a>
          <a href="/article/123">Blogs</a>
          <a href="/login">{!user && "Login"}</a>
          <a href="/login" onClick={handleLogout}>
            {user && "LOGOUT"}
          </a>
          {user && (
            <a
              href="/profile"
              className="py-3 px-3 bg-blue-400 text-white rounded"
            >
              My account
            </a>
          )}
          {!user && (
            <a
              href="/register"
              className="py-3 px-3 bg-blue-400 text-white rounded"
            >
              Register
            </a>
          )}
        </div>
        {/* Mobile button goes here */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="mobile-menu hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Why join
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Members
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Find Internships
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Blogs
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Login
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Register
        </a>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder image.png";

export default function Blog({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="px-6 py-6 flex flex-wrap shadow-md  rounded-md bg-gray-100">
      <div className="w-[385px] mt-[20px] mr-[25px] mb-[40px] ml-[25px] ">
        <div className="w-full  object-cover">
          <div>
            {post.photo && (
              <img className="rounded-[7px]" src={PF + post.photo} alt="" />
            )}
            {!post.photo && (
              <img className="rounded-[7px]" src={placeholder} alt="" />
            )}
          </div>

          <div className="flex flex-col items-center">
            <div>
              {post.categories.map((c) => (
                <div className="mt-[8px] mr-[8px]">{c.name}</div>
              ))}
            </div>
            <Link to={`/post/${post._id}`}>
              <div className="mt-[8px]">{post.title}</div>
            </Link>

            <div className="mt-[8px]">
              {new Date(post.createdAt).toDateString()}
            </div>
            <div className="mt-[10px] line-clamp-4">{post.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

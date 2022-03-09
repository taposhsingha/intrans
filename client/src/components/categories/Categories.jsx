import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });
  return (
    <div>
      <div class="text-center text-lg">Categories</div>

      {cats.map((c) => (
        <div class="flex flex-wrap justify-center">
          <Link to={`/?cat=${c.name}`}>
            <div class="mt-[8px] ml-[8px] ">{c.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

import React, { useContext, useEffect, useState, Component } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";

export default function TestFile() {
  const [type, setType] = useState([]);
  const [test, setTest] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getTest = async () => {
      const res = await axios.get("/test/" + path);
      setTest(res.data);
      setType(res.data.type);
      setUsername(res.data.username);
    };
    getTest();
  }, [path]);
  var newList = type;
  const handleUpdate = () => {
    newList.push("nihal");
    setType(newList);
  };

  return (
    <div>
      <div>
        <button onClick={handleUpdate}>Add Name</button>
        {test.username} & {type}
      </div>
    </div>
  );
}

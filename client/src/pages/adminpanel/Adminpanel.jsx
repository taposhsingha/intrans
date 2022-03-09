import React from "react";
import { Link } from "react-router-dom";
import Div from "../../components/div/Div";

export default function Adminpanel() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 h-screen bg-slate-200 space-y-4">
          <Link to="/#">
            <div className="w-full bg-green-100 ">Users</div>
          </Link>
          <Link to="/#">
            <div className="w-full bg-green-100 ">Users</div>
          </Link>
          <Link to="/#">
            <div className="w-full bg-green-100 ">Users</div>
          </Link>
          <Link to="/#">
            <div className="w-full bg-green-100 ">Users</div>
          </Link>
          <Link to="/#">
            <div className="w-full bg-green-100 ">Users</div>
          </Link>
        </div>
        <Div />
      </div>
    </div>
  );
}

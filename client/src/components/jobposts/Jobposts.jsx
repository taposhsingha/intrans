import Jobpost from "../jobpost/Jobpost";
import React from "react";

export default function Jobposts({ jobposts }) {
  return (
    <div>
      {jobposts.map((p) => (
        <Jobpost jobpost={p} />
      ))}
    </div>
  );
}

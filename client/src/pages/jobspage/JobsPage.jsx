import React from "react";
import Endbar from "../../components/endbar/Endbar";
import Jobpost from "../../components/jobpost/Jobpost";
import Topbar from "../../components/topbar/TopBar";

export default function JobsPage() {
  return (
    <div>
      <div class=" w-4/5  mx-auto ">
        <h1 class="mt-[32px] text-center font-ubun text-5xl">
          Internship / Job offers list:-
        </h1>
        <div class="mt-[30px] ml-[25px]">
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
          <Jobpost />
        </div>
      </div>
      <Endbar />
    </div>
  );
}

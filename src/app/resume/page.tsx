import React from "react";
import Information from "./_components/Information/Information";
import Introduction from "./_components/Introduction/Introduction";
import Experience from "./_components/Experience/Experience";
// import Skill from "./_components/Skill/Skill";
import Work from "./_components/Work/Work";
import OtherExperience from "./_components/Experience/OtherExperience";

const Resume = () => {
  return (
    <div className="bg-white text-black min-h-screen px-8 py-20 flex justify-center">
      <div className="max-w-5xl w-full">
        <Information />
        <Introduction />
        <Experience />
        <OtherExperience />
        {/* <Skill /> */}
        <Work />
      </div>
    </div>
  );
};

export default Resume;

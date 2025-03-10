import React from "react";

function Skill() {
  return (
    <section className="mb-4 border-b-[1.5px] border-[#E5E5E5] pb-8">
      <h2 className="text-3xl font-semibold mb-4 pb-2">Skills</h2>

      <div className="space-y-8 relative flex gap-8">
        {/* Frontend */}
        <div className="w-full flex flex-row md:flex-col pl-8 gap-[24px]">
          <h3 className="font-semibold mb-4 border-b-4 w-fit border-gray-200">
            Frontend
          </h3>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[22px]">React (상급)</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[22px]">Next.js (상급)</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[22px]">TypeScript (상급)</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[22px]">HTML/CSS (상급)</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-[22px]">상태 관리 (상급)</span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 border-l-4 border-gray-200">
          {/* Backend */}
          <div className="w-full flex flex-col md:flex-row mb-5">
            <div className="flex flex-row md:flex-col pl-8 gap-[24px]">
              <h3 className="font-semibold mb-4 border-b-4 w-fit border-gray-200">
                Backend
              </h3>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[22px]">Supabase (초급)</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[22px]">Node.js (중급)</span>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="flex w-full flex-col md:flex-row mb-5">
            <div className="w-full flex flex-col pl-8 gap-[24px]">
              <h3 className="font-semibold mb-4 border-b-4 w-fit border-gray-200">
                DevOps
              </h3>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[22px]">Git (상급)</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[22px]">Vercel (중급)</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[22px]">Docker (초급)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

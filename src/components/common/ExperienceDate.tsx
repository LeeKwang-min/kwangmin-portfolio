"use client";

import { useEffect, useState } from "react";

const calcDate = (startDateStr: string) => {
  const startDate = new Date(startDateStr);
  const today = new Date();

  const years = today.getFullYear() - startDate.getFullYear();
  const months = today.getMonth() - startDate.getMonth();

  const totalMonths = years * 12 + months;

  const resultYears = Math.floor(totalMonths / 12);
  const resultMonths = totalMonths % 12;

  return `${resultYears}년 ${resultMonths}개월`;
};

function ExperienceDate() {
  const [experienceDate, setExperienceDate] = useState<string>(
    calcDate("2022-02-07")
  );

  useEffect(() => {
    setExperienceDate(calcDate("2022-02-07"));
  }, []);

  return <span className="font-bold">{`(${experienceDate})`}</span>;
}

export default ExperienceDate;

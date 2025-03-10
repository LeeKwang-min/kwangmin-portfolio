import React from "react";

function Introduction() {
  return (
    <section className="mb-4 pb-20">
      <h2 className="text-3xl font-semibold pb-2">About Me</h2>
      {/* <p className="text-lg leading-8">{introduction}</p> */}
      <ul className="list-disc list-inside text-base leading-8">
        <li>
          <b>사용자 경험</b>을 최우선으로 생각하는 웹 프론트엔드 개발자입니다.
        </li>
        <li>
          사용자에게 좋은 경험을 제공하는 일에 보람을 느끼며, 다양한 도전에 열려
          있습니다.
        </li>
        <li>
          적극적인 <b>소통과 협업</b>을 통해, <b>함께 일하고 싶은 동료</b>가
          되기 위해 노력합니다.
        </li>
        <li>
          새로운 기술에 흥미를 가지지만, 문제의 본질을 깊이 파악하는 것을
          중요하게 여깁니다.
        </li>
        <li>
          동료 평가에서 <b>{`"팀 리더로 적합한"`}</b>,{" "}
          <b>{`"문제 해결 능력이 뛰어난"`}</b>,{" "}
          <b>{`"팀의 신뢰를 가장 많이 받은"`}</b>, <b>{`"가장 책임감 있는"`}</b>{" "}
          동료로 평가받았습니다.
        </li>
      </ul>
    </section>
  );
}

export default Introduction;

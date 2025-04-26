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
          새로운 기술에 열려 있지만,{" "}
          <b>비즈니스와 사용자에게 제공할 수 있는 가치를 중요하게 생각</b>
          합니다.
        </li>
        <li>
          성능 최적화 및 UX 개선으로 <b>실제 사용자 만족과 비즈니스 성과</b>를
          창출합니다.
        </li>
        <li>
          다양한 직군과의 원활한 협업으로 <b>팀의 커뮤니케이션을 촉진</b>합니다.
        </li>
        <li>
          동료 평가에서 <b>{`"팀 리더로 적합한"`}</b>,{" "}
          <b>{`"문제 해결 능력이 뛰어난"`}</b>,{" "}
          <b>{`"팀의 신뢰를 가장 많이 받은"`}</b>, <b>{`"가장 책임감 있는"`}</b>{" "}
          동료로 평가받았습니다.
        </li>
        <li>
          지속적으로 성장하며 <b>팀과 회사에 실질적인 기여</b>를 하는
          개발자입니다.
        </li>
      </ul>
    </section>
  );
}

export default Introduction;

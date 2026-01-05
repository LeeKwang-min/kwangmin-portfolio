import React from "react";

function Introduction() {
  return (
    <section className="mb-4 pb-20">
      <h2 className="text-3xl font-semibold pb-2">About Me</h2>
      {/* <p className="text-lg leading-8">{introduction}</p> */}
      <ul className="list-disc list-inside text-base leading-8">
        <li>
          <b>개인적인 성장보단 구조를 설계하여</b> 팀과 회사에 실질적인 기여하는
          개발자입니다.
        </li>
        <li>
          다양한 직군과의 <b>원활한 협업을 가장 중요하게 생각</b>하며 협업을
          통해 <b>일의 효율성을 높입니다.</b>
        </li>
        <li>
          <b>효율적인 업무 프로세스를</b> 고민하고 <b>재사용성이 좋은 코드</b>를
          작성하는 웹 프론트엔드 개발자입니다.
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
          동료 평가에서 <b>{`"문제 해결 능력이 뛰어난"`}</b>,{" "}
          <b>{`"팀의 신뢰를 가장 많이 받은"`}</b>, <b>{`"가장 책임감 있는"`}</b>{" "}
          동료로 평가받았습니다.
        </li>
      </ul>
    </section>
  );
}

export default Introduction;

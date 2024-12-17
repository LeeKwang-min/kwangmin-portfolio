import React from "react";

const introduction = `"사용자 친화적 서비스를 만드는것을 최우선으로 생각하는" 프론트엔드 개발자입니다. 
팀원과의 소통을 가장 중요하게 생각하며, 협업을 통해 더 나은 서비스를 만들어가는 것을 목표로 하고 있습니다.
동료 평가를 통해 '팀 리더로 적합한', '문제 해결 능력이 뛰어난', '팀의 신뢰를 가장 많이 받은', '가장 책임감 있는' 동료로 평가받았습니다.
도메인을 이해하고 이해를 바탕으로 문제를 해결하는 것을 중요하게 생각하며, 그 과정에서 성취감을 느끼고 있습니다.
좋은 개발자를 넘어 동료가 되기 위해 끊임없이 노력하고 성장하고 있습니다.
`;

function Introduction() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">ABOUT ME</h2>
      <p className="text-lg leading-8">{introduction}</p>
    </section>
  );
}

export default Introduction;

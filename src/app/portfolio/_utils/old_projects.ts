interface TroubleshootingItem {
  problem: string;
  solution: string;
  result: string;
}

interface Project {
  title: string;
  features: string;
  techStack: string;
  contribution: string;
  troubleshooting: TroubleshootingItem[];
  period: string;
}

export const projects: Project[] = [
  {
    title: "Vision - 인하우스 통합 대시보드/리포트",
    features:
      "3개의 인하우스 서비스에 대한 다양한 정보를 차트를 사용해 통합 대시보드 / 리포트로 제공하는 서비스",
    techStack: "Next.js, React, Tanstack Query, Tailwind CSS, Zustand",
    contribution:
      "대시보드, 리포트 페이지 구현, DnD를 통한 차트 정렬 기능 구현, 디자인 시스템 구축, 렌더링 최적화",
    troubleshooting: [
      {
        problem: "데이터 의존적 페이지 렌더링이 너무 오래 걸려서 불만 발생",
        solution: "Tanstack Query의 캐싱 전략을 설정하여 성능 개선",
        result: "사용자 이탈률 감소 및 서버 부하 완화, 전반적 성능 최적화",
      },
      {
        problem: "차트 데이터 로딩 시 화면 깜빡임 현상 발생",
        solution: "스켈레톤 UI 및 로딩 상태 관리 개선",
        result: "사용자 경험 향상 및 로딩 중 시각적 피드백 제공",
      },
      {
        problem: "대량의 데이터 처리 시 브라우저 성능 저하",
        solution: "데이터 청크 분할 및 가상 스크롤링 적용",
        result: "브라우저 메모리 사용량 40% 감소 및 렌더링 성능 향상",
      },
      {
        problem: "차트 정렬 기능 구현 시 복잡한 상태 관리 필요",
        solution: "Zustand를 활용한 상태 관리 및 DnD 라이브러리 도입",
        result: "코드 복잡도 감소 및 사용자 친화적 UI 구현",
      },
    ],
    period: "2025.04 진행 중",
  },
  {
    title: "KB 검진 대행 서비스",
    features:
      "직원용 건강검진 예약, 결과 확인을 지원하는 모바일 및 PC용 서비스",
    techStack: "Next.js, React, Tanstack Query, Tailwind CSS, Zustand",
    contribution:
      "병원 필터 기능 개발, SMS 인증 자동 입력 개발, 추천 검색어 UX 개선, 쿼리 파라미터 유지 기능 개발, SSO 인증/인가 기능 개발",
    troubleshooting: [
      {
        problem: "병원 필터 조회 시 평균 5초 소요로 사용자 불만 발생",
        solution: "Tanstack Query 캐싱 전략을 적용하여 조건별 캐시 분리",
        result: "API 호출 감소 및 응답 속도 개선, 사용자 이탈률 감소",
      },
      {
        problem: "SMS 인증번호 수동 입력 불편",
        solution: "one-time-code 특성 적용하여 자동 입력 기능 구현",
        result: "인증 성공률 향상 및 서비스 이탈률 감소",
      },
      {
        problem: "추천 검색어 선택 UX 불편",
        solution: "키보드 탐색 및 엔터키 선택 기능 추가",
        result: "탐색 소요 시간 감소 및 사용자 만족도 향상",
      },
      {
        problem: "서버 부하 및 비용 증가",
        solution: "추천 검색어 호출에 Debounce 적용",
        result: "서버 비용 약 30% 절감 및 응답 속도 개선",
      },
      {
        problem: "페이지 이동/재진입 시 필터 조건 유지 실패",
        solution: "쿼리 파라미터 기반 상태 유지 기능 개발",
        result: "조건 재설정 시간 제거 및 사용자 경험 개선",
      },
    ],
    period: "2024.12 ~ 2025.04",
  },
  {
    title: "라이프로그 통합 관리 백오피스",
    features:
      "사용자의 라이프로그를 통합 관리하고 미디어를 생성하는 백오피스 시스템",
    techStack: "Next.js, React, Tanstack Query, Tailwind CSS, Zustand",
    contribution:
      "낙관적 업데이트 적용, 버튼 중복 클릭 방지, Lazy Loading 적용, 데이터 시각화 개선, Jira 기반 프로젝트 관리",
    troubleshooting: [
      {
        problem: "데이터 조작 후 테이블 재조회 시 5초 이상 소요",
        solution: "Tanstack Query 낙관적 업데이트 적용",
        result: "즉시 반영되는 UI로 체감 응답 속도 향상",
      },
      {
        problem: "중복 버튼 클릭으로 인한 API 중복 호출 발생",
        solution: "Pending 상태 관리 및 Throttling 적용",
        result: "API 호출 감소 및 데이터 정확성 향상",
      },
      {
        problem: "초기 페이지 로딩 시간 과다",
        solution: "데이터 의존 컴포넌트에 Lazy Loading 적용",
        result: "체감 로딩 시간 5초 → 1초로 단축",
      },
      {
        problem: "라이프로그 관계 확인 어려움",
        solution: "플로우 차트 시각화 및 미리보기 기능 추가",
        result: "작업 시간 50% 단축 및 사용자 피드백 향상",
      },
    ],
    period: "2024.01 ~ 2024.12",
  },
  {
    title: "음식 사진 인식 애플리케이션",
    features:
      "음식 사진을 인식하여 영양 정보를 제공하는 모바일 최적화 애플리케이션",
    techStack: "Next.js, React, Recharts, Tailwind CSS",
    contribution:
      "영양 정보 차트 시각화, PWA 적용, 반응형 디자인 적용, 인증 기반 접근 제한 처리",
    troubleshooting: [
      {
        problem: "텍스트 기반 영양 정보 이해도 낮음",
        solution: "Recharts를 활용한 시각적 차트 제공",
        result: "서비스 이용률 약 30% 증가",
      },
      {
        problem: "모바일 접속 최적화 미흡",
        solution: "PWA 적용 및 반응형 디자인 구현",
        result: "접속률 약 50%, 사용률 30% 증가",
      },
      {
        problem: "무단 접근 및 보안 문제 발생",
        solution: "Next-Auth와 Middleware를 활용한 접근 제한",
        result: "서비스 안정성 및 사용자 신뢰도 향상",
      },
    ],
    period: "2024.06 ~ 2024.09",
  },
  {
    title: "임직원 코칭 백오피스",
    features:
      "임직원의 건강 코칭 결과를 관리하고 코칭 프로세스를 지원하는 백오피스 서비스",
    techStack: "Next.js, React, WebSocket, Chart.js, Sentry",
    contribution:
      "실시간 채팅 기능 개발, 에러 모니터링 구축, 건강 데이터 시각화 기능 제공",
    troubleshooting: [
      {
        problem: "비동기식 대응으로 인한 커뮤니케이션 지연",
        solution: "WebSocket 기반 실시간 채팅 기능 개발",
        result: "문의 대응 시간 10분 → 5분 이내로 단축",
      },
      {
        problem: "에러 발생 시 대응 지연",
        solution: "Sentry 기반 실시간 에러 트래킹 시스템 구축",
        result: "에러 대응 속도 향상 및 안정성 확보",
      },
      {
        problem: "건강 정보 텍스트 확인의 불편함",
        solution: "Chart.js를 활용하여 데이터 시각화 제공",
        result: "코칭 과정에서 정보 확인 용이성 증가",
      },
    ],
    period: "2023.02 ~ 2024.05",
  },
  {
    title: "KB오케어 헬스케어 서비스",
    features: "KB오케어 모바일 앱 내 헬스케어 서비스 기능 구현 및 최적화",
    techStack: "Next.js, React, Tailwind CSS, i18n",
    contribution:
      "웹뷰 대응 및 모바일 최적화, 코드 품질 개선, 다국어 지원 기능 개발",
    troubleshooting: [
      {
        problem: "iOS Safari 환경에서 input, viewport 호환성 문제",
        solution: "webkit 설정 및 dvh 단위 적용",
        result: "iOS/Android 환경 모두 동일한 UX 제공",
      },
      {
        problem: "코드 리뷰 및 품질 관리 체계 부재",
        solution: "Git 기반 코드 리뷰 및 커밋 컨벤션 도입",
        result: "코드 품질 개선 및 유지보수 비용 절감",
      },
      {
        problem: "글로벌 시장을 위한 다국어 지원 미흡",
        solution: "i18n 기반 다국어 지원 기능 개발",
        result: "글로벌 사용자 확보 및 서비스 확장성 증가",
      },
    ],
    period: "2022.02 ~ 2022.12",
  },
];

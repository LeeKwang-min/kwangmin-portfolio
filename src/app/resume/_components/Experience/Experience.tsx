import ExperienceDate from "@/components/common/ExperienceDate";
import { Dot, Quote } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section className="mb-4 pb-20">
      <h2 className="text-3xl font-semibold mb-4 pb-2">Work Experience</h2>
      <div className="space-y-8 relative flex flex-col gap-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-semibold">휴레이포지티브</h3>
            <h4 className="font-semibold">
              2022.02 - 현재 <ExperienceDate />
            </h4>
            <h4 className="text-xs mt-[3px] text-[#00000080] font-semibold">
              프론트엔드 개발자
            </h4>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p className="font-bold pb-8 flex items-end w-full justify-center gap-1 mt-2">
              <Quote
                size={16}
                color="#00000090"
                fill="#00000080"
                className="h-10 transform scale-x-[-1] border-none"
              />
              {`안정적이고 효율적인 개발을 통한 비즈니스 가치 향상`}
              <Quote
                size={16}
                color="#00000090"
                fill="#00000080"
                className="h-10 border-none"
              />
            </p>
          </div>
        </div>

        {/* 삼성헬스 웹 PoC */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(진행중)`}</span>
              2025.09 ~
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`삼성헬스 웹 PoC`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"삼성헬스를 웹 앱으로 구현한 웹 프로젝트"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`데이터 연산 로직 공통화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`자원이 많이 드는 날짜 연산 로직으로 인한 TBT, FCP 성능 저하 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`날짜 연산을 라이브러리가 아닌 값을 통해 계산하는 로직으로 변경`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`공통 유틸로 만들어 모든 페이지에 적용`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`날짜 계산 로직에 변경이 필요한 경우 공통 유틸 업데이트 후 적용하여 모든 페이지 빠른 대응`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`화면 성능 최적화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">{`네이티브 환경의 서비스를 웹으로 구현하여 성능을 네이티브와 동일하게 유지하는 필수 요구사항`}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`SSR을 사용해 사용자에게 데이터가 모두 그려진 화면을 노출`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`이 과정에서 데이터 호출과 연산에 시간이 많이 소요되어 실제 화면에 접근하는데 걸리는 시간도 많이 들고 TBT, FCP 성능 지표도 낮게 측정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`모든 데이터를 그리지 않고 화면에 표시 될 부분과 슬라이드 가능한 범위를 미리 계산하여 해당 부분만 렌더링 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`초기 렌더링은 일부 데이터만 호출하고 웹 워커를 사용하여 화면 병목을 방지하고 데이터 호출 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`TBT 점수는 평균 700ms에서 100ms로`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`FCP는 평균 1.5초에서 1초 이하로 줄여 성능 최적화 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">{`Lighthouse Performance 지표를 평균 60점에서 모든 페이지 90점대로 상승`}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`클라이언트의 의문을 해결하고, 실제 상용화 가능한 버전을 만드는 추가 계약 진행`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`데이터 구조 설계`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`로컬DB를 조회하는 기존 구조에서 웹 서비스에 맞는 데이터 구조 설계 및 호출 구조 설계 필요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`Next.js의 Route Handlers와 MongoDB를 활용하여 데이터 호출 구조 설계`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`시간 단위 데이터에 알맞는 확장성 있는 데이터 구조 설계 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`추가 요구사항이 있을 경우에도 유연한 대처 진행`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`차트 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`다양한 스타일의 공통화 되지 않은 차트 구현이 필요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`가장 커스텀이 편하고 가벼운 D3.js를 사용하여 차트와 슬라이드 기능 구현`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`수면 단계, 혈압, 혈당 등의 다양한 차트 구현`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`기존 서비스의 디자인과 동일한 디자인과 UX 구현`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`웹 환경인지 모를 정도로 네이티브 환경과 동일하다는 피드백`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 시니어케어 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(진행중)`}</span>
              2025.06 ~
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`시니어케어`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"시니어 케어 서비스 플랫폼"`}
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`배포 자동화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`k8s 인프라 환경의 배포가 필요한 상황`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`새로운 버전에 대한 배포가 지속적으로 요구`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`git action을 통한 git tag 기반의 배포 자동화 구축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`구글 알림을 통한 배포 성공 여부 알림 기능 구축`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 3개월)`}</span>
              2025.04 ~ 2025.06
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`Vision`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"인하우스 서비스 통합 대시보드 / 리포트 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`차트 정렬 UX 개선 및 성능 최적화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`기존 차트 정렬 방식이 제목 중심의 모달 방식으로 정렬 과정에서 직관적이지 않다는 불편함 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`react-dnd를 사용하여 차트 리스트에서 DnD 방식으로 직관적 차트 순서 변경 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`도입 후 차트 정렬 시간 약 50% 단축 및 계약사의 긍정적 피드백을 통한 비즈니스 가치 향상`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`하지만, DnD를 통한 정렬 도중 불필요한 차트의 잦은 리렌더링과 API 호출 발생 확인`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tanstack Query 캐시 정책을 데이터 정책 단위와 동일하게 설정하여 필요할 때만 API 호출 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`메모이제이션(Memoization)을 통해 실제 데이터 변경 시에만 리렌더링 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`UX 개선과 성능 최적화를 함께 달성하여, 사용자 만족도와 시스템 효율성 모두 향상`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`디자인 시스템 구축`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`3개의 인하우스 서비스에서 유사한 UI 컴포넌트가 반복 사용되는 것을 확인하고, 유지보수성과 개발 효율을 고려해 공통 디자인 시스템의 필요성을 인지`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`도입 기술의 타당성과 확장성을 정리한 ADR 문서를 작성하고 디자인 시스템 구축 계획 수립`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`커스터마이징이 용이한 headless UI 기반의 Shadcn UI를 도입하여, 디자인과 기능이 분리된 구조를 통해 다양한 서비스 요구사항에 유연하게 대응`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`버튼, 입력 필드 등 공통 컴포넌트와 스타일 설정 파일을 모듈화하여 반복 작업을 줄이고, UI 구현 및 유지보수 시간 절감`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`디자이너와 컴포넌트 구조를 함께 정리하고, 다른 프론트엔드 개발자들과는 공통 컴포넌트를 공유하여 협업 효율을 높임`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`렌더링 방식을 통한 페이지 최적화`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`다수의 인하우스 서비스 데이터를 호출하는 구조로 인해 초기 로딩 지연 및 서버 부하 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 특성과 목적에 따라 Next.js 렌더링 전략(SSR, CSR, SSG, ISR)을 적용하여 최적화 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`정적 콘텐츠 중심의 렌딩 페이지는 SSG를 적용하여 빌드 타임에 HTML로 생성, 사용자 요청 시 빠른 응답 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`최신성과 서버 효율성이 모두 중요한 문의 내역 페이지는 ISR을 적용, 주기별로 데이터를 갱신하여 서버 부담 최소화`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`개선을 통해 Lighthouse Performance 지표(FCP, TTI, LCP)에서 평균 10점 이상 향상`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 응답 속도 및 사용자 만족도 향상, 서버 부하 분산으로 시스템 효율성 개선`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`차트 상태 관리 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`대시보드, 리포트 화면을 비롯한 여러 화면에서 차트 상태 공유 필요성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`상태 관리의 복잡성 감소 및 개발 생산성 향상 필요성 요구`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`최소한의 보일러플레이트로 상태 관리가 가능한 Zustand를 채택, 직관적이며 간결한 상태 관리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`상태 관리 복잡성 감소 및 개발 생산성 향상`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KB 검진 대행 서비스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 5개월)`}</span>
              2024.12 ~ 2025.04
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">{`KB 검진 대행 서비스`}</h5>
              <p className="font-bold text-[#00000080]">
                {`"건강검진을 예약/관리하고 결과를 확인할 수 있는 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`캐싱 전략을 통한 API 응답 속도 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`병원의 정보를 필터 기반으로 호출하는 기능에서 평균 응답 시간 약 5초 소요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`필터 조건이 자주 변경되는 특성상 사용자 불편 및 서버 부하 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tanstack Query의 캐싱 전략을 적용하여 성능 개선 진행`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`queryKey를 필터 조건에 따라 설정하여 조건별 캐시를 분리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`staleTime을 정책에 맞춰 DB 갱신 주기에 맞춰 재호출 되로록 설정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`동일 조건에 대한 API 호출을 대폭 감소시키고 캐시 데이터를 즉시 반환하여 응답`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자 이탈률 감소 및 서버 부하 완화로 전반적 성능 최적화`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`모바일 SMS 인증번호 자동 입력 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자가 인증번호를 수동으로 입력하는 과정에서 불만 CS발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`autocomplete 특성을 one-time-code로 설정하여 자동 입력 기능 설정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`인증 성공률 향상 및 서비스 이탈률 감소, 불만 CS 감소`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`추천 검색어 접근 방식 개선`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자가 추천 검색어를 마우스로 선택하는 과정에서 불만 CS발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`키보드와 엔터키를 사용한 검색어 선택 및 탐색, 스크롤 이동 기능 개발`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`탐색 소요 시간 감소 및 탐색 횟수 감소로 사용자 경험 개선`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`추천 검색어 호출 기능에 Debounce 적용`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자의 키 입력마다 API 호출이 발생하여 서버 부하 및 비용 상승이 우려`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`서버 비용 약 30% 절감 및 응답 속도 개선으로 사용자 만족도 향상`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`쿼리 파라미터를 사용한 조건 유지 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 이동 혹은 재진입 시 필터, 정렬 조건 유지에 대한 불만 CS 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`쿼리 파라미터를 관리하는 공통 함수를 개발하여 조건을 쿼리 파라미터로 관리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`페이지 이동과 재진입, 공유시에 조건이 유지되도록 처리하여 재설정 시간 제거`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">{`SSO 인증/인가 기능 개발`}</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`KB 모바일 앱을 통한 자동 로그인 프로세스 개발`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 라이프로그 통합 관리 백오피스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 1년)`}</span>
              2024.01 - 2024.12
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`라이프로그 통합 관리 백오피스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"사용자의 라이프로그를 통합 관리하여 미디어를 생성하고 코칭하는 백오피스"`}
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  느린 응답 속도 개선을 위한 낙관적 업데이트 적용
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`테이블 데이터 조회시, API 응답에 약 5초가 소요되어, 데이터 조작 후 재조회하는 과정에 사용자 불만이 지속해서 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`Tanstack Query의 낙관적 업데이트를 적용하여 데이터 조작 후 테이블 UI를 즉시 업데이트하여 사용자 체감 속도 개선`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`동시에 API 실패 상황에 대비해 이전 상태를 롤백할 수 있도록 onError 처리, 데이터 정합성 이슈도 함께 방지`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자들로 부터 매우 긍정적인 피드백과 자연스럽고 빠른 사용 경험 제공`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  버튼 중복 클릭 방지 기능 개발
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`동일한 버튼 클릭으로 인해 중복 API 요청이 빈번하여 데이터 정확성 저하 및 비용 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Form Submit의 Pending 상태를 확인하여 버튼 disabled 처리 및 로딩 아이콘 표시`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Throttling으로 1초 내 연속 클릭 방지, 중복 호출 방지로 API 요청 감소`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`데이터 정확성 및 사용자 만족도 증가, 서버 자원 절약에 기여`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Lazy Loading을 통한 초기 로딩 속도 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`SSR 페이지로 구현되어 데이터 호출에 평균 5초 이상의 시간이 걸리며 초기 페이지 로딩 또한 5초 이상의 시간이 걸리는 문제 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`화면 구성 요소의 렌더링 타이밍을 분리하여 데이터 의존적인 테이블 영역은 Lazy Loading 방식으로 지연 렌더링 적용`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`지연 로딩 중에는 로딩 UI를 표시해 사용자가 시스템이 작동 중임을 인지하도록 처리`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Dot size={16} color="#00000090" className="mt-1 min-w-4" />
                    <span className="text-[#00000090] font-semibold">
                      {`결과적으로 체감 로딩 시간은 5초 → 1초로 단축, 사용자 피드백에서 성능 향상에 대한 긍정적 반응 확인`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  라이프로그 간의의 데이터 시각화 기능 개선
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`관리자가 라이프로그 간의 관계와 연관성을 텍스트로 확인하는 과정에서 어렵다는 피드백`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`라이프로그 간의 관계를 플로우 차트로 시각화하여 확인 가능하도록 개선`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`새롭게 추가한 라이프로그의 정보에 대한 미리보기 기능 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`라이프로그 생성, 연결 소요 시간 50% 감소 및 긍정적 피드백`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`Jira 기반 요구사항 정의 및 프로젝트 관리`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비개발 팀과의 협업 과정에서 개발 일정과 달성률 확인 과정에서 어려움 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Jira issue 기반의 일정 관리 및 달성 상태 공유`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비개발자와의 소통 과정에서 효율적인 소통 방법 제시`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 음식 사진 인식 애플리케이션션 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 4개월)`}</span>
              2024.06 - 2024.09
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`음식 사진 인식 애플리케이션`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"음식 사진을 인식하여 영양 정보를 제공하는 애플리케이션"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`음식 영양 정보를 차트로 시각화하여 제공`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`사용자들이 텍스트 기반의 영양 정보에 대한 이해도가 낮아 시각적 데이터 필요`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Recharts를 활용한 직관적인 차트 제공으로 데이터 이해도 및 앱 사용 편의성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`서비스 이용률 약 30% 증가, 사용자 피드백에서 긍정적 피드백`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  PWA 적용 및 반응형 디자인 구현으로 모바일 최적화
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`모바일 접속 사용자 비율이 90% 이상의 서비스로 접속 과정의 편의성 제공이 필수인 서비스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`PWA를 통한 홈 화면 접속 가능한 앱으로 제공, 접속율 약 50% / 사용율 약 30% 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`반응형 디자인을 적용하여 모든 기기에서 일관된 경험 제공`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">인증 기반 접근 제한 처리</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`고가의 데이터를 포함한 서비스 특성상 외부 노출 및 무단 접근에 대한 우려가 제기됨`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`자사 및 계약사 사용자만 서비스를 이용할 수 있도록 제한해야 한다는 보안 요구사항 도출`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Next-Auth와 Middleware를 활용하여 미인증 사용자 및 미승인 도메인의 접근을 차단`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`데이터 무단 접근을 방지하고 보안 수준을 강화, 사용자 신뢰도 및 서비스 안정성 향상에 기여`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 임직원 코칭 백오피스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 1년 4개월)`}</span>
              2023.02 - 2024.05
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`임직원 코칭 백오피스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"임직원의 코칭 결과를 관리하고 코칭 프로세스를 지원하는 서비스"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`WebSocket을 활용한 실시간 채팅 기능 구현`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`비동기식(이메일 등) 커뮤니케이션으로 실시간 대응이 어렵고 비효율적인 업무 프로세스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`채팅 기능 도입으로 실시간 커뮤니케이션 가능, 문의 대응 시간을 평균 10분에서 5분 이내로 단축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`업무 효율성 증가, 진행 속도와 생산성 개선 확인`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Sentry 기반 에러 모니터링 구축
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`장애 및 에러 발생 시 대응이 지연되어 서비스 안정성 문제로 사용자 불만 접수`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Sentry 적용으로 실시간 에러 트래킹과 알림을 통한 대응 프로세스 구축`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`장애 확인 속도를 1시간 이내로 단축하여 장애 대응 효율 상승`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  임직원 라이프로그 정보 시각화 정보 제공
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`임직원 건강 코칭시에 정보 확인에 어려움이 있다는 피드백`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`Chart.js를 활용하여 복잡한 건강 정보를 각종 차트로 시각화 하여 제공`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`정보 확인 편의성 증가와 실시간 코칭시 정보 확인 용이성 확보`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KB오케어 헬스케어 서비스 */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-end pr-8 pt-2">
            <h4 className="font-semibold flex justify-end w-full gap-2">
              <span className="font-bold">{`(약 11개월)`}</span>
              2022.02 - 2022.12
            </h4>
          </div>
          <div className="w-full md:w-2/3 flex flex-col pl-8 gap-[24px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-bold">
                {`KB오케어 헬스케어 서비스`}
              </h5>
              <p className="font-bold text-[#00000080]">
                {`"KB오케어 서비스에 들어가는 헬스케어 서비스 제작"`}
              </p>
            </div>
            <div className="flex flex-col gap-4 pl-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  {`웹뷰 개발 및 모바일 이슈 대응`}
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`iOS의 사파리 브라우저 환경에서 input 태그, viewport와 같은 호환성 문제 발생`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`webkit 설정, dvh 단위 등을 사용하여 호환성 문제 해결`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`iOS 환경에서도 Android 환경과 동일한 모바일 환경 제공`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">
                  Git 기반 코드 리뷰 및 커밋 컨벤션 도입
                </span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`코드 품질 관리 부재로 유지보수 비용과 기술 부채 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`ADR 문서를 통한 코드 리뷰 프로세스와 커밋 컨벤션 도입 결정`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`에러율 감소 및 코드 품질 개선, 유지보수 비용 절감에 기여`}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-semibold">i18n 다국어 지원</span>
                <ul className="pl-2">
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`글로벌 사용자를 고려한 서비스로 다국어 지원이 필요한 서비스`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`i18n 기반 언어 지원으로 해외 사용자 접근 용이성 증가`}
                    </span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Dot size={16} color="#00000090" />
                    <span className="text-[#00000090] font-semibold">
                      {`글로벌 시장 확장 및 신규 사용자 확보에 기여`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-gray-200 hidden md:block absolute left-1/3 -top-8 h-full" />
      </div>
    </section>
  );
}

export default Experience;

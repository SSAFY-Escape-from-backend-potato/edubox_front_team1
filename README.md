# edubox-front

## 사용 기술

- TypeScript, React
- React Router, Recoil, Jest

## 실행 방법

1. `git clone https://github.com/SSAFY-Escape-from-backend-potato/edubox_front_team1.git`
2. `npm i`
3. `npm start`

## 브랜치 전략

- Git Flow
  - `main` - `develop` - `feature/xxx`

## 폴더 구조

- 초기 설정 기준으로, 개발 진행 중 변동될 수 있음.

```
src/
├── __tests__/              # 테스트 코드 관리
├── pages/                  # 페이지 단위 컴포넌트
│   ├── Pages1/
│   └── Pages2/
├── components/             # 재사용 가능한 UI 컴포넌트
├── store/                  # Recoil 상태 관리
├── api/                    # Axios와 관련된 API 호출 로직
├── hooks/                  # 커스텀 훅 모음
├── model/                  # 데이터 모델, 인터페이스 및 타입
├── utils/                  # 유틸리티 함수 모음
├── config/                 # 환경 설정 파일
├── styles/                 # 전역 스타일 파일
├── index.tsx               # 엔트리 포인트
├── App.tsx                 # 최상위 컴포넌트
├── reportWebVitals.ts      # 성능 측정 파일
└── setupTests.ts           # 테스트 환경 설정 파일
```

## 개발 순서

### 1단계

- [x] 프로젝트 초기 설정
- [x] 메인 페이지
- [x] 로그인 페이지
- [x] 회원가입 페이지
- [ ] 마이 페이지

### 2단계

- [ ] 게시판 페이지
- [ ] 게시글 상세 페이지
- [ ] 게시판 및 게시글 컴포넌트 확장

# 제품 및 벤더 분석 결과

## 벤더별 제품 그룹화

### 1. Freshworks
- Freshdesk Omni: 고객 지원 플랫폼
- Freshservice: ITSM 솔루션
- Freshchat: 실시간 채팅 솔루션
- Freshsales: CRM 솔루션
- Freddy AI: AI 자동화 솔루션
- Freshcaller: 클라우드 기반 콜센터 솔루션

### 2. Monday.com
- Monday Sales CRM: 영업 관리 솔루션
- Monday Dev: 개발 프로젝트 관리 솔루션
- Monday Service: 서비스 관리 솔루션
- Monday Work Management: 업무 관리 솔루션

### 3. Google
- Google Workspace: 클라우드 기반 협업 도구 모음

### 4. Splashtop
- Splashtop: 원격 접속 및 지원 솔루션

## 공통 데이터 구조

각 제품은 다음과 같은 일관된 데이터 구조를 가집니다:

```typescript
interface Product {
  id: string;            // 제품 고유 식별자
  name: string;          // 제품 이름
  vendor: string;        // 벤더 이름
  slogan: string;        // 한 줄 요약/슬로건
  description: string;   // 제품 설명
  heroImage: string;     // 대표 이미지 경로
  features: Feature[];   // 주요 특징 배열
  functions: Function[]; // 상세 기능 배열
  integrations: string[]; // 연동 서비스 목록
  faq: FAQ[];            // 자주 묻는 질문 배열
  themeColor: string;    // 테마 색상
}

interface Feature {
  icon: string;          // 아이콘 (FontAwesome 클래스명)
  title: string;         // 특징 제목
  description: string;   // 특징 설명
}

interface Function {
  name: string;          // 기능 이름
  description: string;   // 기능 설명
  image: string;         // 기능 이미지 경로
}

interface FAQ {
  question: string;      // 질문
  answer: string;        // 답변
}
```

## 공통 컴포넌트 추출

분석 결과, 다음과 같은 공통 컴포넌트를 추출할 수 있습니다:

1. **Header**: 로고, 내비게이션, 메가메뉴 포함
2. **Hero**: 제품 소개 배너 섹션
3. **FeatureGrid**: 주요 특징을 그리드 형태로 표시
4. **FunctionTable**: 상세 기능을 표 형태로 표시
5. **IntegrationSection**: 연동 서비스 로고 및 설명
6. **FAQAccordion**: 자주 묻는 질문 아코디언
7. **CTASection**: 데모 신청 및 상담 문의 버튼 섹션
8. **Footer**: 사이트 하단 정보

## 메뉴 구조 설계

```
- 홈
- Freshworks
  - Freshdesk Omni
  - Freshservice
  - Freshchat
  - Freshsales
  - Freddy AI
  - Freshcaller
- Monday.com
  - Monday Sales CRM
  - Monday Dev
  - Monday Service
  - Monday Work Management
- Google
  - Google Workspace
- Splashtop
  - Splashtop
- 제품 비교
- 문의하기
```

## 색상 및 디자인 시스템

- 기본 테마 색상: 블루 #3284D6, 그레이 #383838
- 벤더별 테마 색상:
  - Freshworks: #3284D6 (블루)
  - Monday.com: #FF3D57 (레드)
  - Google: #4285F4 (구글 블루)
  - Splashtop: #FF6600 (오렌지)
- 폰트: 나눔스퀘어, Noto Sans KR
- 반응형 브레이크포인트: 576px, 768px, 992px, 1200px

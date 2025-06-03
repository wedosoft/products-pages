# 통합 웹사이트 구조 설계

## 사이트맵 및 라우팅 구조

```
/                       # 홈페이지
/freshworks             # Freshworks 벤더 페이지
/freshworks/omni        # Freshdesk Omni 제품 페이지
/freshworks/service     # Freshservice 제품 페이지
/freshworks/chat        # Freshchat 제품 페이지
/freshworks/sales       # Freshsales 제품 페이지
/freshworks/freddy      # Freddy AI 제품 페이지
/freshworks/caller      # Freshcaller 제품 페이지
/monday                 # Monday.com 벤더 페이지
/monday/sales-crm       # Monday Sales CRM 제품 페이지
/monday/dev             # Monday Dev 제품 페이지
/monday/service         # Monday Service 제품 페이지
/monday/work            # Monday Work Management 제품 페이지
/google                 # Google 벤더 페이지
/google/workspace       # Google Workspace 제품 페이지
/splashtop              # Splashtop 벤더 페이지
/splashtop/remote       # Splashtop 제품 페이지
/compare                # 제품 비교 페이지
/contact                # 문의하기 페이지
```

## 컴포넌트 구조

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # 헤더 및 메인 내비게이션
│   │   ├── Footer.tsx           # 푸터
│   │   ├── Layout.tsx           # 레이아웃 래퍼
│   │   └── MegaMenu.tsx         # 메가메뉴 컴포넌트
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── home/                    # 홈페이지 관련 컴포넌트
│   │   ├── HeroSection.tsx      # 메인 히어로 섹션
│   │   ├── VendorShowcase.tsx   # 벤더 쇼케이스 섹션
│   │   ├── FeaturedProducts.tsx # 주요 제품 하이라이트
│   │   └── TestimonialSection.tsx # 고객 후기 섹션
│   ├── product/                 # 제품 관련 컴포넌트
│   │   ├── ProductHero.tsx      # 제품 히어로 섹션
│   │   ├── FeatureGrid.tsx      # 주요 특징 그리드
│   │   ├── FunctionTable.tsx    # 상세 기능 테이블
│   │   ├── IntegrationSection.tsx # 연동 서비스 섹션
│   │   ├── FAQAccordion.tsx     # FAQ 아코디언
│   │   └── CTASection.tsx       # 콜투액션 섹션
│   └── vendor/                  # 벤더 관련 컴포넌트
│       ├── VendorHero.tsx       # 벤더 히어로 섹션
│       └── ProductGrid.tsx      # 벤더 제품 그리드
├── pages/
│   ├── HomePage.tsx             # 홈페이지
│   ├── VendorPage.tsx           # 벤더 페이지 템플릿
│   ├── ProductPage.tsx          # 제품 페이지 템플릿
│   ├── ComparePage.tsx          # 제품 비교 페이지
│   └── ContactPage.tsx          # 문의하기 페이지
├── data/
│   ├── products.ts              # 제품 데이터
│   ├── vendors.ts               # 벤더 데이터
│   └── navigation.ts            # 내비게이션 구조 데이터
└── utils/
    ├── theme.ts                 # 테마 및 스타일 유틸리티
    └── helpers.ts               # 헬퍼 함수
```

## 메가메뉴 디자인

메가메뉴는 각 벤더별로 다음과 같은 구조를 가집니다:

```
[벤더명] ▼
┌─────────────────────────────────────────────────────┐
│ [벤더 로고]                                         │
│                                                     │
│ 제품                      주요 리소스               │
│ ├─ [제품1]                ├─ 블로그                │
│ ├─ [제품2]                ├─ 케이스 스터디         │
│ ├─ [제품3]                ├─ 웨비나                │
│ └─ [제품4]                └─ 백서                  │
│                                                     │
│ [벤더 소개 간략 텍스트]                            │
│                                                     │
│ [벤더 페이지로 이동] →                             │
└─────────────────────────────────────────────────────┘
```

## 반응형 디자인 전략

- **데스크톱 (1200px 이상)**: 전체 메가메뉴 표시, 4열 그리드 레이아웃
- **태블릿 (992px - 1199px)**: 축소된 메가메뉴, 3열 그리드 레이아웃
- **태블릿 (768px - 991px)**: 2열 그리드 레이아웃, 메가메뉴 대신 드롭다운
- **모바일 (767px 이하)**: 햄버거 메뉴, 1열 그리드 레이아웃, 아코디언 스타일 메뉴

## 테마 및 스타일 가이드

### 색상 시스템
```css
:root {
  /* 기본 테마 색상 */
  --primary: #3284D6;
  --primary-light: #4a9ae8;
  --primary-dark: #2a6eb8;
  --gray: #383838;
  --gray-light: #666666;
  --gray-dark: #222222;
  
  /* 벤더별 테마 색상 */
  --freshworks: #3284D6;
  --monday: #FF3D57;
  --google: #4285F4;
  --splashtop: #FF6600;
  
  /* 중립 색상 */
  --white: #ffffff;
  --light-gray: #f5f5f5;
  --medium-gray: #e0e0e0;
  --dark-gray: #888888;
}
```

### 타이포그래피
```css
/* 나눔스퀘어 및 Noto Sans KR 폰트 */
body {
  font-family: 'NanumSquare', 'Noto Sans KR', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'NanumSquare', sans-serif;
  font-weight: 700;
}
```

### 컴포넌트 스타일 가이드
- 모든 버튼은 둥근 모서리(border-radius: 4px)
- 그림자 효과는 일관되게 적용(box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1))
- 애니메이션은 부드러운 전환(transition: all 0.3s ease)
- 카드 디자인은 흰색 배경과 그림자 효과
- 아이콘은 FontAwesome 또는 Lucide 아이콘 사용

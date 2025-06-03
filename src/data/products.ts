export interface Product {
  id: string;
  vendorId: string;
  name: string;
  slogan: string;
  description: string;
  heroImage: string;
  features: Feature[];
  functions: Function[];
  integrations: string[];
  faq: FAQ[];
  themeColor: string;
  price: number; // Added price property
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Function {
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
  description?: string; // Added optional description property
}

export const products: Product[] = [
  // Freshworks 제품
  {
    id: 'omni',
    vendorId: 'freshworks',
    name: 'Freshdesk Omni',
    slogan: '모든 채널에서 탁월한 고객 경험을 제공하는 통합 고객 지원 플랫폼',
    description: 'Freshdesk Omni는 이메일, 전화, 채팅, 소셜 미디어 등 모든 채널에서 고객 지원을 통합하여 일관된 고객 경험을 제공합니다.',
    heroImage: '/images/products/freshdesk-omni-hero.png',
    features: [
      {
        icon: 'layers',
        title: '옴니채널 지원',
        description: '모든 고객 소통 채널을 하나의 플랫폼에서 통합 관리하여 일관된 고객 경험을 제공합니다.'
      },
      {
        icon: 'bot',
        title: 'AI 기반 자동화',
        description: 'Freddy AI를 통한 지능형 자동화로 반복적인 작업을 줄이고 지원 효율성을 높입니다.'
      },
      {
        icon: 'bar-chart',
        title: '고급 분석 및 보고',
        description: '실시간 대시보드와 커스텀 보고서로 지원 성과를 측정하고 개선 기회를 식별합니다.'
      }
    ],
    functions: [
      {
        name: '티켓 관리',
        description: '모든 고객 문의를 중앙화된 티켓 시스템에서 효율적으로 관리하고 추적합니다.',
        image: '/images/products/freshdesk-ticket.png'
      },
      {
        name: '지식 베이스',
        description: '셀프 서비스 포털을 통해 고객이 자주 묻는 질문에 대한 답변을 쉽게 찾을 수 있습니다.',
        image: '/images/products/freshdesk-knowledge.png'
      },
      {
        name: '자동화 워크플로우',
        description: '반복적인 작업을 자동화하여 지원팀의 생산성을 향상시키고 응답 시간을 단축합니다.',
        image: '/images/products/freshdesk-automation.png'
      },
      {
        name: '협업 도구',
        description: '팀 간 협업을 강화하여 복잡한 문제를 빠르게 해결하고 고객 만족도를 높입니다.',
        image: '/images/products/freshdesk-collaboration.png'
      },
      {
        name: '다국어 지원',
        description: '다양한 언어로 고객 지원을 제공하여 글로벌 비즈니스 확장을 지원합니다.',
        image: '/images/products/freshdesk-multilingual.png'
      },
      {
        name: '필드 서비스 관리',
        description: '현장 서비스 작업을 효율적으로 관리하고 최적화하여 고객 만족도를 높입니다.',
        image: '/images/products/freshdesk-field-service.png'
      }
    ],
    integrations: [
      'Slack', 'Microsoft Teams', 'Jira', 'Salesforce', 'HubSpot', 'Zapier'
    ],
    faq: [
      {
        question: 'Freshdesk Omni는 어떤 규모의 기업에 적합한가요?',
        answer: 'Freshdesk Omni는 중소기업부터 대기업까지 모든 규모의 기업에 맞는 확장 가능한 솔루션을 제공합니다. 다양한 요금제를 통해 기업의 규모와 요구사항에 맞게 조정할 수 있습니다.'
      },
      {
        question: '기존 시스템과의 통합이 가능한가요?',
        answer: '네, Freshdesk Omni는 CRM, 마케팅 자동화, 프로젝트 관리 도구 등 다양한 비즈니스 도구와 통합됩니다. 또한 REST API를 통해 커스텀 통합도 가능합니다.'
      },
      {
        question: '데이터 보안은 어떻게 보장되나요?',
        answer: 'Freshdesk Omni는 SOC 2, GDPR, ISO 27001 등 글로벌 보안 표준을 준수합니다. 데이터 암호화, 역할 기반 액세스 제어, 정기적인 보안 감사 등을 통해 고객 데이터를 안전하게 보호합니다.'
      },
      {
        question: '도입 및 교육 지원이 제공되나요?',
        answer: '네, Freshdesk Omni는 전담 온보딩 매니저, 교육 세션, 광범위한 문서 및 비디오 튜토리얼을 통해 원활한 도입을 지원합니다. 또한 24/7 고객 지원을 통해 문제 해결을 돕습니다.'
      }
    ],
    themeColor: '#3284D6',
    price: 49900
  },
  // 다른 제품들도 유사한 구조로 추가...
  {
    id: 'service',
    vendorId: 'freshworks',
    name: 'Freshservice',
    slogan: '현대적이고 직관적인 ITSM 솔루션으로 IT 서비스 관리 혁신',
    description: 'Freshservice는 기업의 IT 서비스 관리를 현대화하고 자동화하여 직원 생산성과 비즈니스 성과를 향상시키는 클라우드 기반 ITSM 솔루션입니다.',
    heroImage: '/images/products/freshservice-hero.png',
    features: [
      {
        icon: 'settings',
        title: '직관적인 서비스 데스크',
        description: '사용하기 쉬운 인터페이스로 IT 지원 요청을 효율적으로 관리하고 해결합니다.'
      },
      {
        icon: 'database',
        title: '자산 관리',
        description: 'IT 자산의 전체 수명주기를 추적하고 관리하여 비용을 최적화하고 규정 준수를 보장합니다.'
      },
      {
        icon: 'trending-up',
        title: '서비스 카탈로그',
        description: '셀프 서비스 포털을 통해 직원들이 필요한 IT 서비스를 쉽게 요청하고 접근할 수 있습니다.'
      }
    ],
    functions: [
      {
        name: '인시던트 관리',
        description: 'IT 서비스 중단 및 문제를 신속하게 해결하여 비즈니스 영향을 최소화합니다.',
        image: '/images/products/freshservice-incident.png'
      },
      {
        name: '문제 관리',
        description: '근본 원인 분석을 통해 반복되는 인시던트를 예방하고 서비스 품질을 향상시킵니다.',
        image: '/images/products/freshservice-problem.png'
      },
      {
        name: '변경 관리',
        description: '표준화된 프로세스로 IT 인프라 변경을 안전하게 계획, 승인 및 구현합니다.',
        image: '/images/products/freshservice-change.png'
      },
      {
        name: '릴리스 관리',
        description: '소프트웨어 및 하드웨어 릴리스를 효율적으로 계획하고 배포하여 비즈니스 연속성을 보장합니다.',
        image: '/images/products/freshservice-release.png'
      },
      {
        name: '서비스 수준 관리',
        description: 'SLA를 정의하고 모니터링하여 서비스 품질과 고객 만족도를 유지합니다.',
        image: '/images/products/freshservice-sla.png'
      },
      {
        name: '프로젝트 관리',
        description: 'IT 프로젝트를 효율적으로 계획, 실행 및 모니터링하여 비즈니스 목표 달성을 지원합니다.',
        image: '/images/products/freshservice-project.png'
      }
    ],
    integrations: [
      'Microsoft Active Directory', 'Azure AD', 'Google Workspace', 'Jira', 'Slack', 'Microsoft Teams'
    ],
    faq: [
      {
        question: 'Freshservice는 ITIL 프레임워크를 지원하나요?',
        answer: '네, Freshservice는 인시던트, 문제, 변경, 릴리스, 자산, 서비스 카탈로그 등 ITIL 프레임워크의 핵심 프로세스를 지원합니다. 이를 통해 기업은 IT 서비스 관리에 대한 업계 모범 사례를 쉽게 구현할 수 있습니다.'
      },
      {
        question: '자산 관리 기능은 어떻게 작동하나요?',
        answer: 'Freshservice의 자산 관리 기능은 자동 검색 도구를 통해 네트워크에 연결된 모든 하드웨어 및 소프트웨어 자산을 식별하고 추적합니다. 자산의 전체 수명주기, 계약, 라이선스, 비용 등을 관리하고 자산 관계 매핑을 통해 영향 분석을 수행할 수 있습니다.'
      },
      {
        question: '클라우드 인프라와 통합이 가능한가요?',
        answer: '네, Freshservice는 AWS, Azure, Google Cloud Platform 등 주요 클라우드 서비스 제공업체와 통합되어 클라우드 리소스를 모니터링하고 관리할 수 있습니다. 이를 통해 하이브리드 IT 환경에서도 통합된 서비스 관리가 가능합니다.'
      },
      {
        question: '모바일 앱을 제공하나요?',
        answer: '네, Freshservice는 iOS 및 Android 기기용 모바일 앱을 제공합니다. IT 팀은 이동 중에도 티켓을 관리하고, 승인을 처리하고, 자산을 스캔할 수 있습니다. 또한 직원들도 모바일 앱을 통해 티켓을 제출하고 상태를 확인할 수 있습니다.'
      }
    ],
    themeColor: '#3284D6',
    price: 39900
  },
  // 추가 제품들...
  {
    id: 'workspace',
    vendorId: 'google',
    name: 'Google Workspace',
    slogan: '어디서나 함께 일하는 방식을 혁신하는 클라우드 기반 협업 도구',
    description: 'Google Workspace는 Gmail, 문서, 드라이브, 캘린더, 미팅 등을 포함한 통합 클라우드 기반 생산성 및 협업 도구 모음으로, 팀이 어디서나 효율적으로 함께 일할 수 있도록 지원합니다.',
    heroImage: '/images/products/google-workspace-hero.png',
    features: [
      {
        icon: 'mail',
        title: '비즈니스 이메일',
        description: '기업 도메인을 사용한 전문적인 이메일 서비스와 강력한 스팸 필터링, 검색 기능을 제공합니다.'
      },
      {
        icon: 'file-text',
        title: '실시간 협업',
        description: '문서, 스프레드시트, 프레젠테이션을 실시간으로 함께 편집하고 공유할 수 있습니다.'
      },
      {
        icon: 'video',
        title: '화상 회의',
        description: 'Google Meet을 통해 안전하고 고품질의 화상 회의를 진행하고 화면 공유, 녹화 등 다양한 기능을 활용할 수 있습니다.'
      }
    ],
    functions: [
      {
        name: 'Gmail',
        description: '강력한 검색, 스팸 차단, 자동 분류 기능을 갖춘 비즈니스용 이메일 서비스입니다.',
        image: '/images/products/google-gmail.png'
      },
      {
        name: 'Google 드라이브',
        description: '안전한 클라우드 스토리지로 파일을 저장, 공유하고 어디서나 접근할 수 있습니다.',
        image: '/images/products/google-drive.png'
      },
      {
        name: 'Google 문서',
        description: '실시간 공동 편집이 가능한 워드 프로세서로 팀 협업을 강화합니다.',
        image: '/images/products/google-docs.png'
      },
      {
        name: 'Google 스프레드시트',
        description: '데이터 분석 및 시각화 도구가 포함된 온라인 스프레드시트 애플리케이션입니다.',
        image: '/images/products/google-sheets.png'
      },
      {
        name: 'Google 슬라이드',
        description: '매력적인 프레젠테이션을 쉽게 만들고 공유할 수 있는 도구입니다.',
        image: '/images/products/google-slides.png'
      },
      {
        name: 'Google Meet',
        description: '고품질 화상 회의 솔루션으로 원격 팀 협업을 지원합니다.',
        image: '/images/products/google-meet.png'
      }
    ],
    integrations: [
      'Slack', 'Salesforce', 'DocuSign', 'Asana', 'Trello', 'Zapier'
    ],
    faq: [
      {
        question: 'Google Workspace는 어떤 규모의 기업에 적합한가요?',
        answer: 'Google Workspace는 소규모 스타트업부터 대규모 엔터프라이즈까지 모든 규모의 기업에 맞는 다양한 요금제를 제공합니다. 기업의 규모와 요구사항에 따라 적합한 플랜을 선택할 수 있습니다.'
      },
      {
        question: '데이터 보안 및 개인정보 보호는 어떻게 관리되나요?',
        answer: 'Google Workspace는 데이터 암호화, 2단계 인증, 고급 DLP(데이터 손실 방지) 기능 등 강력한 보안 기능을 제공합니다. 또한 ISO 27001, SOC 2/3, GDPR 등 글로벌 보안 및 규정 준수 표준을 충족합니다.'
      },
      {
        question: '기존 이메일 및 데이터를 Google Workspace로 마이그레이션할 수 있나요?',
        answer: '네, Google Workspace는 기존 이메일, 캘린더, 연락처 및 파일을 쉽게 마이그레이션할 수 있는 도구를 제공합니다. Microsoft Exchange, Office 365, 기타 IMAP 서버 등 다양한 시스템에서의 마이그레이션을 지원합니다.'
      },
      {
        question: '오프라인에서도 작업할 수 있나요?',
        answer: '네, Google 문서, 스프레드시트, 슬라이드는 오프라인 모드를 지원하여 인터넷 연결 없이도 작업할 수 있습니다. 인터넷에 다시 연결되면 변경 사항이 자동으로 동기화됩니다.'
      }
    ],
    themeColor: '#4285F4',
    price: 0
  },
  {
    id: 'remote',
    vendorId: 'splashtop',
    name: 'Splashtop',
    slogan: '안전하고 빠른 원격 접속 및 지원 솔루션으로 언제 어디서나 업무 연속성을 보장합니다',
    description: 'Splashtop은 기업의 전산 담당자를 위한 안전하고 효율적인 원격 접속 및 지원 솔루션을 제공합니다. 고성능 원격 접속과 다양한 지원 기능으로 IT 관리 효율성을 높입니다.',
    heroImage: '/images/products/splashtop-hero.png',
    features: [
      {
        icon: 'shield',
        title: '엔터프라이즈급 보안',
        description: 'TLS 1.2 암호화, 2단계 인증, 디바이스 인증 등 다양한 보안 기능으로 안전한 원격 접속 환경을 제공합니다.'
      },
      {
        icon: 'zap',
        title: '고성능 원격 접속',
        description: '4K 해상도와 60fps의 고품질 스트리밍으로 지연 없는 빠른 원격 접속 경험을 제공합니다.'
      },
      {
        icon: 'headphones',
        title: '다양한 지원 기능',
        description: '무인 원격 접속, 유인 지원, 원격 모니터링 등 다양한 지원 기능으로 IT 관리 효율성을 높입니다.'
      }
    ],
    functions: [
      {
        name: '무인 원격 접속',
        description: '사전에 설치된 에이전트를 통해 언제든지 원격 컴퓨터에 접속하여 작업할 수 있습니다. 사용자의 개입 없이도 접속이 가능합니다.',
        image: '/images/products/splashtop-unattended.png'
      },
      {
        name: '유인 원격 지원',
        description: '사용자의 동의를 받아 일회성 코드나 링크를 통해 즉시 원격 지원을 제공할 수 있습니다. 별도의 소프트웨어 설치가 필요 없습니다.',
        image: '/images/products/splashtop-attended.png'
      },
      {
        name: '파일 전송',
        description: '로컬 컴퓨터와 원격 컴퓨터 간에 드래그 앤 드롭으로 쉽게 파일을 전송할 수 있습니다. 대용량 파일도 빠르게 전송됩니다.',
        image: '/images/products/splashtop-file-transfer.png'
      },
      {
        name: '원격 인쇄',
        description: '원격 컴퓨터의 문서를 로컬 프린터로 직접 인쇄할 수 있어 원격 작업 시에도 문서 출력이 용이합니다.',
        image: '/images/products/splashtop-remote-print.png'
      },
      {
        name: '세션 기록',
        description: '원격 지원 세션을 녹화하여 나중에 참조하거나 교육 목적으로 활용할 수 있습니다. 감사 및 규정 준수에도 유용합니다.',
        image: '/images/products/splashtop-session-recording.png'
      },
      {
        name: '다중 모니터 지원',
        description: '원격 컴퓨터의 여러 모니터를 동시에 보거나 특정 모니터만 선택하여 볼 수 있어 멀티 모니터 환경에서도 효율적으로 작업할 수 있습니다.',
        image: '/images/products/splashtop-multi-monitor.png'
      }
    ],
    integrations: [
      'PSA 도구', 'RMM 솔루션', '티켓팅 시스템', 'MDM 솔루션', 'SSO 서비스', '디렉토리 서비스'
    ],
    faq: [
      {
        question: 'Splashtop은 어떤 운영체제를 지원하나요?',
        answer: 'Splashtop은 Windows, Mac, Linux, iOS, Android 등 다양한 운영체제를 지원합니다. Windows는 Windows 7, 8, 10, 11 및 Windows Server 버전을 지원하며, Mac은 macOS 10.10 이상을 지원합니다. Linux는 Ubuntu, CentOS, Red Hat, Fedora 등 주요 배포판을 지원합니다. 모바일 기기의 경우 iOS 12.0 이상, Android 5.0 이상을 지원하여 거의 모든 기기에서 원격 접속 및 지원이 가능합니다.'
      },
      {
        question: 'Splashtop의 보안 기능은 어떻게 되나요?',
        answer: 'Splashtop은 엔터프라이즈급 보안 기능을 제공합니다. 모든 원격 세션은 TLS 1.2 및 AES 256비트 암호화로 보호되며, 2단계 인증(2FA), 디바이스 인증, 생체 인식 로그인 등 다중 인증 옵션을 지원합니다. 또한 세션 타임아웃, 원격 잠금, 화면 녹화 등 세션 보안 기능과 IP 제한, 디바이스 액세스 제어, 그룹 기반 권한 설정 등 액세스 제어 기능을 제공합니다.'
      },
      {
        question: 'Splashtop의 라이선스 모델은 어떻게 되나요?',
        answer: 'Splashtop은 다양한 라이선스 모델을 제공합니다. 비즈니스 액세스 라이선스는 사용자 기반으로 제공되며, 한 명의 사용자가 여러 대의 컴퓨터에 접속할 수 있습니다. 원격 지원 라이선스는 동시 기술자(concurrent technician) 모델로, 라이선스 수만큼의 기술자가 동시에 무제한 컴퓨터에 원격 지원을 제공할 수 있습니다. 엔터프라이즈 라이선스는 조직의 규모와 요구사항에 맞게 커스터마이징이 가능합니다.'
      },
      {
        question: '네트워크 환경이 좋지 않은 곳에서도 Splashtop을 사용할 수 있나요?',
        answer: '네, Splashtop은 낮은 대역폭 환경에서도 효율적으로 작동하도록 최적화되어 있습니다. 자동 품질 조정 기술을 통해 네트워크 상태에 따라 스트리밍 품질을 동적으로 조정하여 연결이 불안정한 환경에서도 원활한 원격 접속 경험을 제공합니다. 최소 1.5Mbps의 인터넷 속도에서도 작동 가능하며, 네트워크 지연 시간이 높은 환경에서도 사용자 경험을 최적화하는 기술을 적용하고 있습니다.'
      }
    ],
    themeColor: '#FF6600',
    price: 0
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByVendorId = (vendorId: string): Product[] => {
  return products.filter(product => product.vendorId === vendorId);
};

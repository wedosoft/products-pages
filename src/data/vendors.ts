export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  logo: string;
  themeColor: string;
  products: string[];
  resources: Resource[];
  productDetails?: ProductDetail[]; // Optional property for detailed product information
}

export interface Resource {
  title: string;
  url: string;
}

export const vendors: Vendor[] = [
  {
    id: 'freshworks',
    name: 'Freshworks',
    description: '기업의 고객 및 직원 경험을 향상시키는 클라우드 기반 비즈니스 소프트웨어 솔루션',
    logo: '/images/vendors/freshworks-logo.png',
    themeColor: '#3284D6',
    products: ['omni', 'service', 'chat', 'sales', 'freddy', 'caller'],
    resources: [
      { title: '블로그', url: '#' },
      { title: '케이스 스터디', url: '#' },
      { title: '웨비나', url: '#' },
      { title: '백서', url: '#' }
    ],
    productDetails: [
      {
        id: 'omni',
        name: 'Omni',
        description: '고객과의 모든 접점을 하나로 연결하는 옴니채널 솔루션',
        price: 100
      },
      {
        id: 'service',
        name: 'Service',
        description: '고객 서비스 관리를 위한 통합 솔루션',
        price: 150
      },
      {
        id: 'chat',
        name: 'Chat',
        description: '실시간 고객 채팅 지원 솔루션',
        price: 80
      },
      {
        id: 'sales',
        name: 'Sales',
        description: '영업 팀을 위한 CRM 솔루션',
        price: 120
      },
      {
        id: 'freddy',
        name: 'Freddy AI',
        description: 'AI 기반 고객 인사이트 및 자동화 솔루션',
        price: 200
      },
      {
        id: 'caller',
        name: 'Caller',
        description: '클라우드 기반 통화 센터 솔루션',
        price: 90
      }
    ]
  },
  {
    id: 'monday',
    name: 'Monday.com',
    description: '팀 협업과 업무 관리를 위한 클라우드 기반 작업 운영 시스템',
    logo: '/images/vendors/monday-logo.png',
    themeColor: '#FF3D57',
    products: ['sales-crm', 'dev', 'service', 'work'],
    resources: [
      { title: '블로그', url: '#' },
      { title: '케이스 스터디', url: '#' },
      { title: '웨비나', url: '#' },
      { title: '템플릿', url: '#' }
    ],
    productDetails: [
      {
        id: 'sales-crm',
        name: 'Sales CRM',
        description: '판매 관리를 위한 강력한 CRM 솔루션',
        price: 200
      },
      {
        id: 'dev',
        name: 'Dev',
        description: '개발 팀을 위한 프로젝트 관리 도구',
        price: 250
      },
      {
        id: 'service',
        name: 'Service',
        description: '고객 서비스 및 지원 관리 플랫폼',
        price: 180
      },
      {
        id: 'work',
        name: 'Work Management',
        description: '모든 팀을 위한 업무 관리 플랫폼',
        price: 150
      }
    ]
  },
  {
    id: 'google',
    name: 'Google',
    description: '기업의 생산성과 협업을 향상시키는 클라우드 기반 도구 모음',
    logo: '/images/vendors/google-logo.png',
    themeColor: '#4285F4',
    products: ['workspace'],
    resources: [
      { title: '블로그', url: '#' },
      { title: '교육 센터', url: '#' },
      { title: '파트너 프로그램', url: '#' },
      { title: '기술 문서', url: '#' }
    ],
    productDetails: [
      {
        id: 'workspace',
        name: 'Google Workspace',
        description: '이메일, 문서, 스프레드시트 등 모든 업무 도구가 포함된 솔루션',
        price: 300
      }
    ]
  },
  {
    id: 'splashtop',
    name: 'Splashtop',
    description: '안전하고 빠른 원격 접속 및 지원 솔루션',
    logo: '/images/vendors/splashtop-logo.png',
    themeColor: '#FF6600',
    products: ['remote'],
    resources: [
      { title: '블로그', url: '#' },
      { title: '웨비나', url: '#' },
      { title: '고객 사례', url: '#' },
      { title: '도움말 센터', url: '#' }
    ],
    productDetails: [
      {
        id: 'remote',
        name: 'Splashtop Remote',
        description: '원격으로 컴퓨터에 접속하여 작업할 수 있는 솔루션',
        price: 350
      }
    ]
  }
];

export const getVendorById = (id: string): Vendor | undefined => {
  return vendors.find(vendor => vendor.id === id);
};

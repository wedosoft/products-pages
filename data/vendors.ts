export interface Vendor {
  id: string;
  name: string;
  description: string;
  logo: string;
  themeColor: string;
  products: string[];
  resources: Resource[];
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
    ]
  }
];

export const getVendorById = (id: string): Vendor | undefined => {
  return vendors.find(vendor => vendor.id === id);
};

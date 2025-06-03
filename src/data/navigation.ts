export interface NavigationItem {
  title: string;
  path: string;
  megaMenu?: boolean;
  vendorId?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    title: '홈',
    path: '/'
  },
  {
    title: 'Freshworks',
    path: '/freshworks',
    megaMenu: true,
    vendorId: 'freshworks'
  },
  {
    title: 'Monday.com',
    path: '/monday',
    megaMenu: true,
    vendorId: 'monday'
  },
  {
    title: 'Google',
    path: '/google',
    megaMenu: true,
    vendorId: 'google'
  },
  {
    title: 'Splashtop',
    path: '/splashtop',
    megaMenu: true,
    vendorId: 'splashtop'
  },
  {
    title: '제품 비교',
    path: '/compare'
  },
  {
    title: '문의하기',
    path: '/contact'
  }
];

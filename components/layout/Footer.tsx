import React from 'react';
import { Footer as FooterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProductCatalog</h3>
            <p className="text-gray-300 mb-4">
              기업의 전산 담당자를 위한 최고의 소프트웨어 솔루션을 한 곳에서 비교하고 선택하세요.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FooterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FooterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <FooterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">벤더</h4>
            <ul className="space-y-2">
              <li><a href="/freshworks" className="text-gray-300 hover:text-white">Freshworks</a></li>
              <li><a href="/monday" className="text-gray-300 hover:text-white">Monday.com</a></li>
              <li><a href="/google" className="text-gray-300 hover:text-white">Google</a></li>
              <li><a href="/splashtop" className="text-gray-300 hover:text-white">Splashtop</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">제품 카테고리</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">고객 지원</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">IT 서비스 관리</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">CRM</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">협업 도구</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">원격 접속</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">고객 지원</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-white">문의하기</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">자주 묻는 질문</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">블로그</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">리소스</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ProductCatalog. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">개인정보처리방침</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">이용약관</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

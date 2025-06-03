import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">문의하기</h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            제품 상담, 데모 신청, 기술 지원 등 어떤 문의든 전문가가 도와드립니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">연락처 정보</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">본사</h3>
                <p className="text-gray-600 mb-1">서울특별시 강남구 테헤란로 123</p>
                <p className="text-gray-600 mb-1">제품카탈로그 빌딩 7층</p>
                <p className="text-gray-600">우편번호: 06234</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">고객 지원</h3>
                <p className="text-gray-600 mb-1">이메일: support@productcatalog.kr</p>
                <p className="text-gray-600 mb-1">전화: 02-123-4567</p>
                <p className="text-gray-600">운영 시간: 평일 9:00 - 18:00</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">영업 문의</h3>
                <p className="text-gray-600 mb-1">이메일: sales@productcatalog.kr</p>
                <p className="text-gray-600 mb-1">전화: 02-123-4568</p>
                <p className="text-gray-600">운영 시간: 평일 9:00 - 18:00</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">문의 양식</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    회사명 *
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                    문의 유형 *
                  </label>
                  <select
                    id="inquiry"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">선택해주세요</option>
                    <option value="product">제품 문의</option>
                    <option value="demo">데모 신청</option>
                    <option value="pricing">가격 문의</option>
                    <option value="support">기술 지원</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  제출하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">데모는 어떻게 신청하나요?</h3>
              <p className="text-gray-600">
                데모 신청은 위 문의 양식에서 '데모 신청'을 선택하여 요청하시거나, 각 제품 페이지에서 '데모 신청' 버튼을 클릭하여 신청하실 수 있습니다. 담당자가 확인 후 1영업일 이내에 연락드립니다.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">제품 가격은 어떻게 확인할 수 있나요?</h3>
              <p className="text-gray-600">
                각 제품의 가격은 기업 규모와 필요한 기능에 따라 다양하게 책정됩니다. 정확한 가격 정보를 원하시면 문의 양식을 통해 '가격 문의'를 선택하여 요청해 주세요. 담당자가 맞춤형 견적을 제공해 드립니다.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3">기술 지원은 어떻게 받을 수 있나요?</h3>
              <p className="text-gray-600">
                기술 지원이 필요하신 경우, 위 문의 양식에서 '기술 지원'을 선택하여 요청하시거나 support@productcatalog.kr로 이메일을 보내주세요. 또한 02-123-4567로 전화하셔서 기술 지원팀에 직접 문의하실 수도 있습니다.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">제품 교육은 제공되나요?</h3>
              <p className="text-gray-600">
                네, 모든 제품에 대해 기본적인 온보딩 교육을 제공하며, 필요에 따라 심화 교육도 가능합니다. 교육 일정과 내용은 제품 도입 시 담당자와 상의하여 결정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

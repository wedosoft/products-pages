import React from 'react';
import { Link } from 'react-router-dom';

const ComparePage = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">제품 비교</h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            다양한 벤더의 제품을 비교하여 귀사에 가장 적합한 솔루션을 찾아보세요.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">벤더별 제품 비교</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left border">기능 / 벤더</th>
                  <th className="p-4 text-center border" style={{ color: '#3284D6' }}>Freshworks</th>
                  <th className="p-4 text-center border" style={{ color: '#FF3D57' }}>Monday.com</th>
                  <th className="p-4 text-center border" style={{ color: '#4285F4' }}>Google</th>
                  <th className="p-4 text-center border" style={{ color: '#FF6600' }}>Splashtop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">고객 지원</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★★☆</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                  <td className="p-4 border text-center">★★★★☆</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">IT 서비스 관리</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★★☆</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                  <td className="p-4 border text-center">★★☆☆☆</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">협업 도구</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★☆☆☆</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">원격 접속</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                  <td className="p-4 border text-center">★☆☆☆☆</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                  <td className="p-4 border text-center">★★★★★</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">AI 기능</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★★☆</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">확장성</td>
                  <td className="p-4 border text-center">★★★★☆</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★★★</td>
                  <td className="p-4 border text-center">★★★☆☆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 제품 비교</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-2 bg-[#3284D6] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Freshdesk Omni</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>옴니채널 고객 지원</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AI 기반 자동화</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>고급 분석 및 보고</span>
                </li>
              </ul>
              <Link to="/freshworks/omni" className="text-[#3284D6] font-medium hover:underline">자세히 보기</Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-2 bg-[#FF3D57] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Monday Work Management</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>직관적인 작업 관리</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>커스터마이징 가능한 워크플로우</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>다양한 통합 기능</span>
                </li>
              </ul>
              <Link to="/monday/work" className="text-[#FF3D57] font-medium hover:underline">자세히 보기</Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-2 bg-[#4285F4] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Google Workspace</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>비즈니스 이메일</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>실시간 협업</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>화상 회의</span>
                </li>
              </ul>
              <Link to="/google/workspace" className="text-[#4285F4] font-medium hover:underline">자세히 보기</Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-2 bg-[#FF6600] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Splashtop</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>엔터프라이즈급 보안</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>고성능 원격 접속</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>다양한 지원 기능</span>
                </li>
              </ul>
              <Link to="/splashtop/remote" className="text-[#FF6600] font-medium hover:underline">자세히 보기</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg shadow-md p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">맞춤형 비교 분석이 필요하신가요?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              전문 컨설턴트가 귀사의 요구사항에 맞는 최적의 솔루션을 비교 분석해 드립니다.
              지금 바로 무료 상담을 신청하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparePage;

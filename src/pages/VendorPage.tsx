import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVendorById } from '../data/vendors';
import { getProductsByVendorId } from '../data/products';
import { ArrowRight } from 'lucide-react';

const VendorPage = () => {
  const { vendorId } = useParams<{ vendorId: string }>();
  const vendor = getVendorById(vendorId || '');
  const products = getProductsByVendorId(vendorId || '');

  if (!vendor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">벤더를 찾을 수 없습니다</h1>
        <p className="mb-8">요청하신 벤더 정보를 찾을 수 없습니다.</p>
        <a href="/" className="text-primary hover:underline">홈으로 돌아가기</a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* 벤더 히어로 섹션 */}
      <section 
        className="py-16 md:py-24" 
        style={{ backgroundColor: `${vendor.themeColor}10` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: vendor.themeColor }}>
                {vendor.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {vendor.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#products" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  style={{ backgroundColor: vendor.themeColor }}
                >
                  제품 살펴보기
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border rounded-md hover:bg-gray-50 transition-colors"
                  style={{ borderColor: vendor.themeColor, color: vendor.themeColor }}
                >
                  상담 문의
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                <div 
                  className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${vendor.themeColor}20` }}
                >
                  <span className="text-3xl font-bold" style={{ color: vendor.themeColor }}>
                    {vendor.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{vendor.name}</h2>
                <p className="text-gray-600 mb-4">제품 {products.length}개</p>
                {/* 벤더의 제품 빠른 링크 섹션 */}
                {vendor.products && vendor.products.length > 0 && (
                  <div className="mt-6 border-t pt-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3">빠른 링크</h3>
                    <div className="space-y-2">
                      {vendor.products.map((productId) => {
                        const product = products.find(p => p.id === productId);
                        return product ? (
                          <Link
                            key={productId}
                            to={`/${vendor.id}/${productId}`}
                            className="block text-sm hover:underline"
                            style={{ color: vendor.themeColor }}
                          >
                            {product.name}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 제품 목록 섹션 */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{vendor.name} 제품</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div 
                  className="h-48 bg-gray-100 flex items-center justify-center"
                  style={{ backgroundColor: `${vendor.themeColor}15` }}
                >
                  <span className="text-2xl font-bold" style={{ color: vendor.themeColor }}>
                    {product.name}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                    {product.slogan}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/${vendor.id}/${product.id}`}
                    className="inline-flex items-center font-medium hover:underline"
                    style={{ color: vendor.themeColor }}
                  >
                    자세히 보기
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 리소스 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{vendor.name} 리소스</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vendor.resources.map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: vendor.themeColor }}>
                  {resource.title}
                </h3>
                <p className="text-gray-600">
                  {vendor.name}의 {resource.title}을(를) 확인하세요.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div 
            className="rounded-lg shadow-md p-8 md:p-12 text-center"
            style={{ backgroundColor: `${vendor.themeColor}10` }}
          >
            <h2 className="text-3xl font-bold mb-4">{vendor.name} 제품에 대해 더 알고 싶으신가요?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              전문 컨설턴트가 귀사의 요구사항에 맞는 최적의 {vendor.name} 솔루션을 추천해 드립니다.
              지금 바로 무료 상담을 신청하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 text-white rounded-md hover:bg-opacity-90 transition-colors"
                style={{ backgroundColor: vendor.themeColor }}
              >
                무료 상담 신청
              </a>
              <a 
                href="/compare" 
                className="px-6 py-3 border rounded-md hover:bg-gray-50 transition-colors"
                style={{ borderColor: vendor.themeColor, color: vendor.themeColor }}
              >
                제품 비교하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorPage;

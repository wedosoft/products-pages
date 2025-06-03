import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products.ts';
import { getVendorById } from '../data/vendors.ts';
import { ArrowRight, Check } from 'lucide-react';

const ProductPage = () => {
  const { vendorId, productId } = useParams<{ vendorId: string; productId: string }>();
  const product = getProductById(productId || '');
  const vendor = product ? getVendorById(product.vendorId) : null;
  
  if (!product || !vendor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">제품을 찾을 수 없습니다</h1>
        <p className="mb-8">요청하신 제품 정보를 찾을 수 없습니다.</p>
        <a href="/" className="text-primary hover:underline">홈으로 돌아가기</a>
      </div>
    );
  }
  
  return (
    <div>
      {/* 제품 히어로 섹션 */}
      <section className="py-16 md:py-24" style={{ backgroundColor: `${product.themeColor}10` }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <a 
                  href={`/${vendor.id}`} 
                  className="text-sm font-medium hover:underline"
                  style={{ color: vendor.themeColor }}
                >
                  {vendor.name}
                </a>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-sm text-gray-600">{product.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: product.themeColor }}>
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {product.slogan}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#features" 
                  className="px-6 py-3 text-white rounded-md hover:bg-opacity-90 transition-colors"
                  style={{ backgroundColor: product.themeColor }}
                >
                  데모 신청
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border rounded-md hover:bg-gray-50 transition-colors"
                  style={{ borderColor: product.themeColor, color: product.themeColor }}
                >
                  상담 문의
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                <div 
                  className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${product.themeColor}20` }}
                >
                  <span className="text-3xl font-bold" style={{ color: product.themeColor }}>
                    {product.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600">{vendor.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 제품 설명 섹션 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* 주요 특징 섹션 */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 특징</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${product.themeColor}15` }}
                >
                  <span className="text-xl" style={{ color: product.themeColor }}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 상세 기능 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">상세 기능</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {product.name}의 강력한 기능을 살펴보세요.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {product.functions.map((func, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div 
                  className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6"
                  style={{ backgroundColor: `${product.themeColor}10` }}
                >
                  <span className="text-xl font-bold" style={{ color: product.themeColor }}>
                    {func.name}
                  </span>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{func.name}</h3>
                  <p className="text-gray-600">
                    {func.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 연동/확장성 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">연동 및 확장성</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {product.name}은 다양한 서비스 및 도구와 원활하게 연동됩니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {product.integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white px-6 py-4 rounded-lg shadow-sm"
              >
                {integration}
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">API 및 확장 기능</h3>
            <p className="text-gray-600 mb-6">
              {product.name}은 강력한 API와 웹훅을 제공하여 기존 시스템과의 통합 및 워크플로우 자동화를 지원합니다.
              개발자 친화적인 문서와 SDK를 통해 쉽게 확장할 수 있습니다.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center font-medium hover:underline"
              style={{ color: product.themeColor }}
            >
              개발자 문서 보기
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          
          <div className="max-w-3xl mx-auto">
            {product.faq.map((item, index) => (
              <div 
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{product.name}을(를) 도입할 준비가 되셨나요?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              지금 바로 데모를 신청하거나 전문 컨설턴트에게 문의하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="px-6 py-3 text-white rounded-md hover:bg-opacity-90 transition-colors"
                style={{ backgroundColor: product.themeColor }}
              >
                데모 신청
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border rounded-md hover:bg-gray-50 transition-colors"
                style={{ borderColor: product.themeColor, color: product.themeColor }}
              >
                상담 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

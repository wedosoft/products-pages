import React from 'react';
import { vendors } from '../data/vendors.ts';
import { products } from '../data/products.ts';
import { ArrowRight, Star, Users, BarChart2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              비즈니스 솔루션 카탈로그
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              기업의 전산 담당자를 위한 최고의 소프트웨어 솔루션을 한 곳에서 비교하고 선택하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/compare" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                제품 비교하기
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-50 transition-colors"
              >
                상담 문의
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {vendors.slice(0, 4).map((vendor) => (
                    <div 
                      key={vendor.id} 
                      className="flex items-center justify-center h-20 bg-gray-50 rounded-md p-4"
                      style={{ borderTop: `3px solid ${vendor.themeColor}` }}
                    >
                      <span className="text-xl font-bold" style={{ color: vendor.themeColor }}>
                        {vendor.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-lg font-bold">
                12+ 제품
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VendorShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">주요 벤더</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div 
                className="h-2" 
                style={{ backgroundColor: vendor.themeColor }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{vendor.name}</h3>
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                  {vendor.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  제품 {vendor.products.length}개
                </p>
                <a 
                  href={`/${vendor.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
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
  );
};

const FeaturedProducts = () => {
  // 각 벤더에서 첫 번째 제품을 추출
  const featuredProducts = vendors.map(vendor => 
    products.find(product => product.vendorId === vendor.id)
  ).filter(Boolean);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">주요 제품</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          각 벤더의 대표 제품을 살펴보고 비즈니스에 가장 적합한 솔루션을 찾아보세요.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => product && (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div 
                className="h-48 bg-gray-100 flex items-center justify-center"
                style={{ backgroundColor: `${product.themeColor}15` }}
              >
                <span className="text-2xl font-bold" style={{ color: product.themeColor }}>
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
                  href={`/${product.vendorId}/${product.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
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
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-bold mb-2">12+</h3>
            <p className="text-lg opacity-80">프리미엄 제품</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-bold mb-2">4</h3>
            <p className="text-lg opacity-80">글로벌 벤더</p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <BarChart2 className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-lg opacity-80">고객 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">비즈니스에 적합한 솔루션을 찾고 계신가요?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 요구사항에 맞는 최적의 솔루션을 추천해 드립니다.
            지금 바로 무료 상담을 신청하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              무료 상담 신청
            </a>
            <a 
              href="/compare" 
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              제품 비교하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <VendorShowcase />
      <FeaturedProducts />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;

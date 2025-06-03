import React from 'react';
import { Link } from 'react-router-dom';
import { vendors } from '../../data/vendors';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMenu = (vendorId: string) => {
    setActiveMenu(activeMenu === vendorId ? null : vendorId);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-bold text-primary">
            ProductCatalog
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-primary focus:outline-none"
                  onClick={() => toggleMenu(vendor.id)}
                >
                  {vendor.name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {/* 메가메뉴 */}
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 transition-all duration-300 ${
                    activeMenu === vendor.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div className="mb-4">
                    <Link
                      to={`/${vendor.id}`}
                      className="font-bold text-lg hover:text-primary"
                      style={{ color: vendor.themeColor }}
                    >
                      {vendor.name} 전체 보기
                    </Link>
                  </div>
                  <div className="space-y-2">
                    {vendor.products.map((productId) => {
                      const product = vendor.productDetails.find(p => p.id === productId);
                      return product ? (
                        <Link
                          key={productId}
                          to={`/${vendor.id}/${productId}`}
                          className="block text-gray-700 hover:text-primary"
                        >
                          {product.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}

            <Link to="/compare" className="text-gray-700 hover:text-primary">
              제품 비교
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">
              문의하기
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="space-y-2">
                  <Link
                    to={`/${vendor.id}`}
                    className="block font-bold"
                    style={{ color: vendor.themeColor }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {vendor.name}
                  </Link>
                  <div className="pl-4 space-y-2">
                    {vendor.products.map((productId) => {
                      const product = vendor.productDetails.find(p => p.id === productId);
                      return product ? (
                        <Link
                          key={productId}
                          to={`/${vendor.id}/${productId}`}
                          className="block text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              ))}
              <Link
                to="/compare"
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                제품 비교
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                문의하기
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

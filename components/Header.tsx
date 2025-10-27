import React from 'react';
import { Page } from '../types';
import { LeafIcon, ShoppingCartIcon, MessageSquareIcon, SearchIcon } from './Icons';

interface HeaderProps {
  cartCount: number;
  setCurrentPage: (page: Page) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isSearchVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartCount, setCurrentPage, searchTerm, onSearchChange, isSearchVisible }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          onClick={() => setCurrentPage('home')}
        >
          <LeafIcon className="h-8 w-8 text-green-600" />
          <h1 className="text-xl md:text-2xl font-bold text-slate-800">Eco-Commerce</h1>
        </div>

        {isSearchVisible && (
          <div className="relative flex-grow max-w-md hidden md:block">
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-label="Search products"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
          </div>
        )}

        <nav className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-slate-600 hover:text-green-600 transition-colors font-medium"
          >
            Products
          </button>
          <button 
            onClick={() => setCurrentPage('ecohub')} 
            className="text-slate-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1.5"
          >
             <MessageSquareIcon className="h-5 w-5" />
            <span>Eco-Hub</span>
          </button>
          <button 
            onClick={() => setCurrentPage('cart')} 
            className="relative text-slate-600 hover:text-green-600 transition-colors"
          >
            <ShoppingCartIcon className="h-7 w-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>

       {isSearchVisible && (
          <div className="md:hidden px-4 pb-4">
               <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                        aria-label="Search products"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-slate-400" />
                    </div>
                </div>
          </div>
      )}
    </header>
  );
};

export default Header;
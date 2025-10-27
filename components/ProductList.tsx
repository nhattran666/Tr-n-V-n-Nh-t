import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { StarIcon, ShoppingCartIcon } from './Icons';

interface ProductListProps {
  products: Product[];
  topSaleProduct?: Product;
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  searchTerm: string;
}

const TopSaleCard: React.FC<{ product: Product, onProductSelect: (product: Product) => void, onAddToCart: (product: Product) => void }> = ({ product, onProductSelect, onAddToCart }) => (
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 mb-12 border border-green-200 flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2 w-full">
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md" />
    </div>
    <div className="md:w-1/2 w-full text-center md:text-left">
      <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm mb-3">
        <StarIcon className="h-4 w-4" />
        Top Seller
      </span>
      <h3 className="text-4xl font-extrabold text-slate-800">{product.name}</h3>
      <p className="text-lg text-slate-600 mt-4">{product.description}</p>
      <p className="text-5xl font-light text-slate-700 mt-4">${product.price.toFixed(2)}</p>
      <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
        <button
          onClick={() => onProductSelect(product)}
          className="bg-white text-slate-700 hover:bg-slate-100 font-bold py-3 px-6 rounded-lg transition-colors border border-slate-300"
        >
          View Details
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const ProductList: React.FC<ProductListProps> = ({ products, topSaleProduct, onProductSelect, onAddToCart, searchTerm }) => {
  const otherProducts = products.filter(p => !p.isTopSale);
  return (
    <div>
      {topSaleProduct && !searchTerm && (
        <TopSaleCard product={topSaleProduct} onProductSelect={onProductSelect} onAddToCart={onAddToCart} />
      )}
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-700">
        {searchTerm ? `Results for "${searchTerm}"` : "Our Sustainable Products"}
      </h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductSelect={onProductSelect}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4">
          <p className="text-xl font-semibold text-slate-600">No products found for "{searchTerm}"</p>
          <p className="text-slate-500 mt-2">Try checking your spelling or using a different term.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
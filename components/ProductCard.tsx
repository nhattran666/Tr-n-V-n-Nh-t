
import React from 'react';
import { Product } from '../types';
import { LeafIcon, ShoppingCartIcon } from './Icons';

interface ProductCardProps {
  product: Product;
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductSelect, onAddToCart }) => {
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => onProductSelect(product)}
    >
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <LeafIcon className="h-5 w-5" />
          <span>{product.carbonFootprint.total} kg CO₂e</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-3xl font-light mb-4">${product.price.toFixed(2)}</p>
        <p className="text-slate-500 flex-grow mb-4">{product.description.substring(0, 80)}...</p>
        <div className="mt-auto flex items-center gap-2">
           <button 
            onClick={(e) => {e.stopPropagation(); onProductSelect(product)}}
            className="w-full bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold py-3 px-4 rounded-md transition-colors"
          >
            View Details
          </button>
          <button 
            onClick={handleAddToCartClick}
            className="bg-green-600 text-white hover:bg-green-700 font-bold p-3 rounded-md transition-colors"
          >
            <ShoppingCartIcon className="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

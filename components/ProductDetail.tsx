import React from 'react';
import { Product } from '../types';
import { ArrowLeftIcon, LeafIcon } from './Icons';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

// New Pie Chart Component
interface CarbonPieChartProps {
  breakdown: {
    manufacturing: number;
    transport: number;
    packaging: number;
    endOfLife: number;
  };
  total: number;
}

const CarbonPieChart: React.FC<CarbonPieChartProps> = ({ breakdown, total }) => {
  if (total === 0) {
    return <p className="text-slate-500">No carbon footprint data available.</p>;
  }
  
  const data = [
    { label: 'Manufacturing', value: breakdown.manufacturing, color: '#22c55e' }, // green-500
    { label: 'Transport', value: breakdown.transport, color: '#4ade80' },     // green-400
    { label: 'Packaging', value: breakdown.packaging, color: '#86efac' },     // green-300
    { label: 'End of Life', value: breakdown.endOfLife, color: '#bbf7d0' },   // green-200
  ];

  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  let cumulativePercent = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
      <div className="w-32 h-32 flex-shrink-0">
        <svg viewBox="-1 -1 2 2" style={{ transform: 'rotate(-90deg)' }}>
          {data.map((slice, index) => {
            if (slice.value <= 0) return null;
            const slicePercent = slice.value / total;
            const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
            cumulativePercent += slicePercent;
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
            const largeArcFlag = slicePercent > 0.5 ? 1 : 0;
            const pathData = [
              `M ${startX} ${startY}`,
              `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              `L 0 0`,
            ].join(' ');

            return <path key={index} d={pathData} fill={slice.color} />;
          })}
        </svg>
      </div>
      <div className="w-full">
        <ul>
          {data.map((item, index) => (
            <li key={index} className="flex items-center mb-1.5">
              <span className="h-4 w-4 rounded-sm mr-3" style={{ backgroundColor: item.color }}></span>
              <span className="text-sm text-slate-600 capitalize">{item.label}</span>
              <span className="ml-auto text-sm font-medium text-slate-700">{item.value} kg</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  const { total, breakdown } = product.carbonFootprint;
  return (
    <div className="animate-fade-in">
       <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-semibold mb-6">
         <ArrowLeftIcon className="h-5 w-5" />
         Back to Products
       </button>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105" 
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-4">{product.name}</h2>
            <p className="text-slate-600 text-4xl font-light mb-6">${product.price.toFixed(2)}</p>
            <p className="text-slate-500 mb-8">{product.description}</p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
              <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                <LeafIcon className="h-6 w-6" />
                Carbon Footprint Certification
              </h4>
              <p className="text-green-700 mb-2">Total impact: <span className="font-bold text-xl">{total} kg CO₂e</span></p>
              
              <CarbonPieChart breakdown={breakdown} total={total} />

            </div>

            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-6 rounded-lg text-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
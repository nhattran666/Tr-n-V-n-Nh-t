
import React from 'react';
import { CartItem } from '../types';
import { TrashIcon } from './Icons';

interface CartViewProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const CartView: React.FC<CartViewProps> = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalCarbonFootprint = cartItems.reduce((sum, item) => sum + item.product.carbonFootprint.total * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-slate-700">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-12 rounded-lg shadow border">
          <p className="text-slate-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow border">
            <ul className="divide-y divide-slate-200">
              {cartItems.map(item => (
                <li key={item.product.id} className="py-4 flex items-center gap-4">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-slate-800">{item.product.name}</h3>
                    <p className="text-slate-500">${item.product.price.toFixed(2)}</p>
                    <p className="text-xs text-green-600">{item.product.carbonFootprint.total} kg CO₂e each</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value, 10))}
                      className="w-16 text-center border border-slate-300 rounded-md p-1.5"
                    />
                    <button onClick={() => onRemoveFromCart(item.product.id)} className="text-slate-400 hover:text-red-500 p-2">
                       <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-lg shadow border sticky top-24">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Subtotal</span>
                        <span className="font-medium">${totalPrice.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-slate-500">Total Carbon Footprint</span>
                        <span className="font-medium text-green-600">{totalCarbonFootprint.toFixed(2)} kg CO₂e</span>
                    </div>
                </div>
                 <div className="border-t my-4"></div>
                 <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 text-white font-bold py-3 mt-6 rounded-lg hover:bg-green-700 transition-colors">
                    Proceed to Checkout
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;

import React, { useState, useCallback } from 'react';
import { Product, CartItem, Page } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartView from './components/CartView';
import EcoHub from './components/Conference'; // Renamed component, file stays the same for now

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleProductSelect = useCallback((product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  }, []);

  const handleAddToCart = useCallback((productToAdd: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product: productToAdd, quantity: 1 }];
    });
  }, []);

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  }, []);
  
  const handleUpdateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prevCart) => prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  }, [handleRemoveFromCart]);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const topSaleProduct = PRODUCTS.find(p => p.isTopSale);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <ProductList
            products={filteredProducts}
            topSaleProduct={topSaleProduct}
            onProductSelect={handleProductSelect}
            onAddToCart={handleAddToCart}
            searchTerm={searchTerm}
          />
        );
      case 'product':
        if (selectedProduct) {
          return (
            <ProductDetail
              product={selectedProduct}
              onAddToCart={handleAddToCart}
              onBack={() => {
                setCurrentPage('home');
                setSelectedProduct(null);
              }}
            />
          );
        }
        return null;
      case 'cart':
        return <CartView cartItems={cart} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />;
      case 'ecohub':
        return <EcoHub />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        isSearchVisible={currentPage === 'home'}
      />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="bg-slate-800 text-white text-center p-4 mt-8">
        <p>&copy; 2024 Eco-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
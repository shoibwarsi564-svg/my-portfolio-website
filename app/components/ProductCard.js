'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card card-hover fade-in">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.rating >= 4.8 && (
          <div className="absolute top-2 right-2 badge-primary">⭐ Top Rated</div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">⭐ {product.rating}</span>
          <span className="text-gray-500 text-sm">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded font-semibold transition ${
            added
              ? 'bg-green-500 text-white'
              : 'bg-primary text-white hover:bg-pink-700'
          }`}
        >
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
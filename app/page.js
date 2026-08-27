'use client';

import Link from 'next/link';
import { useState } from 'react';
import { products, categories, occasions } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchOccasion = selectedOccasion === 'all' || product.occasion === selectedOccasion;
    return matchCategory && matchOccasion;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Perfect Gifts for Every Occasion</h1>
          <p className="text-xl mb-8">Beautifully curated gift hampers delivered with love</p>
          <Link href="#products" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery available in select areas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked products of the highest quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Special Occasions</h3>
              <p className="text-gray-600">Perfect hampers for every celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>

          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Occasions Filter */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            <span className="self-center font-semibold text-gray-600">By Occasion:</span>
            {occasions.map((occasion) => (
              <button
                key={occasion.id}
                onClick={() => setSelectedOccasion(occasion.id)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                  selectedOccasion === occasion.id
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {occasion.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">No products found. Try different filters!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get exclusive offers and updates on new hampers</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none"
            />
            <button className="btn-primary bg-white text-primary hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
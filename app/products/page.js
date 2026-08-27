'use client';

import { useState } from 'react';
import { products, categories, occasions } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  let filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchOccasion = selectedOccasion === 'all' || product.occasion === selectedOccasion;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchOccasion && matchSearch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Gift Hampers</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search hampers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Category Filter */}
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-2"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div>
            <h3 className="font-bold mb-3">Occasions</h3>
            <div className="space-y-2">
              {occasions.map((occasion) => (
                <label key={occasion.id} className="flex items-center">
                  <input
                    type="radio"
                    name="occasion"
                    value={occasion.id}
                    checked={selectedOccasion === occasion.id}
                    onChange={(e) => setSelectedOccasion(e.target.value)}
                    className="mr-2"
                  />
                  {occasion.name}
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-bold mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-primary"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
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
    </div>
  );
}
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some beautiful hampers to get started!</p>
          <Link href="/" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow mb-4 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">₹{item.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary mb-4">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₹50</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (5%)</span>
                <span>₹{(getTotalPrice() * 0.05).toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">
                  ₹{(getTotalPrice() + 50 + getTotalPrice() * 0.05).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full btn-primary mb-3">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full btn-outline text-primary border-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
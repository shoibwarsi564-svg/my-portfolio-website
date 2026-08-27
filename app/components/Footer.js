export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🎁 GiftHamper</h3>
            <p className="text-gray-400">Your trusted source for perfect gift hampers for every occasion.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GiftHamper. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for gift lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
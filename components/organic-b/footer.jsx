export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-emerald-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Organic</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Premium organic products for your healthy lifestyle. Sourced directly from nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-green-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3 text-green-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-white uppercase text-sm tracking-wider">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
              >
                𝕏
              </a>
             
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-600/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left text-green-100 text-sm">
            <p>&copy; 2025 Organic Products. All rights reserved.</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

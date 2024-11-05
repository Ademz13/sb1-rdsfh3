import { Wine, Star, Timer, Battery, ShoppingCart } from 'lucide-react';
import { Button } from './components/Button';
import { ProductFeature } from './components/ProductFeature';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wine className="h-8 w-8 text-amber-900" />
              <span className="text-xl font-serif text-amber-900">Vinolux</span>
            </div>
            <Button variant="primary">
              Shop Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-amber-900 mb-6 leading-tight">
                Elevate Your Wine Experience
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the perfect blend of luxury and convenience with our premium Automatic Electric Bottle Opener & Wine Aerator.
              </p>
              <div className="flex space-x-4">
                <Button variant="primary" className="flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart - $79.99</span>
                </Button>
                <Button variant="secondary">Learn More</Button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <p className="text-gray-600">500+ 5-Star Reviews</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Electric Wine Opener"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <ProductFeature
              title="One-Touch Operation"
              description="Effortlessly open any wine bottle with a single touch, perfect for entertaining guests."
            />
            <ProductFeature
              title="Built-in Aerator"
              description="Enhance your wine's bouquet and flavor profile with our precision-engineered aerator."
            />
            <ProductFeature
              title="Premium Design"
              description="Crafted from high-quality materials with a luxurious finish that complements any decor."
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-900 mb-6">Designed for Wine Enthusiasts</h2>
            <p className="text-xl text-gray-600">Experience the perfect pour every time with advanced features designed for wine lovers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Timer className="w-8 h-8 text-amber-900" />,
                title: "Opens in Seconds",
                description: "Quick and efficient operation"
              },
              {
                icon: <Battery className="w-8 h-8 text-amber-900" />,
                title: "Long Battery Life",
                description: "Up to 30 bottles per charge"
              },
              {
                icon: <Wine className="w-8 h-8 text-amber-900" />,
                title: "Universal Fit",
                description: "Works with all standard bottles"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-serif text-amber-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-amber-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Enhance Your Wine Experience Today
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of wine enthusiasts who have elevated their wine experience with our premium opener.
            </p>
            <Button variant="secondary" className="bg-white text-amber-900 hover:bg-amber-50">
              Shop Now - $79.99
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wine className="h-6 w-6 text-amber-900" />
              <span className="text-lg font-serif text-amber-900">Vinolux</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-amber-900 hover:text-amber-800 transition">Terms</a>
              <a href="#" className="text-amber-900 hover:text-amber-800 transition">Privacy</a>
              <a href="#" className="text-amber-900 hover:text-amber-800 transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-amber-900/60">
            © {new Date().getFullYear()} Vinolux. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
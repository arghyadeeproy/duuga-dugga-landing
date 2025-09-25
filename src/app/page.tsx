'use client';

import { useState, ReactElement } from 'react';
import { Download, MapPin, Navigation, UtensilsCrossed, Truck, Cross, Menu, X, Star, Users, Clock, Shield, Linkedin } from 'lucide-react';

// Download link constant - replace with your actual download link
const DOWNLOAD_LINK = "https://github.com/arghyadeeproy/duuga-dugga-landing/releases/download/v.1.0.0/Dugga.Dugga.App.-.Arghyadeep.Roy.apk";
const LINKEDIN_LINK = "https://www.linkedin.com/in/arghyadeep-roy-5b8a07221/";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

interface Screenshot {
  id: number;
  alt: string;
  src: string;
}

interface Stat {
  number: string;
  label: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Screenshot | null>(null);

  const features: Feature[] = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Nearby Pandals",
      description: "Discover all Durga Puja pandals around you with real-time locations and detailed information"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Metro Route Guide",
      description: "Find pandals along metro routes for easy and convenient transportation planning"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Food Spots",
      description: "Locate delicious food options near pandals - from street food to restaurants"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transportation",
      description: "Get information about buses, autos, and other transport options nearby"
    },
    {
      icon: <Cross className="w-8 h-8" />,
      title: "Medical Shops",
      description: "Find nearby pharmacies and medical stores for any emergency needs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Puja Guidance",
      description: "Get guided assistance for visiting Puja Pandels and map help"
    }
  ];

  const screenshots: Screenshot[] = [
    { id: 1, alt: "Home Screen", src: "/SS1.jpeg" },
    { id: 2, alt: "Metro Options", src: "/SS2.jpeg" },
    { id: 3, alt: "Station Details", src: "/SS3.jpeg" },
    { id: 4, alt: "Pandels List", src: "/SS4.jpeg" }
  ];

  const stats: Stat[] = [
    { number: "115+", label: "Pandals Mapped" },
    { number: "Beta", label: "Version Status" },
    { number: "🚀", label: "Coming Soon" },
    { number: "24/7", label: "Support" }
  ];

  const openModal = (screenshot: Screenshot) => {
    setModalImage(screenshot);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f6ed' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10">
                <img src="/logo.png" alt="Dugga Dugga Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Dugga Dugga
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-700 hover:text-orange-600 transition-colors">Screenshots</a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>Connect</span>
              </a>
              <a href={DOWNLOAD_LINK} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                Download Now
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-orange-600">Features</a>
              <a href="#screenshots" className="block text-gray-700 hover:text-orange-600">Screenshots</a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600">
                <Linkedin className="w-4 h-4" />
                <span>Connect with Developer</span>
              </a>
              <a href={DOWNLOAD_LINK} className="block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-center">
                Download Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Ultimate
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Durga Puja Companion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Navigate and celebrate Durga Puja like never before. Find nearby pandals, 
              get guided puja assistance, locate food spots, and explore everything you need for 
              a perfect festive experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={DOWNLOAD_LINK} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg">
                <Download className="w-5 h-5" />
                <span>Download Free</span>
              </a>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span>🚀</span>
                  <span>Beta Version</span>
                </span>
              </div>
            </div>
            
            {/* Developer Contact in Hero */}
            <div className="flex justify-center">
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 hover:bg-white hover:border-orange-300 transition-all transform hover:scale-105 shadow-lg">
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Made by Arghyadeep Roy</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10">🪔</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10">🌺</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10">🕉️</div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for Durga Puja
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dugga Dugga brings together all essential features to make your Durga Puja celebration 
              seamless and memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: Feature, index: number) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              See Dugga Dugga in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a glimpse at our beautiful and intuitive interface designed for the best user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot: Screenshot) => (
              <div key={screenshot.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div 
                  className="aspect-[9/16] bg-gradient-to-br from-orange-100 to-red-100 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openModal(screenshot)}
                >
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackDiv = target.nextElementSibling as HTMLDivElement;
                      if (fallbackDiv) {
                        fallbackDiv.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full hidden items-center justify-center text-center">
                    <div>
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm text-gray-600">{screenshot.alt}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">{screenshot.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-300 transition-colors z-60"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallbackDiv = target.nextElementSibling as HTMLDivElement;
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-96 hidden items-center justify-center text-center bg-gradient-to-br from-orange-100 to-red-100 rounded">
                <div>
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-lg text-gray-600">{modalImage.alt}</div>
                  <div className="text-sm text-gray-500 mt-2">Screenshot Preview</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{modalImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Durga Puja Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the beta testing and help us create the perfect Durga Puja companion app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={DOWNLOAD_LINK} className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center space-x-2 shadow-lg">
              <Download className="w-5 h-5" />
              <span>Download Now - It&apos;s Free!</span>
            </a>
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105 flex items-center space-x-2 border border-white/20">
              <Linkedin className="w-5 h-5" />
              <span>Connect with Developer</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Instant Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10">
                <img src="/logo.png" alt="Dugga Dugga Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold">Dugga Dugga</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making Durga Puja celebrations more accessible and enjoyable for everyone.
            </p>
          </div>
          
          {/* Developer Section */}
          <div className="text-center mb-8">
            <div className="bg-gray-700/50 rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Connect with the Developer</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Have questions, feedback, or want to collaborate? Let&apos;s connect!
              </p>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Arghyadeep Roy</span>
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-8">
            <div className="text-gray-500 text-sm">
              © 2024 Dugga Dugga. All rights reserved. | Made with ❤️ for Durga Puja celebrations
            </div>
            <div className="text-gray-400 text-xs mt-2">
              Developed by <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">Arghyadeep Roy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
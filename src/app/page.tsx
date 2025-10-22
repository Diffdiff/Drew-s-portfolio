import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Drew&apos;s Creative World
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring life through photography, travel, design, cooking, and creative projects.
            This is my digital home base where I share my passions and adventures.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Photography */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Photography</h3>
              <p className="text-gray-600">
                Capturing moments and memories through the lens. Explore my collection of travel, portrait, and landscape photography.
              </p>
            </div>
          </div>

          {/* Travel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Travel</h3>
              <p className="text-gray-600">
                Adventures around the world. Stories, tips, and beautiful destinations from my travels.
              </p>
            </div>
          </div>

          {/* Website Design */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-red-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Design</h3>
              <p className="text-gray-600">
                Digital experiences that delight. Check out my portfolio of web design and development projects.
              </p>
            </div>
          </div>

          {/* Cooking */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cooking</h3>
              <p className="text-gray-600">
                Culinary adventures and favorite recipes. Food photography and cooking experiments from my kitchen.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Projects</h3>
              <p className="text-gray-600">
                Various creative endeavors and side projects. From art to technology, explore my diverse interests.
              </p>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Drew</h3>
              <p className="text-gray-600">
                Get to know me better. My story, interests, and what drives my creative passions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
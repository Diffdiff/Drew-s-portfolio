export default function Photography() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Photography</h1>
        <p className="text-xl text-gray-600 mb-12">
          Welcome to my photography portfolio. Here you'll find my favorite shots from travels, portraits, and artistic explorations.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for photo grid */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Photo {i}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Sample Photo {i}</h3>
                <p className="text-gray-600 text-sm">Location and description</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
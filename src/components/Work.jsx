function Works() {
    return (
      <section id="works" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-8">My Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                <div className="h-40 bg-gray-200 rounded mb-4" />
                <h4 className="text-xl font-bold text-gray-800">Project {i}</h4>
                <p className="text-gray-600 mt-2">Short description about the project.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Works
  
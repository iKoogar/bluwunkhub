const Gallery = () => (
    <section className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-800 aspect-square rounded shadow-lg flex items-center justify-center">
          <span>Fanart #{i + 1}</span>
        </div>
      ))}
    </section>
  )
  
  export default Gallery
  
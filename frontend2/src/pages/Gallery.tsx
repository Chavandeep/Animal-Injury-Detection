
import React from 'react';
import { Image, Filter, Search, Sparkles } from 'lucide-react';

const Gallery = () => {
  // Mock data for gallery items
  const galleryItems = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1583608354133-a59b0d125fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Tiger',
      status: 'healthy',
      date: '2023-08-15',
      location: 'Sundarbans National Park',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Elephant',
      status: 'injured',
      date: '2023-07-22',
      location: 'Serengeti',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Giraffe',
      status: 'healthy',
      date: '2023-09-05',
      location: 'Maasai Mara',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Orangutan',
      status: 'injured',
      date: '2023-06-18',
      location: 'Borneo',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Rhino',
      status: 'healthy',
      date: '2023-08-30',
      location: 'Kruger National Park',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Lion',
      status: 'healthy',
      date: '2023-09-12',
      location: 'Amboseli National Park',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Koala',
      status: 'injured',
      date: '2023-07-05',
      location: 'Great Otway National Park',
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      animal: 'Leopard',
      status: 'healthy',
      date: '2023-08-19',
      location: 'Yala National Park',
    },
  ];

  return (
    <div className="min-h-screen w-full pt-16 pb-24">
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <Image className="w-4 h-4 mr-1" />
              <span>Case Library</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Analysis Gallery</h1>
            <p className="text-muted-foreground">
              Browse through our collection of previously analyzed wildlife images.
              Learn from real cases to better understand animal health indicators.
            </p>
          </div>
          
          {/* Search and filter bar */}
          <div className="bg-white p-4 rounded-xl shadow-md border border-jungle-canopy/10 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search by animal, location..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-muted hover:bg-jungle-moss/5 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              
              <select className="px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20">
                <option>All Statuses</option>
                <option>Healthy</option>
                <option>Injured</option>
              </select>
              
              <select className="px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20">
                <option>Latest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-jungle-canopy/10 hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.animal} 
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${item.status === 'healthy' ? 'bg-jungle-moss/90 text-white' : 'bg-amber-500/90 text-white'}`}>
                      {item.status === 'healthy' ? (
                        <>
                          <Sparkles className="w-3 h-3 mr-1" />
                          Healthy
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mr-1">
                            <path d="M18 6L6 18M6 6l12 12"></path>
                          </svg>
                          Injured
                        </>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.animal}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <button className="text-xs text-jungle-canopy font-medium hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-muted text-muted-foreground hover:bg-jungle-moss/5 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              
              {[1, 2, 3].map((page) => (
                <button 
                  key={page}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg ${page === 1 ? 'bg-jungle-canopy text-white' : 'border border-muted hover:bg-jungle-moss/5 transition-colors'}`}
                >
                  {page}
                </button>
              ))}
              
              <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-muted text-muted-foreground hover:bg-jungle-moss/5 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

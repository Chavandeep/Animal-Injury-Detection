
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Mail, ArrowRight, Coffee, BookOpen, Code, Heart, Github, Sparkles } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Emma Chen",
      role: "Wildlife Biologist",
      bio: "With over 15 years of experience studying animal behavior and health in the field, Dr. Chen leads our research initiatives.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Okonjo",
      role: "AI Engineer",
      bio: "Michael specializes in computer vision and machine learning, developing our core algorithms for animal health detection.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Aisha Patel",
      role: "Conservation Specialist",
      bio: "Aisha works directly with our conservation partners to implement our technology in wildlife protection programs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Carlos Martinez",
      role: "Product Lead",
      bio: "Carlos oversees product development, ensuring our tools are accessible and effective for users across the globe.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <div className="min-h-screen w-full pt-16 pb-24">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-jungle-canopy/10 to-transparent">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <Info className="w-4 h-4 mr-1" />
              <span>About Us</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Our Story & Mission
            </h1>
            
            <p className="text-lg text-muted-foreground">
              JungleGuardian was founded on the belief that technology can play a vital role in wildlife conservation. 
              Learn about our journey, the team behind our platform, and our vision for the future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-sunlight/20 text-jungle-canopy text-sm font-medium">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>Our Beginning</span>
                </div>
                
                <h2 className="text-3xl font-bold">The JungleGuardian Journey</h2>
                
                <p className="text-muted-foreground">
                  JungleGuardian began in 2019 when a team of wildlife biologists and AI engineers came together with a shared concern: as wildlife habitats faced increasing threats, monitoring animal health at scale became increasingly difficult.
                </p>
                
                <p className="text-muted-foreground">
                  What started as a research project quickly evolved into a mission to create accessible tools that could help conservationists, researchers, and wildlife enthusiasts assess animal health through image analysis.
                </p>
                
                <p className="text-muted-foreground">
                  Today, JungleGuardian is used by conservation organizations in over 20 countries, helping to monitor endangered species and detect health issues before they become critical.
                </p>
                
                <div className="pt-4">
                  <Link 
                    to="/conservation" 
                    className="inline-flex items-center text-jungle-canopy font-medium hover:underline"
                  >
                    Learn about our conservation initiatives
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-jungle-leaf/10 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-jungle-moss/10 rounded-full z-0"></div>
                
                <div className="rounded-2xl overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                    alt="Conservation researcher with tablet" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 px-4 bg-jungle-canopy/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Our Team</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
            
            <p className="text-muted-foreground">
              JungleGuardian brings together experts from wildlife biology, AI engineering, conservation, and product development. Together, we're creating tools that make a real difference in wildlife protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-jungle-canopy/10 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-jungle-canopy text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Technology */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-sunlight/20 text-jungle-canopy text-sm font-medium">
                  <Code className="w-4 h-4 mr-1" />
                  <span>Our Technology</span>
                </div>
                
                <h2 className="text-3xl font-bold">How It Works</h2>
                
                <p className="text-muted-foreground">
                  JungleGuardian uses state-of-the-art machine learning algorithms trained on thousands of wildlife images with verified health assessments from veterinarians and wildlife experts.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Computer Vision",
                      description: "Our AI identifies visual markers in images that correlate with health conditions"
                    },
                    {
                      title: "Deep Learning",
                      description: "Neural networks trained on extensive datasets recognize subtle health indicators"
                    },
                    {
                      title: "Multi-Species Support",
                      description: "Specialized models for different animal groups improve accuracy"
                    },
                    {
                      title: "Continuous Learning",
                      description: "Our system improves with each new verified image analysis"
                    }
                  ].map((tech, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-jungle-canopy/10 shadow-sm">
                      <h3 className="font-bold mb-2">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/predict" 
                    className="inline-flex items-center text-jungle-canopy font-medium hover:underline"
                  >
                    Try our technology
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-jungle-canopy/10 overflow-hidden">
                <div className="bg-jungle-canopy px-6 py-4 text-white font-medium">
                  <Sparkles className="inline-block w-4 h-4 mr-1" />
                  <span>Technology in Action</span>
                </div>
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black mb-4">
                    {/* Placeholder for video */}
                    <div className="flex items-center justify-center h-full bg-jungle-night/80 text-white">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                        <p>Watch our AI in action</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">See How We Detect Health Issues</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    This demonstration shows how our AI identifies visual indicators of health or injury in different species.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-jungle-canopy/10">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Duration:</span> 3:45
                      </div>
                      <button className="text-sm font-medium text-jungle-canopy hover:underline">
                        Download Research Paper
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-b from-jungle-canopy/5 to-transparent">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-jungle-canopy/10 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-jungle-canopy to-jungle-leaf text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                  
                  <p className="mb-8 opacity-90">
                    Whether you're interested in using our technology, partnering with us, or learning more about our conservation efforts, we'd love to hear from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Email Us</h4>
                        <p className="opacity-90">info@jungleguardian.org</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-0.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Headquarters</h4>
                        <p className="opacity-90">123 Wildlife Way<br />San Francisco, CA 94107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 mt-0.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Call Us</h4>
                        <p className="opacity-90">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex space-x-4">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20 focus:border-transparent"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-jungle-canopy/20 focus:border-transparent"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-jungle-canopy text-white font-medium hover:bg-jungle-canopy/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground flex items-center justify-center flex-wrap gap-1">
                <Coffee className="w-4 h-4 mx-1" />
                <span>Made with</span>  
                <Heart className="w-4 h-4 mx-1 text-jungle-leaf" /> 
                <span>for wildlife by the JungleGuardian team</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';

const Hero = () => {
  const leafRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    // Randomly animate leaves with slight delay
    leafRefs.current.forEach((leaf, index) => {
      if (leaf) {
        leaf.style.animationDelay = `${index * 0.2}s`;
      }
    });
  }, []);
  
  // Create floating leaves elements
  const renderFloatingLeaves = () => {
    const leaves = [];
    for (let i = 0; i < 5; i++) {
      leaves.push(
        <div 
          key={i}
          ref={el => leafRefs.current[i] = el}
          className={`absolute animate-leaf-sway opacity-40`}
          style={{
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
          <Leaf className="text-jungle-leaf w-8 h-8" />
        </div>
      );
    }
    return leaves;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-transparent to-jungle-moss/10 py-32 md:py-40">
      {/* Floating leaves */}
      {renderFloatingLeaves()}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-2 animate-float-up" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 mr-1" />
            <span>AI-powered wildlife health analysis</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-jungle-canopy via-jungle-canopy to-jungle-leaf animate-float-up" style={{ animationDelay: '0.4s' }}>
            Protect Wildlife <br />
            with AI Vision
          </h1>
          
          <p className="text-lg text-muted-foreground animate-float-up" style={{ animationDelay: '0.6s' }}>
            Upload images of animals to instantly assess their health condition. 
            Join our mission to monitor and protect wildlife in their natural habitats.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-float-up" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/predict" 
              className="px-6 py-3 rounded-full bg-jungle-canopy text-white font-medium flex items-center gap-2 shadow-lg shadow-jungle-canopy/20 hover:shadow-xl hover:shadow-jungle-canopy/30 transition-all hover:translate-y-[-2px]"
            >
              Start Analyzing 
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              to="/about" 
              className="px-6 py-3 rounded-full border border-jungle-canopy/20 text-jungle-canopy bg-white/50 backdrop-blur-sm font-medium hover:bg-white/80 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="white" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,58.7C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

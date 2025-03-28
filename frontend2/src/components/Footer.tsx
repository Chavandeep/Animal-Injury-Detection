
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-jungle-canopy/5 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-jungle-leaf rounded-full"></div>
                <Leaf className="absolute inset-0 m-auto text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-jungle-canopy to-jungle-moss">
                JungleGuardian
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Using AI to protect and preserve wildlife health and habitats across the globe.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Home</Link></li>
              <li><Link to="/predict" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Predict</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Gallery</Link></li>
              <li><Link to="/conservation" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Conservation</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-jungle-canopy transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-jungle-canopy transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on wildlife conservation.
            </p>
          </div>
        </div>
        
        <div className="border-t border-jungle-canopy/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} JungleGuardian. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-jungle-leaf" /> for wildlife
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

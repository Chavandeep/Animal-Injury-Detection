import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, Camera, Sparkles, Award, Activity, Leaf, BookOpen } from 'lucide-react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setPrediction(null); // Reset prediction when a new image is uploaded
    }
  };

  const handlePrediction = async () => {
    if (!selectedImage) return;
    
    setLoading(true);
    
    // Mock prediction logic (replace this with actual API call)
    setTimeout(() => {
      setPrediction("Healthy"); // Replace with real prediction result
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-1" />
              <span>Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How JungleGuardian Works</h2>
            <p className="text-muted-foreground">
              Our advanced AI algorithms analyze images to detect signs of injury or illness in wildlife, helping conservationists and researchers take timely action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Camera className="w-6 h-6 text-jungle-canopy" />,
                title: "Image Analysis",
                description: "Upload clear photos of wildlife and let our AI analyze their physical condition in seconds."
              },
              {
                icon: <Activity className="w-6 h-6 text-jungle-canopy" />,
                title: "Health Assessment",
                description: "Get immediate insights on whether an animal appears healthy or shows signs of injury or illness."
              },
              {
                icon: <Award className="w-6 h-6 text-jungle-canopy" />,
                title: "Detailed Reports",
                description: "Receive comprehensive analysis reports with confidence scores and specific observations."
              }
            ].map((feature, index) => (
              <div key={index} className="jungle-card hover:shadow-xl transition-shadow">
                <div className="jungle-card-inner">
                  <div className="w-14 h-14 rounded-xl bg-jungle-leaf/10 flex items-center justify-center mb-5 -mt-2 -ml-2 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Upload & Prediction Section */}
      <section className="py-20 px-4 bg-jungle-canopy/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-muted-foreground mb-6">Upload an image of an animal and get an instant health prediction.</p>

          <div className="flex flex-col items-center space-y-4">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden" 
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="cursor-pointer px-6 py-3 rounded-lg bg-jungle-canopy text-white font-medium shadow-lg hover:shadow-xl transition-all">
              Upload Image
            </label>

            {selectedImage && (
              <div className="mt-4">
                <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="w-48 h-48 object-cover rounded-lg shadow-md" />
                <button 
                  onClick={handlePrediction} 
                  className="mt-4 px-6 py-3 rounded-lg bg-jungle-canopy text-white font-medium shadow-lg hover:shadow-xl transition-all"
                  disabled={loading}
                >
                  {loading ? "Analyzing..." : "Get Prediction"}
                </button>
              </div>
            )}

            {prediction && (
              <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold">Prediction:</h3>
                <p className="text-lg text-jungle-canopy font-medium">{prediction}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jungle-canopy to-jungle-leaf opacity-10 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-jungle-canopy/10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-sunlight/20 text-jungle-canopy text-sm font-medium mb-4">
                <Leaf className="w-4 h-4 mr-1" />
                <span>Join The Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Analyze Wildlife Health?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start using our AI-powered platform to assess animal health conditions and contribute to global wildlife conservation efforts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/predict" 
                className="px-6 py-3 rounded-lg bg-jungle-canopy text-white font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Start Analyzing Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to="/conservation" 
                className="px-6 py-3 rounded-lg border border-jungle-canopy/20 text-jungle-canopy bg-white font-medium flex items-center justify-center gap-2 hover:bg-jungle-canopy/5 transition-all"
              >
                Learn About Conservation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

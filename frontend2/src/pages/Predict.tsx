
import React, { useState } from 'react';
import { Sparkles, Info, AlertTriangle, Camera, Upload } from 'lucide-react';
import { toast } from "sonner";
import ImageUploader from '../components/ImageUploader';
import PredictionResult from '../components/PredictionResult';
import { useIsMobile } from '@/hooks/use-mobile';
import { predictAnimalHealth } from '@/lib/model';

const Predict = () => {
  const isMobile = useIsMobile();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{
    status: 'healthy' | 'injured' | null;
    confidence: number;
    details?: string;
  }>({
    status: null,
    confidence: 0,
  });

  const handleImageSelect = async (file: File) => {
    setSelectedImage(file);
    // Start processing
    setIsProcessing(true);
    
    try {
      // Call the prediction function with the selected image
      const prediction = await predictAnimalHealth(file);
      
      // Update the result state with the prediction
      setResult({
        status: prediction.status as 'healthy' | 'injured',
        confidence: prediction.confidence,
        details: prediction.details
      });
      
      toast.success(
        prediction.status === 'healthy' 
          ? 'Animal appears to be healthy!' 
          : 'Potential injury detected. Please review the analysis.'
      );
    } catch (error) {
      console.error('Prediction error:', error);
      toast.error('An error occurred during image analysis. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen w-full pt-16 pb-24">
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-jungle-moss/20 text-jungle-canopy text-sm font-medium mb-4">
              <Camera className="w-4 h-4 mr-1" />
              <span>Health Analysis</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Analyze Wildlife Health</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Upload an image of an animal to assess its health condition using our advanced AI. 
              Get instant results to help identify potential injuries or health issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ImageUploader 
                onImageSelect={handleImageSelect} 
                isProcessing={isProcessing} 
              />
              
              {result.status && !isProcessing && (
                <div className="mt-8 animate-float-up">
                  <PredictionResult 
                    result ={result} 
                    isLoading={isProcessing} 
                  />
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="bg-white rounded-xl border border-jungle-canopy/10 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-jungle-canopy to-jungle-leaf p-4">
                  <h3 className="text-white font-medium text-lg flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Tips for Best Results
                  </h3>
                </div>
                <div className="p-4 md:p-6">
                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Use clear, well-lit images of the animal",
                      "Try to capture the entire body when possible",
                      "Avoid blurry or heavily obstructed views",
                      "Include context of the animal's environment if relevant",
                      "Multiple angles can help provide better assessment"
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <Sparkles className="w-5 h-5 text-jungle-canopy mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 p-3 md:p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 mb-1 text-sm md:text-base">Important Note</h4>
                      <p className="text-xs md:text-sm text-amber-700">
                        This tool provides an assessment based on visual analysis only and should not replace proper veterinary care. If you encounter an injured animal, please contact local wildlife authorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Predict;

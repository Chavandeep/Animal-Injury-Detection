import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Update if needed

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data; // Returns { imageUrl: string, prediction: string }
  } catch (error) {
    console.error("Error uploading image:", error);
    return { error: "Failed to process the image" };
  }
};

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const predictAnimalHealth = async (file: File) => {
  // Your AI/ML prediction logic here
  return {
    status: "healthy", // or "injured"
    confidence: 0.95, // Example confidence score
    details: "No visible injuries detected."
  };
};

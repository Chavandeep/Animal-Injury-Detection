export const isValidImage = (file: File): boolean => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  return allowedTypes.includes(file.type);
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

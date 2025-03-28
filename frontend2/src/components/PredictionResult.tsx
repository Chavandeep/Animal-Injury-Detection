import React from "react";

interface PredictionResultProps {
  result: string | null;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="mt-4 p-4 border rounded-md">
        <h2 className="text-xl font-bold">Prediction Result</h2>
        <p className="text-gray-500">No result available yet.</p>
      </div>
    );
  }

  // If result is a string, try to parse it as JSON
  let parsedResult;
  try {
    parsedResult = typeof result === "string" ? JSON.parse(result) : result;
  } catch {
    parsedResult = { status: result }; // Fallback if it's not JSON
  }

  return (
    <div className="mt-4 p-4 border rounded-md">
      <h2 className="text-xl font-bold">Prediction Result</h2>
      <p className="text-lg">Status: <strong>{parsedResult.status}</strong></p>
      <p className="text-lg">Confidence: <strong>{(parsedResult.confidence * 100).toFixed(2)}%</strong></p>
      <p className="text-lg">Details: <strong>{parsedResult.details}</strong></p>
    </div>
  );
};

export default PredictionResult;

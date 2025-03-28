export const predictInjury = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        body: formData
    });

    return response.json();
};

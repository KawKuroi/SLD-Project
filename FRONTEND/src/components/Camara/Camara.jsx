import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function CameraPrediction() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel('../../pages/code/modelo/model.json');
      setModel(loadedModel);
    };

    loadModel();
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      videoRef.current.srcObject = stream;
      processVideo();
      predictLetter();
    };

    if (videoRef.current) {
      startCamera();
    }
  }, [videoRef]);

  const processVideo = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

    // Capture canvas as Data URI
    const dataURL = canvasRef.current.toDataURL();

    // Extract pixel data from Data URI
    const imageData = extractImageDataFromDataURL(dataURL); // Replace with imageData extraction function
    const data = imageData.data;

    // Resize data to 28x28 and create tensor
    const resizedData = tf.image.resizeBilinear(image, [28, 28]).dataSync();
    const tensor = tf.tensor4d([resizedData], [1, 28, 28, 1]);

    // RequestAnimationFrame for smooth processing
    requestAnimationFrame(processVideo);
  };

  // Function to extract image data from Data URI (replace with your implementation)
  function extractImageDataFromDataURL(dataURL) {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      return ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
    image.src = dataURL;
  }

  const predictLetter = () => {
    if (model) {
      const predictionTensor = model.predict(tensor);
      const predictionResult = predictionTensor.dataSync();
      const predictedIndex = predictionResult.indexOf(Math.max(...predictionResult));
      const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
      setPrediction(labels[predictedIndex]);
    }

    requestAnimationFrame(predictLetter);
  };

  return (
    <div className="camera-prediction-container">
      <video ref={videoRef} autoPlay muted playsInline className="camera-feed" />
      <canvas ref={canvasRef} className="processing-canvas" />
      <div className="prediction-display">
        <p>Predicted Letter: {prediction}</p>
      </div>
    </div>
  );
}

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../utils/firebase";
import { v4 } from "uuid";
import colors from "./Colors";
import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import {
  Button,
  Modal,  
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  IconButton,
  Icon
} from "@chakra-ui/react";
import {BsUpload} from 'react-icons/bs'

function ImageMatchingComponent({ onClose }) {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isMatching, setIsMatching] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [similarityScore, setSimilarityScore] = useState(0);
  const [matchedImageAddress, setMatchedImageAddress] = useState(null);

  useEffect(() => {
    loadModel();
  }, []);

  async function loadModel() {
    await tf.ready();
    console.log('TensorFlow.js and MobileNet model loaded');
  }

  async function classifyImage(imageElement) {
    const model = await mobilenet.load();

    const tfImage = tf.browser.fromPixels(imageElement);
    const resizedImage = tf.image.resizeBilinear(tfImage, [50, 50]);
    const batchedImage = resizedImage.expandDims(0);
    const preprocessedImage = batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));

    const predictions = await model.classify(preprocessedImage);

    tfImage.dispose();
    resizedImage.dispose();
    batchedImage.dispose();
    preprocessedImage.dispose();

    return predictions;
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageElement = document.createElement('img');
        imageElement.onload = () => {
          setUploadedImage(imageElement);
          setIsMatching(true);
          setIsMatched(false);
          setSimilarityScore(0);
        };
        imageElement.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }

function stopCamera() {
  if (videoRef.current && videoRef.current.srcObject) {
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  }
}


  function captureImage() {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const capturedImageElement = document.createElement('img');
    capturedImageElement.onload = async () => {
      setCapturedImage(capturedImageElement);
      setIsMatching(true);
      setIsMatched(false);
      setSimilarityScore(0);
    };
    capturedImageElement.src = canvas.toDataURL('image/jpeg');

    stopCamera();
  }

  useEffect(() => {
    if (uploadedImage && capturedImage && isMatching) {
      const matchImages = async () => {
        const uploadedPredictions = await classifyImage(uploadedImage);
        const capturedPredictions = await classifyImage(capturedImage);

        const uploadedClasses = uploadedPredictions.map((prediction) => prediction.className);
        const capturedClasses = capturedPredictions.map((prediction) => prediction.className);

        const similarity = uploadedClasses.filter((className) => capturedClasses.includes(className)).length;
        const similarityScore = (similarity / uploadedClasses.length) * 100;

        setIsMatched(similarityScore > 66.67);
        setSimilarityScore(similarityScore.toFixed(2));
        setIsMatching(false);
        console.log(uploadedImage.src)
        //localStorage.setItem('matched image address',uploadedImage.src)
          const imageUrl = await uploadImageToFirebase(uploadedImage.src);
          localStorage.setItem('matched image address', imageUrl);
          console.log('Image uploaded to Firebase:', imageUrl);
        if (similarityScore > 66.67) {
          //setMatchedImageAddress(capturedImage.src);
        }
      };

      matchImages();
    }
  }, [uploadedImage, capturedImage, isMatching]);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);
// image upload code 
async function uploadImageToFirebase(imageDataURL) {
  const file = dataURLtoFile(imageDataURL);
  const uniqueFileName = generateUniqueFileName(file.name);
  const imageRef = ref(storage, `Therapist/picture/${uniqueFileName}`);

  try {
    const snapshot = await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(snapshot.ref);

    // Set the image URL in local storage
    localStorage.setItem('uploaded image url', imageUrl);

    return imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}
function dataURLtoFile(dataURL) {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], 'uploadedImage', { type: mime });
}

function generateUniqueFileName(fileName) {
  const timestamp = Date.now();
  const uniqueIdentifier = Math.random().toString(36).substring(7);
  const extension = fileName.split('.').pop();
  return `${timestamp}-${uniqueIdentifier}.${extension}`;
}
//ends here
  function resetComponent() {
    setUploadedImage(null);
    setCapturedImage(null);
    setIsMatching(false);
    setIsMatched(false);
    setSimilarityScore(0);
    setMatchedImageAddress(null);
    startCamera();
  }

  function closeComponent() {
    stopCamera();
    setUploadedImage(null);
    setCapturedImage(null);
    setIsMatching(false);
    setIsMatched(false);
    setSimilarityScore(0);
    setMatchedImageAddress(null);
  
    if (isMatched) {
      // Save the matched image address
      
    }
    setMatchedImageAddress(null);
    onClose();
  }

  function saveMatchedImageAddress(address) {
    // Implement your logic to save the image address
    console.log('Matched image address:', address);
  }

  return (
    <div>
      <div>
        <h2 style={{ fontWeight: 700 }}>Uploaded Image</h2>
        {uploadedImage && (
          <img
            src={uploadedImage.src}
            alt="Uploaded"
            width={10}
            height={10}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <input type="file" accept="image/jpeg,image/jpg,image/png" onChange={handleFileUpload} ref={fileInputRef} />
      </div>

      <div>
        <h2 style={{ fontWeight: 700 }}>Captured Image</h2>
        {capturedImage ? (
          <img
            src={capturedImage.src}
            alt="Captured"
            width={20}
            height={20}
            style={{ borderRadius: '50%', objectFit: 'contain' }}
          />
        ) : (
          <div>
            <video ref={videoRef} width={400} height={150} style={{ objectFit: 'cover' }} autoPlay />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <button onClick={captureImage}>Capture</button>
          </div>
        )}
      </div>

      {isMatching && <p>Matching...</p>}
      {!isMatching && (
        <div>
          <p>Matched: {isMatched ? 'Yes' : 'No'}</p>
          {isMatched &&
           <><p>Similarity Score: {similarityScore}%</p>
            <div>
            <button onClick={resetComponent} width={'50%'}>Reset</button>
            <button onClick={closeComponent}>Close</button>
          </div></>
          }
          {!isMatched && (
            <div>
              <button onClick={resetComponent} width={'50%'}>Reset</button>
              <button onClick={closeComponent}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button bg={colors.primary} onClick={handleOpenModal}>
      <IconButton                    
                    icon={<Icon as={BsUpload} />}
                    fontSize={19}
                    size="sm"
                    borderColor="none"
                    bg={colors.primary}
                  />
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image Matching</ModalHeader>
          <ModalBody>
            {/* <ImageMatchingComponent onClose={handleCloseModal} /> */}
            <ImageMatchingComponent onClose={handleCloseModal} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

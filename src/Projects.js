import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Projects() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); //tracks what image is selected

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map((item) => ({
        src: r(item),
        alt: item.replace("./", ""),
      }));
    };
    const imageContext = require.context(
      "./images",
      false,
      /\.(png|jpe?g|svg)$/
    );
    setImages(importAll(imageContext));
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null); //closes the image
  };
  return (
    <div className="App">
      <Navbar />
      <p className="text-2xl font-semibold font-semibold ">20XX</p>
      <div className="gallery-grid select">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      {/* overlay for fullscreened pictures */}
      {selectedImage && (
        <div className="image-overlay" onClick={closeImage}>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="enlarged-image"
          />
        </div>
      )}
      {/* <p>this is a test to see if it will load</p> */}
    </div>
  );
}

export default Projects;

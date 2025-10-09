import "../App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";

function Projects() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // import all image files from src/images
    const ctx = require.context("../images", false, /\.(jpe?g|png|webp|svg)$/i);
    const keys = ctx.keys();
    const map = {}; // key: baseName (without .thumb and extension)

    keys.forEach((key) => {
      const fileName = key.replace("./", ""); // e.g. "photo.thumb.jpg" or "photo.jpg"
      const isThumb = /\.thumb\.[^.]+$/i.test(fileName);
      // baseId = filename without ".thumb" and without extension, e.g. "photo"
      const baseId = fileName
        .replace(/\.thumb(?=\.)/i, "") // remove ".thumb" token if present
        .replace(/\.[^.]+$/i, ""); // remove extension
      map[baseId] = map[baseId] || {};
      if (isThumb) {
        map[baseId].thumb = ctx(key);
      } else {
        map[baseId].src = ctx(key);
      }
      // store original filename for alt text if you want
      map[baseId].name =
        map[baseId].name || fileName.replace(/\.thumb(?=\.)/i, "");
    });

    const arr = Object.values(map).filter((item) => item.src); // keep entries that have full image
    setImages(arr);
  }, []);

  // restore click handling
  const handleClick = (img) => setSelectedImage(img);
  const closeOverlay = () => setSelectedImage(null);

  return (
    <div className="App">
      <Navbar />
      <p className="text-2xl font-semibold">20XX</p>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.thumb || img.src}
            data-full={img.src}
            alt={img.name || `image-${i}`}
            loading="lazy"
            decoding="async"
            width={300}
            height={300}
            className="gallery-image"
            onClick={() => handleClick(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="image-overlay" onClick={closeOverlay}>
          <img
            src={selectedImage.src}
            alt={selectedImage.name || "enlarged"}
            className="enlarged-image"
          />
        </div>
      )}
    </div>
  );
}

export default Projects;

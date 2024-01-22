import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { Galleria } from "primereact/galleria";
import Navbar from "./Navbar";

function Projects() {
  const [images, setImages] = useState(null);

  const responsiveOptions = [
    { breakpoint: "991px", numVisible: 4 },
    { breakpoint: "767px", numVisible: 3 },
    { breakpoint: "575px", numVisible: 1 },
  ];

  useEffect(() => {
    const importAll = (r) => {
      const images = r.keys().map((item) => ({
        src: r(item),
        alt: item.replace("./", ""),
      }));
      console.log(images);
      return images;
    };
    const imageContext = require.context(
      "../images",
      false,
      /\.(png|jpe?g|svg)$/
    );
    const loadedImages = importAll(imageContext);
    setImages(loadedImages);
  }, []);

  const itemTemplate = (item) => (
    <img src={item.src} alt={item.alt} style={{ width: "90%" }} />
  );

  const thumbnailTemplate = (item) => (
    <img src={item.src} alt={item.alt} style={{ width: "100%" }} />
  );

  return (
    <div className="App">
      <Navbar />
      <p className="text-2xl font-semibold font-semibold ">20XX</p>
      {images && (
        <div className="custom-galleria-container">
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            showThumbnails={false}
            // showItemNavigators
            autoPlay
            circular
          />
        </div>
      )}
    </div>
  );
}

export default Projects;

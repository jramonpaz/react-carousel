import React, { useState, useEffect } from "react";
import "./Carousel.css";
//import { images } from "../Helpers/CarouselData";
//import { loadImages } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(-1);
  const [images, setImages] = useState([]);

  const nextImage = () => {
    currImg < images.length - 1 && setCurrImg(currImg + 1);
  };

  const previousImage = () => {
    currImg > 0 && setCurrImg(currImg - 1);
  };

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=3")
      .then((response) => response.json())
      .then((r) => {
        setImages(r);
        setCurrImg(0);
      });
  }, []);

  // esto es nuevo
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(${
            currImg > -1 &&
            (images[currImg].img || images[currImg].download_url)
          })`,
        }}
      >
        <div className="left" onClick={previousImage}>
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>
            {currImg > -1 && (images[currImg].title || images[currImg].author)}
          </h1>
          <p>
            {currImg > -1 && (images[currImg].subtitle || images[currImg].url)}
          </p>
        </div>
        <div className="right" onClick={nextImage}>
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

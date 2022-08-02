import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/future/image";

import styles from "./slider.module.scss";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2657&q=80",
  "https://images.unsplash.com/photo-1460648304944-4883b5cfcee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
  "https://images.unsplash.com/photo-1532716377393-5ffbea548d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const ImageSlider = () => {
  return (
    <section>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={images.length}
        infinite={true}
        className={styles.sliderProvider}
      >
        <Slider className={styles.slider}>
          {images.map((image, index) => {
            return (
              <Slide key={index} index={index}>
                <Image
                  src={image}
                  alt="image1"
                  className={styles.img}
                  width={1200}
                  height={800}
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className={styles.left}>
          <FaArrowCircleLeft size={40} color="black" />
        </ButtonBack>
        <ButtonNext className={styles.right}>
          <FaArrowCircleRight size={40} color="black" />
        </ButtonNext>
        <DotGroup className={styles.dots} />
      </CarouselProvider>
    </section>
  );
};

export default ImageSlider;

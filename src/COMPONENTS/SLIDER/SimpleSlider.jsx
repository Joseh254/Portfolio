import React, { useState, useEffect } from "react";

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "Welcome to the Carousel!",
    "Learn React with ease.",
    "Build amazing projects.",
  ];

  const slideDuration = 3000; // Time in milliseconds (3 seconds)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideDuration);

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount or re-render
  }, [currentIndex]); // Re-run the effect whenever `currentIndex` changes

  return (
    <div style={styles.carousel}>
      <div style={styles.slide}>{slides[currentIndex]}</div>
      <div style={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: currentIndex === index ? "blue" : "gray",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  carousel: {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  slide: {
    fontSize: "18px",
    padding: "10px",
    transition: "opacity 0.5s ease-in-out",
  },
  indicators: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "5px",
  },
  indicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default SimpleSlider;

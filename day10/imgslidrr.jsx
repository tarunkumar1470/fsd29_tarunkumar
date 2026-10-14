import React, { useState, useEffect } from 'react'

const ImageSlider = () => {

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      )
    }, 2000)

    return () => {
      clearInterval(interval)
    }

  }, [])

  return (
    <div>
      <h2
  style={{
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "30px"
  }}
>
  Image Slider
</h2>

      <img
        src={images[currentIndex]}
        alt="img-here"
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover"
        }}
      />
    </div>
  )
}

export default ImageSliderx
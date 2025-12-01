// ABOUTME: Portfolio grid component displaying all woodwork images with lightbox
// ABOUTME: Responsive grid with click-to-view functionality using yet-another-react-lightbox
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "5L3A9641.jpeg",
  "5L3A9649.jpeg",
  "5L3A9663.jpeg",
  "IMG_0054.jpeg",
  "IMG_0103.jpeg",
  "IMG_0213.jpeg",
  "IMG_0214.jpeg",
  "IMG_0266.jpeg",
  "IMG_0267.jpeg",
  "IMG_0278.jpeg",
  "IMG_0690.jpeg",
  "IMG_0691.jpeg",
  "IMG_0692.jpeg",
  "IMG_0800.jpeg",
  "IMG_0815.jpeg",
  "IMG_0832.jpeg",
  "IMG_0854.jpeg",
  "IMG_0855.jpeg",
  "IMG_0856.jpeg",
  "IMG_0857.jpeg",
  "IMG_8300.jpeg",
  "IMG_8306.jpeg",
  "IMG_8308.jpeg",
];

export default function PortfolioGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = images.map((img) => ({
    src: `/images/${img}`,
  }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => {
              setPhotoIndex(index);
              setLightboxOpen(true);
            }}
            className="relative aspect-square overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Image
              src={`/images/${image}`}
              alt={`Zed9 woodwork project ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </>
  );
}

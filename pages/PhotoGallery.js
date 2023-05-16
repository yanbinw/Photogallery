import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import MagicGrid from "magic-grid";

const PhotoGallery = ({ photos }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const router = useRouter();

  // Step 2: Create a reference to the photo gallery container
  const galleryRef = useRef();

  const handleClick = (index, photoId) => {
    setClickedIndex(index);
    router.push(`/stories/${photoId}`);
  };

  // Step 3: Initialize Magic Grid in a useLayoutEffect function
  useLayoutEffect(() => {
    if (galleryRef.current) {
      const magicGrid = new MagicGrid({
        container: galleryRef.current,
        static: true,
        gutter: 30,
        maxColumns: 5,
      });
      magicGrid.listen();
    }
  }, []);

  // Step 4: Update the return statement to use the galleryRef for the container
  return (
    <div ref={galleryRef} className="photo-gallery">
      {photos.map((photo, index) => (
        <div
          key={index}
          onClick={() => handleClick(index, photo.id)}
          className={classNames({ clicked: clickedIndex === index })}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;

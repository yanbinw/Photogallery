import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import MagicGrid from "magic-grid";

const PhotoGallery = ({ photos }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const router = useRouter();

  const handleClick = (index, photoId) => {
    setClickedIndex(index);
    router.push(`/stories/${photoId}`);
  };

  return (
    <div className="photo-gallery">
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

// Change this
// import Layout from "./components/Layout";
// To this
import Layout from "../components/Layout";

import PhotoGallery from "./PhotoGallery";

const photos = [
  { id: 1, src: "/images/1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/2.jpg", alt: "Photo 2" },
  { id: 3, src: "/images/3.jpg", alt: "Photo 3" },
  { id: 4, src: "/images/4.jpg", alt: "Photo 4" },
  { id: 5, src: "/images/5.jpg", alt: "Photo 5" },
  { id: 6, src: "/images/6.jpg", alt: "Photo 6" },
  { id: 7, src: "/images/7.jpg", alt: "Photo 7" },
  { id: 8, src: "/images/8.jpg", alt: "Photo 8" },
  // Add more photos as needed
];

const Home = () => (
  <Layout>
    <h1>Photo Gallery</h1>
    <PhotoGallery photos={photos} />
  </Layout>
);

export default Home;

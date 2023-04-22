// Change this
// import Layout from "./components/Layout";
// To this
import Layout from "../components/Layout";

import PhotoGallery from "./PhotoGallery";

const photos = [
  { id: 1, src: "/images/1.jpg", alt: "Photo 1" },
  { id: 2, src: "/images/2.jpg", alt: "Photo 2" },
  // Add more photos as needed
];

const Home = () => (
  <Layout>
    <h1>Photo Gallery</h1>
    <PhotoGallery photos={photos} />
  </Layout>
);

export default Home;

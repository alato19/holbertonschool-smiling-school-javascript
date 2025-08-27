import Header from "../components/Header/Header";
import Testimonial from "../components/Testimonials/SectionTestimonial";
import PopularTutorials from "../components/PopularTutorials/VideosSection";
import FreeMembership from "../components/FreeMembership/FreeMembership";
import LatestVideos from "../components/LatestVideos/LatestVideos";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Testimonial />
      <PopularTutorials />
      <FreeMembership />
      <LatestVideos />
      <Footer />
    </>
  );
};

export default Home;

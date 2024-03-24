import CarouselHome from "../components/Carousel";
import TabSection from "../components/TabSection";

const HomePage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-2 w-100">
        <CarouselHome />
      </div>
      <div className="py-3">
        <TabSection />
      </div>
    </div>
  );
};

export default HomePage;

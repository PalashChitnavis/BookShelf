import "./App.css";
import Header from "./components/Header";
import CarouselHome from "./components/Carousel";
import TabSection from "./components/TabSection";
function App() {
  return (
    <>
      <div>
        <div className="w-100">
          <Header />
        </div>
        <div className="d-flex justify-content-center align-items-center p-2 w-100">
          <CarouselHome />
        </div>
        <div className="py-3">
          <TabSection />
        </div>
      </div>
    </>
  );
}

export default App;

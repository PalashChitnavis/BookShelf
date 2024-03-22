import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
function CarouselHome() {
  return (
    <div className="w-75 d-flex justify-content-between">
      <Carousel
        className="w-100 d-none d-sm-block border border-dark"
        variant="dark"
      >
        <Carousel.Item className="d-flex justify-content-center">
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">First slide label</h3>
            <p className="text-black">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">Second slide label</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">Third slide label</h3>
            <p className="text-black">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel
        className="w-100 d-flex d-sm-none border border-black"
        variant="dark"
      >
        <Carousel.Item style={{ height: "40vh" }}>
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">First slide label</h3>
            <p className="text-black">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "40vh" }}>
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">Second slide label</h3>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "40vh" }}>
          <Image src="https://placehold.co/1200x400" fluid />
          <Carousel.Caption>
            <h3 className="text-black">Third slide label</h3>
            <p className="text-black">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;

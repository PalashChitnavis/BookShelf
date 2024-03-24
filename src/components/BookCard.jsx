import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function BookCard() {
  const device = useSelector((state) => state.device.value);
  return (
    <Card
      style={{
        width: `${device === "large" ? `20vw` : `40vw`}`,
      }}
    >
      <Link to="/book">
        <Card.Img variant="top" src="https://placehold.co/30x30" />
      </Link>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>Book Title</Card.Title>
        <Card.Subtitle>Book Author</Card.Subtitle>
        <Card.Text>Book Price</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-around">
        <Card.Link href="#">Cart</Card.Link>
        <Card.Link href="#">Wishlist</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default BookCard;

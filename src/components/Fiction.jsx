import BookCard from "./BookCard";
const Fiction = () => {
  return (
    <div className="d-flex w-100 justify-content-around flex-wrap gap-3">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default Fiction;

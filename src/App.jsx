/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { typeOfDevice } from "./redux/deviceSlice";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Book";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(typeOfDevice("small"));
    } else {
      dispatch(typeOfDevice("large"));
    }
  }, []);
  return (
    <>
      <div>
        <div className="w-100">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

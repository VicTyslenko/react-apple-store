import Header from "./Components/Header/Header";
import { useEffect } from "react";
import Cards from "./Components/Cards/Cards/Cards";
import CartItems from "./Components/CartItems/CartItems";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import FavouriteItems from "./Components/FavouriteItems/FavouriteItems";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:4444/projects")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/cartitems" element={<CartItems />} />
        <Route path="/" element={<Cards />} />
        <Route path="/favourites" element={<FavouriteItems />} />

        <Route
          path="*"
          element={<p style={{ paddingTop: "100px" }}>page is not found</p>}
        />
      </Routes>
    </div>
  );
};
export default App;

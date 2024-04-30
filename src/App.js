import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import {Cart} from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import './assets/backgroundImg.jpg';
function App() {
  return (
    <div className="App" style={{backgroundImage: "url(src\assets\backgroundImg.jpg)"}}>
      <ShopContextProvider>
        <Router>
          <Navbar className='' />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

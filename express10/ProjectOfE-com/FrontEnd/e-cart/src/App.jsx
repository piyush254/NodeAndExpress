import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <BrowserRouter>
    <div style={{minHeight : "100vh", backgroundColor:"#131313" , position : "relative" , paddingBottom : "10vh"}}>
        <Nav />
        <Routes>
          <Route path="/" element={<PrivateComponent />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="products" element={<h1>Products</h1>} />
            <Route path="addProducts" element={<h1>Add Product</h1>} />
            <Route path="updateProducts" element={<h1>Update Product</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="signup" element={<Signup />} />
        </Routes>
        <Footer />
    </div>
      </BrowserRouter>
  );
}

export default App;

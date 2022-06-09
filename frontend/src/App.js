import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link,Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Login from "./screens/Forms/login/LoginForm";
import Signup from "./screens/Forms/signup/SignupFrom";
import AboutUs from "./screens/about/AboutUs";
import ForgotdPassword from "./screens/Forms//password/ForgotPassword";
import ResetPassword from "./screens/Forms//password/ResetPassword";
import Homee from "./screens/home/Homee";
import ActivationEmail from "./screens/Forms/password/ActivationEmail";
import ProfileAdmin from "./screens/service/pages/ProfileAdmin";
import ProfileProfissionell from "./screens/service/pages/ProfileProfissionell";
import NewServiceAd from "./screens/service/pages/admin/NewServiceAdd";
import SidebarMenu from "./screens/service/pages/admin/dhashbord/SidebarMenu";
import Card from "./screens/user/card/Card";
import { ToastContainer } from "react-toastify";
import { getUserData } from "./utils/LocalStorage";
import Categories from "./screens/categories/Categories";
import Product from "./screens/prodects/Product";
import ProductDetail from "./screens/prodects/productDetail/productDetail";





function App() {
  

  


  return (
    <div>
      <BrowserRouter>
        <Header className="headerfromapp" />

        <Routes>
          <Route
            path="/homee"
            element={
                              <Homee />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />

          
          <Route
            path="/ProfileProfissionell"
            element={<ProfileProfissionell />}
          />






          
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

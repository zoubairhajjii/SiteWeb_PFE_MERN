import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Login from "./screens/Forms/login/LoginForm";
import Signup from "./screens/Forms/signup/SignupFrom";
import AboutUs from "./screens/about/AboutUs";
import ForgotdPassword from "./screens/Forms//password/ForgotPassword";
import ResetPassword from "./screens/Forms//password/ResetPassword";
import Hom from "./screens/home/Hom";
import ActivationEmail from "./screens/Forms/password/ActivationEmail";
import ProfileAdmin from "./admin/ProfileAdmin";
import ProfileProfissionell from "./screens/service/pages/ProfileProfissionell";
import NewServiceAd from "./screens/service/pages/admin/NewServiceAdd";
import Card from "./screens/user/card/Card";
import { ToastContainer } from "react-toastify";
import { getUserData } from "./utils/LocalStorage";
import Categories from "./screens/categories/Categories";
import Product from "./screens/prodects/Product";
import ProductDetail from "./screens/prodects/productDetail/productDetail";
import { Container } from "@mui/material";
import Ajout from "./admin/Ajout";
import NewServiceAdd from "./screens/service/pages/admin/NewServiceAdd";
import User from "./admin/user/User";
import NewUser from "./admin/user/newUser/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/hom" element={<Hom />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/newerviceAd" element={<NewServiceAdd />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/users" element={<User />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/forgetpasword" element={<ForgotdPassword />} />
        <Route path="/reset" element={<ResetPassword/>} />



        <Route
          path="/ProfileProfissionell"
          element={<ProfileProfissionell />}
        />
        <Route path="/profileadmin" element={<ProfileAdmin />} />
        <Route path="/ajout" element={<Ajout />} />
      </Routes>

      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

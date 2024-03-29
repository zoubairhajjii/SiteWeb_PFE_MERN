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

import NewServiceAd from "./screens/service/pages/admin/NewServiceAdd";
import Card from "./screens/user/card/Card";
import { ToastContainer } from "react-toastify";
import { getUserData } from "./utils/LocalStorage";
import Service from "./screens/categories/Service";
import Product from "./screens/prodects/Product";
import ProductDetail from "./screens/prodects/productDetail/productDetail";
import NewServiceAdd from "./screens/service/pages/admin/NewServiceAdd";
import NewUser from "./admin/user/newUser/NewUser";
import Homee from "./screens/home/Homee";
import EditeSerivce from "./admin/service/EditeSerivce";
import ListeUser from "./admin/user/ListeUser";
import EditeUser from "./admin/user/eidteuser/EditeUser";
import ListeService from "./admin/service/ListeService";
import UserProfile from "./screens/user/UserProfile";
import Mydemade from "./screens/user/Mydemade";
import ProfileProfissionell from "./ProfileProfissionell/ProfileProfissionell";
import DemandesPro from "./ProfileProfissionell/DemandesPro";
import AddedServiceAdmin from "./admin/service/AddedServiceAdmin";
import EditeProfilePoff from "./ProfileProfissionell/EditeProfilePoff";
import { useSelector } from "react-redux";
import ListeServicePof from "./ProfileProfissionell/ListeServicePof";
import Search from "./components/search/SearchBar";
import AdminRouter from "./components/private/AdminRouter";
import PrivateRouter from "./components/private/PrivateRouter";
import ProfessionnelRoute from "./components/private/ProfessionnelRoute";
import EditeUserProfile from "./screens/user/EditeUserProfile"
function App() {
  const authReducer = useSelector((state) => state.authReducer);
  const user = {
    isConnected: authReducer.isAuth,
  };
  return (
    <BrowserRouter>
      <Header />
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/product"
            element={
              <PrivateRouter user={user}>
                <Product />
              </PrivateRouter>
            }
          />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route
            path="/newerviceAd"
            element={
              <ProfessionnelRoute user={user}>
                <NewServiceAdd />
              </ProfessionnelRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRouter user={user}>
                <AboutUs />
              </PrivateRouter>
            }
          />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/forgetpasword" element={<ForgotdPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route
            path="/account"
            element={
              <ProfessionnelRoute user={user}>
                <ProfileProfissionell />
              </ProfessionnelRoute>
            }
          />
          <Route path="/EditeProfilePoff/:id" element={<EditeProfilePoff />} />
          <Route
            path="/profileadmin"
            element={
              <AdminRouter user={user}>
                <ProfileAdmin />
              </AdminRouter>
            }
          />
          <Route path="/EditeSerivce/:id" element={<EditeSerivce />} />
          <Route
            path="/listeService"
            element={
              <AdminRouter user={user}>
                <ListeService />
              </AdminRouter>
            }
          />
          <Route path="/demandesPro" element={<DemandesPro />} />
          <Route path="/ListeServicePof" element={<ListeServicePof />} />
          <Route path="/users/edit/:id" element={<EditeUser />} />
          <Route path="addedServiceAdmin" element={<AddedServiceAdmin />} />
          <Route path="/listuser" element={<ListeUser />} />
          <Route path="/listuser" element={<ListeUser />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/Mydemade" element={<Mydemade />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/EditeUserProfile/:id" element={<EditeUserProfile />} />

        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}
export default App;

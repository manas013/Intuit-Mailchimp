import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Homepage/MainPage";
import Pricing from "../pages/Pricing/Pricing";
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"



const Allroutes = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}> </Route>
      <Route path="/loginpage" element={<LoginPage/>}> </Route>
      <Route path="/signuppage" element={<SignupPage/>}> </Route>
      <Route path="/pricing" element={<Pricing/>}> </Route>

    </Routes>
  );
};

export default Allroutes;

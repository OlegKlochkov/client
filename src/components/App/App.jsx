import Navbar from "../Navbar/Navbar";
import './css/app.css'
import React, { useEffect } from "react";
import Registration from "../Registration/Registration";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../actions/user";
import MainPage from "../MainPage/MainPage";
import ProductPage from "../ProductPage/ProductPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(auth())
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            {!isAuth && <Route path="/registration" element={<Registration />} />}
            {!isAuth && <Route path="/login" element={<Login />} />}
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/:category_name" element={<CategoryPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

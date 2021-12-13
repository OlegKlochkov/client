import Navbar from "../Navbar/Navbar";
import './css/app.css'
import React, { useEffect } from "react";
import Registration from "../Registration/Registration";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../actions/user";


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
        {!isAuth &&
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
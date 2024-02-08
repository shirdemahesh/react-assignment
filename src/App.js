import React from 'react';
import Sidenav from './Sidenav';
import {Routes, Route , BrowserRouter} from "react-router-dom";
import Dashboard from './Dashboard';
import Users from './Users';
import Roles from './Roles';
import Profile from './Profile';
import Logout from './Logout';
import Login from './Login';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
        <Route path='/' exact element={<Login />}></Route>
        <Route path='/signup' exact element={<Signup />}></Route>

          <Route path='/dashboard' exact element={<Dashboard />}></Route>
          <Route path='/users' exact element={<Users />}></Route>
          <Route path='/roles' exact element={<Roles />}></Route>
          <Route path='/profile' exact element={<Profile />}></Route>
          <Route path='/logout' exact element={<Logout />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

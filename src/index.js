import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynavbar from './Mynavbar';
import About from './Modules/About';
import "./style.css"
import Home from './Modules/Home';
import Error from './Modules/Error';
import Table from './Table';
import Myservice from './Myservice';
import Props from './Modules/Props';
import Axios from './Modules/Axios';
import Detailpage from './Modules/Detailpage';
import Purchage from './Modules/Servicecomponent/Purchage';
import Repear from './Modules/Servicecomponent/Repear';
import Change from './Modules/Servicecomponent/Change';
import Laptopbuy from './Modules/Servicecomponent/Laptopbuy';
import Laptoprepear from './Modules/Servicecomponent/Laptoprepear';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Mynavbar/>
   
    <Routes>
      <Route path='myabout' element={<About/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='myservice' element={<Myservice/>}>
        <Route path='mypurchage' element={<Purchage/>}/>
        <Route path='myrepear' element={<Repear/>}/>
        <Route path='mychange' element={<Change/>}/>
        <Route path='mybuy' element={<Laptopbuy/>}/>
        <Route path='mylaptoprepear' element={<Laptoprepear/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
      <Route path='mytable' element={<Table/>}/>
      <Route path='myprops' element={<Props/>}/>
      <Route path='myaxios' element={<Axios/>}/>
      <Route path='myaxios/:id' element={<Detailpage/>}/>
     
    </Routes>
    </BrowserRouter>


  </React.StrictMode>
);



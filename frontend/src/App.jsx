import React, { useState } from 'react';
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';
import { SectionCard } from './components/SectionCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';
import { Default } from './Pages/Default';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Default/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/default' element={<Default/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
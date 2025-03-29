import React, { useState } from 'react';
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';
import { SectionCard } from './components/SectionCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';
import { Signin } from './Pages/Signin';
import { Default } from './Pages/Default';
import { CreateStory } from './Pages/CreateStory';
import Chapter from './Pages/Chapter'
import {BookGrid} from './Pages/BookGrid'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Default/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/default' element={<Default/>}></Route>
      <Route path='/createStory' element={<CreateStory/>}></Route>
      <Route path='/chapter' element={<Chapter></Chapter>}></Route>
      <Route path='/browse' element={<BookGrid></BookGrid>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
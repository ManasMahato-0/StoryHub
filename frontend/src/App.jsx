import React, { useState } from 'react';
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';
import { SectionCard } from './components/SectionCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { CreateStory } from './Pages/CreateStory';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/createStory' element={<CreateStory/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
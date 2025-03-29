import React from 'react'
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export const Default = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen items-center' style={{ 
               backgroundImage:"url('/Homebg.png')",
               backgroundSize: 'cover', 
                
             }}>
      <nav className="fixed top-0 left-0 right-0 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Book className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <span className="ml-3 text-2xl font-bold text-primary tracking-wide">StoryHub</span>
          </div>
          
          
          <button className="rounded-md  py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
           
          <div className="flex items-center gap-2">
          
          <div className='text-base'>Login</div>
          <User className="h-7 w-7 text-primary hover:text-accent cursor-pointer transition-colors duration-200" strokeWidth={1.5} /> 
          </div>
        </button>
          
        </div>
      </div>
      </nav>
      <div className='text-[#8AB2A6] justify-center items-center flex pt-56 flex-col  text-center'>
      <div className="text-3xl font-bold">Publish your Imagination, your own way</div>
      <div  className="text-xl font-semibold">Create your own unique and beautifull stories and share with world</div>
      <button onClick={()=>{navigate("/signin")}} class="rounded-md w-1/6 m-6 bg-[#E07A5F] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:[#F1E3D3] focus:shadow-none active:[#F1E3D3] hover:[#F1E3D3] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
     <span>Create Your Story</span>
  </button>
      </div>
      
    </div>
  )
}

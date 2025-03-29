import React from 'react'
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';

export const Home = () => {
  return (
    <div className='w-full h-screen' style={{ 
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
      <div className='flex mt-10'>
        <div className="text-xl font-bold">Publish your Imagination, your own way</div>
        <div  className="text-lg font-semibold">Create your own unique and beautifull stories and share with world</div>
      </div> 
    </div>
  )
}

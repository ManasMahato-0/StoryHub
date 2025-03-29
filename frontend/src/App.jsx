import React, { useState } from 'react';
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';

function Navbar() {
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 glass-effect shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Book className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <span className="ml-3 text-2xl font-bold text-primary tracking-wide">StoryHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Browse Stories</a>
            <a href="#" className="text-primary hover:text-accent transition-colors duration-200 font-medium">Most Liked</a>
            <div className="relative">
              <button 
                onClick={() => setIsGenresOpen(!isGenresOpen)}
                className="flex items-center text-primary hover:text-accent transition-colors duration-200 font-medium"
              >
                Genres <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isGenresOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-xl glass-effect shadow-xl">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 text-sm text-primary hover:text-accent hover:bg-secondary/20 transition-colors duration-200">Fantasy</a>
                    <a href="#" className="block px-4 py-3 text-sm text-primary hover:text-accent hover:bg-secondary/20 transition-colors duration-200">Science Fiction</a>
                    <a href="#" className="block px-4 py-3 text-sm text-primary hover:text-accent hover:bg-secondary/20 transition-colors duration-200">Mystery</a>
                    <a href="#" className="block px-4 py-3 text-sm text-primary hover:text-accent hover:bg-secondary/20 transition-colors duration-200">Romance</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search stories..."
                className="w-56 pl-10 pr-4 py-2.5 rounded-full bg-white/50 border-2 border-primary/20 focus:border-accent focus:outline-none transition-colors duration-200"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-primary/60" />
            </div>
            <User className="h-7 w-7 text-primary hover:text-accent cursor-pointer transition-colors duration-200" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="glass-effect rounded-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-semibold text-primary mb-6">{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" 
         style={{ 
           backgroundImage:"url('/colorbg.jpeg')" ,
         }}>
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectionCard title="Continue Reading">
            <div className="space-y-4">
              {['The Lost Kingdom', 'Starlight Chronicles', 'The Hidden Truth'].map((story) => (
                <div key={story} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                  <span className="text-primary font-medium">{story}</span>
                  <span className="text-sm text-accent font-medium">Chapter 7</span>
                </div>
              ))}
            </div>
          </SectionCard>
          
          <SectionCard title="Your Stories">
            <div className="space-y-4">
              {['The Magic Within', 'Dark Shadows'].map((story) => (
                <div key={story} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                  <span className="text-primary font-medium">{story}</span>
                  <span className="text-sm text-primary font-medium px-3 py-1 bg-secondary/40 rounded-full">Published</span>
                </div>
              ))}
            </div>
          </SectionCard>
          
          <SectionCard title="Issues Raised">
            <div className="space-y-4">
              {[
                { title: 'Plot hole in chapter 3', status: 'pending' },
                { title: 'Character inconsistency', status: 'resolved' }
              ].map((issue) => (
                <div key={issue.title} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                  <span className="text-primary font-medium">{issue.title}</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    issue.status === 'resolved' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
          
          <SectionCard title="Your Suggestions">
            <div className="space-y-4">
              {[
                { text: 'Add a new character', status: 'accepted' },
                { text: 'Change the ending', status: 'pending' },
                { text: 'Modify dialogue', status: 'rejected' }
              ].map((suggestion) => (
                <div key={suggestion.text} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                  <span className="text-primary font-medium">{suggestion.text}</span>
                  <span className="flex items-center">
                    {suggestion.status === 'accepted' && <Check className="h-6 w-6 text-primary" strokeWidth={1.5} />}
                    {suggestion.status === 'rejected' && <X className="h-6 w-6 text-accent" strokeWidth={1.5} />}
                    {suggestion.status === 'pending' && <Clock className="h-6 w-6 text-accent" strokeWidth={1.5} />}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </main>
      
      <button 
        className="fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-background rounded-full p-5 shadow-lg hover:shadow-xl transition duration-300 hover:scale-110"
        aria-label="Create new story"
      >
        <Plus className="h-7 w-7" strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default App;
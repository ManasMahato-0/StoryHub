import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock } from 'lucide-react';
import { SectionCard } from '../components/SectionCard';
import { Navbar } from '../components/navbar'; 


export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed" 
         style={{ 
           backgroundImage: "url('/colorbg.jpeg')",
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeft, Flag, MessageCircle } from 'lucide-react';
import { Navbar } from '../components/NavBar';


function MostLiked() {
  const [stories, setStories] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/story/most-liked', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  async function GetStory(id) {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/story/story/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const storyData = response.data;
      const authorResponse = await axios.get(`http://localhost:3000/api/v1/story/author/${storyData.authorId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      storyData.authorName = authorResponse.data.fullName;

      setSelectedBook(storyData);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  }

  if (loading) return <p className="text-center text-primary">Loading stories...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
       <Navbar/>
      {selectedBook ? (
        <div className="glass-effect rounded-xl p-8">
          <button 
            onClick={() => setSelectedBook(null)}
            className="flex items-center text-primary hover:text-accent mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Books
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={selectedBook.imageUrl} 
                alt={selectedBook.title}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-primary">{selectedBook.title}</h1>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-accent">Author</h2>
                  <p className="text-primary">{selectedBook.authorName}</p>
                </div>
                
                {/* <div>
                  <h2 className="text-lg font-semibold text-accent">Published Date</h2>
                  <p className="text-primary">{new Date(selectedBook.publishDate).toLocaleDateString()}</p>
                </div> */}
                
                <div>
                  <h2 className="text-lg font-semibold text-accent">Genre</h2>
                  <p className="text-primary">{selectedBook.genre}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-accent">Description</h2>
                  <p className="text-primary leading-relaxed">{selectedBook.description}</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <button className="px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors duration-200">
                  Read Now
                </button>
                <button className="px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center">
                  <Flag className="h-5 w-5 mr-2" />
                  Raise Issue
                </button>
                <button className="px-6 py-3 bg-[#E07A5F] text-background rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stories.map((book) => (
            <div 
              key={book._id}
              className="glass-effect rounded-xl p-4 cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => GetStory(book._id)}
            >
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">{book.title}</h3>
              <p className="text-sm text-accent">{book.authorName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MostLiked;

import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import { Book, Search, User, ChevronDown, Plus, Check, X, Clock ,ArrowLeft, Flag,MessageCircle} from 'lucide-react';
import { SectionCard } from '../components/SectionCard';
import { Navbar } from '../components/navbar';
 

 function BookGrid() {
  const [selectedBook, setSelectedBook] = useState(null);
  
  const books = [
    {
      id: 1,
      title: "The Lost Kingdom",
      author: "Elena Rivers",
      cover: "https://images.unsplash.com/photo-1479894720049-e239d8e4d07c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      publishDate: "2024-01-15",
      language: "English",
      genre: "Fantasy",
      description: "In a world where magic is forbidden, a young princess discovers she possesses extraordinary powers that could either save her kingdom or destroy it. As dark forces gather at the borders of her realm, she must learn to master her abilities while keeping them hidden from those who would persecute her."
    },
    {
      id: 2,
      title: "Starlight Chronicles",
      author: "Marcus Chen",
      cover: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      publishDate: "2024-02-20",
      language: "English",
      genre: "Science Fiction",
      description: "Set in the year 3045, humanity has spread across the galaxy, establishing colonies on distant planets. But when mysterious signals begin emanating from an uncharted sector of space, a team of explorers must venture into the unknown, facing challenges that will test their courage and humanity."
    },
    {
      id: 3,
      title: "The Hidden Truth",
      author: "Sarah Blake",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      publishDate: "2024-03-01",
      language: "English",
      genre: "Mystery",
      description: "Detective Anna Martinez thought she had seen everything in her twenty years on the force. But when a series of seemingly unrelated deaths leads her to uncover a centuries-old conspiracy, she realizes that some truths are better left hidden. Now she must decide whether to pursue justice or protect humanity from a truth that could tear society apart."
    },
    
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
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
                src={selectedBook.cover} 
                alt={selectedBook.title}
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-primary">{selectedBook.title}</h1>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-accent">Author</h2>
                  <p className="text-primary">{selectedBook.author}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-accent">Published Date</h2>
                  <p className="text-primary">{new Date(selectedBook.publishDate).toLocaleDateString()}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-accent">Language</h2>
                  <p className="text-primary">{selectedBook.language}</p>
                </div>
                
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
                <button class="px-6 py-3 bg-[#E07A5F] text-background rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center" type="button">
                <MessageCircle className="h-5 w-5 mr-2"  />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div 
              key={book.id}
              className="glass-effect rounded-xl p-4 cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedBook(book)}
            >
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">{book.title}</h3>
              <p className="text-sm text-accent">{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default BookGrid;

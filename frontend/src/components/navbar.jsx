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
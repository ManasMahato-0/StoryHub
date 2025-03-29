import React from 'react';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/navbar';


const chapterData = {
  bookTitle: "The Great Gatsby",
  chapterTitle: "Chapter 1: The Beginning",
  publishDate: "February 28, 2024",
  content: [
    "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. \"Whenever you feel like criticizing anyone,\" he told me, \"just remember that all the people in this world haven't had the advantages that you've had.\"",
    "He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."
  ]
};

export function Chapter() {
  return (
    <div className="min-h-screen bg-cream px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        {/* Book and Chapter Info */}
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-bold text-forest">{chapterData.bookTitle}</h1>
          <h2 className="text-2xl text-forest/80">{chapterData.chapterTitle}</h2>
          <p className="text-sm text-forest/60">Published: {chapterData.publishDate}</p>
        </div>

        {/* Chapter Content */}
        <div className="prose prose-lg max-w-none mb-8">
          {chapterData.content.map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed mt-4 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-sage my-8" />

        {/* Navigation Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="flex items-center justify-center p-2 rounded-full bg-sage hover:bg-sage/80 transition-colors">
            <Home className="w-5 h-5 text-forest" />
          </button>
          <button className="flex items-center justify-center p-2 rounded-full bg-sage hover:bg-sage/80 transition-colors">
            <ArrowLeft className="w-5 h-5 text-forest" />
          </button>
          <button className="flex items-center justify-center p-2 rounded-full bg-sage hover:bg-sage/80 transition-colors">
            <ArrowRight className="w-5 h-5 text-forest" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chapter;
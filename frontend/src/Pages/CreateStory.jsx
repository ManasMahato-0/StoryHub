import { Book, User } from "lucide-react";
import { Navbar } from "../components/navbar";

export function CreateStory() {
    return (
        <div className='w-full h-screen' style={{
                backgroundImage: "url('/Homebg.png')",
                backgroundSize: 'cover',   
              }}>
            <Navbar />
            <div className="flex justify-center flex-col mx-[10%] bg-background h-[40%] w-[40%] rounded-lg shadow-lg mx-auto p-8">
            </div>
        </div>
    );
};

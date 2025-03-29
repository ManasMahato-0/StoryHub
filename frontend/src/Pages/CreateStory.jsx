import { Navbar } from "../components/navbar";
import { InputField } from "../components/InputField";
import { Search, User, ChevronDown, Plus, Check, X, Clock ,ArrowLeft, Flag,MessageCircle} from 'lucide-react';
export function CreateStory() {
    return (
        <div className="w-screen h-screen flex flex-col" 
            style={{
                backgroundImage: "url('/Homebg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>

            <Navbar />
            
            <div className="h-[90%] flex justify-center items-center">
                <div className="bg-background rounded-lg shadow-lg p-8 w-[80%] opacity-[0.92] h-[75%]">
                    
                    <div className="flex w-full space-x-4">
                        <div className="w-1/2"><InputField placeholder="Title" /></div>
                        <select
                            onChange={(e) => console.log(e.target.value)}
                            id="genre"
                            name="genre"
                            className="px-4  border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-200 w-1/2 h-[43px] mt-[7px]"
                        >
                            <option value="" disabled selected>-- Genre --</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Action">Action</option>
                            <option value="Horror">Horror</option>
                            <option value="Science Fiction">Science Fiction</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <input 
                            className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-200" 
                            placeholder="Description"
                        />
                    </div>
                    <div className="mt-4">
                        <textarea 
                            className="w-full h-[250px] px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-200 resize-none"
                            placeholder="Start writing your story here..."
                        />
                    </div>
                    <div>
                <div className="flex space-x-4 pt-6">
                <button class="px-6 py-3 bg-primary text-background rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center" type="button">
                <MessageCircle className="h-5 w-5 mr-2"  />
                  Comment
                </button>
                <button class="px-6 py-3 bg-secondary text-background rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center" type="button">
                <MessageCircle className="h-5 w-5 mr-2"  />
                  Comment
                </button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

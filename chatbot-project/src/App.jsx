import { useState} from 'react'
import ChatInput from './components/ChatInput' 
import ChatMessages from './components/ChatMessages'
 

function App() {
        const [chatMessages, setChatMessages] = useState([
          { message: "hello chatbot", sender: "user", id: "id1" },
          { message: "hello! How can I help you?", sender: "robot", id: "id2" },
          { message: "Can you get me todays date?", sender: "user", id: "id3" },
          { message: "Today is September 27", sender: "robot", id: "id4" },
        ]);

        return (
          <div className="mx-auto flex h-screen max-w-[600px] flex-col">
            <ChatMessages chatMessages={chatMessages} />
             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }


export default App

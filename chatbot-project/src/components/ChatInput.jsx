import { useState } from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputtext(event) {
    setInputText(event.target.value);
  }

function sendMessage() {
  const userMessage = {
    message: inputText,
    sender: "user",
    id: `id${Date.now()}-user`,
  };

  const newChatMessages = [...chatMessages, userMessage];
  setChatMessages(newChatMessages);

  const response = Chatbot.getResponse(inputText);

  const robotMessage = {
    message: response,
    sender: "robot",
    id: `id${Date.now()}-robot`,
  };

  setChatMessages([...newChatMessages, robotMessage]);
  setInputText("");
}
  return (
    <div className="mb-[60px] flex">
      <input
        className="flex-grow rounded-[10px] border text-[15px] px-[15px] py-3"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputtext}
        value={inputText}
      />
      <button className="ml-2 cursor-pointer rounded-xl bg-green-600 px-5 py-3 text-[14px] text-white outline-none transition-colors duration-200 hover:bg-green-700 focus:outline-none focus:shadow-none border-none" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;

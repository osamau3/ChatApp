import React, { useState } from "react";

import './App.css';
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatBody from "./components/ChatBody/ChatBody";

function App() {
    const [newMessage, setNewMessage] = useState(undefined)

    const handleSendNewMessage = (value) => {
        setNewMessage(value)
    }

  return (
    <div className="App">
      <ChatHeader />
      <ChatBody newMessage={newMessage} />
      <ChatFooter onSendMessge={handleSendNewMessage}/>
    </div>
  );
}

export default App;

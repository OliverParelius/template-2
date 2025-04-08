'use client';

import ChatInput from '@/components/chat/ChatInput';
import ChatArea from '@/components/chat/ChatArea';
import Sidebar from '@/components/chat/Sidebar';
import { useChat } from 'ai/react';
import { useState } from 'react';

export default function HomePage() {
  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat({
    api: '/api/openai/chat',
  });
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleNewChat = () => {
    console.log("Starting new chat, clearing messages...");
    setMessages([]);
    setUploadedFileName(null);
  };

  return (
    <div 
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Sidebar onNewChat={handleNewChat} />
      <div className="flex flex-col flex-1 bg-black/50 relative">
        <ChatArea
          messages={messages}
          uploadedFileName={uploadedFileName}
          setUploadedFileName={setUploadedFileName}
        />
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

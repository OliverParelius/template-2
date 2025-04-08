'use client';

import ChatInput from '@/components/chat/ChatInput';
import ChatArea from '@/components/chat/ChatArea';
import Sidebar from '@/components/chat/Sidebar';
import { useChat } from 'ai/react';

export default function HomePage() { // Renamed component to avoid conflict if layout imports Page
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/openai/chat',
  });

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <ChatArea messages={messages} />
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

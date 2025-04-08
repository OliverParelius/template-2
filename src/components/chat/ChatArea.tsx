import React from 'react';
import { type Message } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface ChatAreaProps {
  messages: Message[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
            <div className="absolute top-4 right-10 flex items-center space-x-2 text-sm">
              <span className="bg-gray-800 px-2 py-1 rounded-md">Free plan</span>
              <button className="text-blue-500 hover:underline">Upgrade</button>
            </div>
            <SparklesIcon className="h-12 w-12 text-orange-400 mb-4" />
            <h1 className="text-3xl font-serif text-gray-300 mb-2">Back at it, Oliver Parelius</h1>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex space-x-3 max-w-xl ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 ${m.role === 'user' ? 'bg-purple-600' : 'bg-orange-500'}`}></div>
                  <div
                    className={`px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-gray-800 text-gray-200' : 'bg-transparent text-gray-300'
                    }`}
                  >
                    <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatArea; 
import React, { useState } from 'react';
import { type Message } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ChatAreaProps {
  messages: Message[];
  uploadedFileName: string | null;
  setUploadedFileName: React.Dispatch<React.SetStateAction<string | null>>;
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages, uploadedFileName, setUploadedFileName }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-10 relative">
      <div className="absolute top-4 right-10 flex items-center space-x-2 text-sm z-10">
        <span className="bg-gray-800 px-2 py-1 rounded-md">Free plan</span>
        <button className="text-blue-500 hover:underline">Upgrade</button>
      </div>

      <div className="absolute top-12 right-10 flex items-center space-x-2 z-10">
        {uploadedFileName && (
          <span className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded">
            {uploadedFileName}
          </span>
        )}
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-black/30 hover:bg-black/50 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
        >
          Upload sales call
        </label>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          accept=".mp3,.mp4"
          onChange={handleFileChange}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 pt-20">
            <SparklesIcon className="h-12 w-12 text-orange-400 mb-4" />
            <h1 className="text-3xl text-gray-300 mb-2 font-mono">Let's improve sales</h1>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex space-x-3 max-w-xl ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {m.role === 'user' ? (
                    null
                  ) : (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Image
                            src="/clooseai_logo_black.png"
                            alt="AI Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg font-mono ${
                      m.role === 'user'
                        ? 'bg-gray-800 text-gray-200'
                        : 'bg-gray-900 text-gray-300 border border-gray-700'
                    }`}
                  >
                    <ReactMarkdown className="prose prose-invert prose-base max-w-none font-mono">
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
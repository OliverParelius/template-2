import React from 'react';
import { PlusIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'; // Use outline icons

const Sidebar = () => {
  return (
    // Darker background, slightly wider, specific padding
    <div className="w-72 bg-gray-950 p-3 flex flex-col text-gray-300">
      {/* Top Section with Claude logo - Placeholder */}
      <div className="flex items-center space-x-2 p-2 mb-4">
        {/* Placeholder for Claude logo */}
        <div className="w-6 h-6 bg-orange-500 rounded-full"></div> 
        <span className="font-semibold text-lg text-white">Claude</span>
      </div>

      {/* New Chat Button */}
      <button className="flex items-center bg-gray-800 text-white px-3 py-2 rounded-lg mb-5 hover:bg-gray-700 text-sm">
        <PlusIcon className="h-5 w-5 mr-2 text-gray-400" />
        New chat
      </button>

      {/* Chats Link */}
      <button className="flex items-center text-gray-300 px-3 py-2 rounded-lg mb-5 hover:bg-gray-800 text-sm">
        <ChatBubbleLeftIcon className="h-5 w-5 mr-2 text-gray-400" />
        Chats
      </button>

      {/* Recents Section */}
      <div className="flex-1 overflow-y-auto mb-4">
        <h2 className="text-xs text-gray-500 uppercase font-semibold mb-2 px-3">Recents</h2>
        <ul className="space-y-1">
          {/* Example recent chats - adjust styling */}
          <li className="text-sm hover:bg-gray-800 p-2 rounded-md cursor-pointer truncate">Greeting and Assistance</li>
          <li className="text-sm hover:bg-gray-800 p-2 rounded-md cursor-pointer truncate">Requesting Refund for Claude AI</li>
          <li className="text-sm hover:bg-gray-800 p-2 rounded-md cursor-pointer truncate">AI-Powered Sales Coach Web App</li>
          {/* Add more recent chats here */}
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="mt-auto border-t border-gray-800 pt-3">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">OP</div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Oliver Parelius</span>
                <span className="text-xs text-gray-400">Free plan</span>
              </div>
          </div>
          {/* Placeholder for dropdown arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
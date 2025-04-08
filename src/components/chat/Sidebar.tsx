import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

// Define type for recent chats if needed later
// interface RecentChat { id: string; title: string; }

// Define props for Sidebar, including function to start new chat
interface SidebarProps {
  onNewChat: () => void;
  // recentChats: RecentChat[]; // Add this back when implementing history
}

const Sidebar: React.FC<SidebarProps> = ({ onNewChat }) => {
  return (
    // Increase background opacity for a darker look
    <div className="w-72 p-3 flex flex-col text-gray-300 backdrop-blur-md bg-black/60 border-r border-white/10">
      {/* Top Section with Claude logo - Placeholder */}
      <div className="flex items-center space-x-2 p-2 mb-4">
        <span className="font-semibold text-lg text-white">ClooseAi</span>
      </div>

      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        // Keep button style consistent or adjust if needed
        className="flex items-center bg-white/10 text-white px-3 py-2 rounded-lg mb-5 hover:bg-white/20 text-sm w-full"
      >
        <PlusIcon className="h-5 w-5 mr-2 text-gray-400" />
        New chat
      </button>

      {/* Recents Section - Currently empty, ready for history implementation */}
      <div className="flex-1 overflow-y-auto mb-4">
        <h2 className="text-xs text-gray-400 uppercase font-semibold mb-2 px-3">Recents</h2>
        <ul className="space-y-1">
          {/* Placeholder: Recent chats will be mapped here */}
          {/* {recentChats.map(chat => (
            <li key={chat.id} className="text-sm hover:bg-gray-800 p-2 rounded-md cursor-pointer truncate">{chat.title}</li>
          ))} */}
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="mt-auto border-t border-white/10 pt-3">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 cursor-pointer">
          <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">User</div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">User</span>
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
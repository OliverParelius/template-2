import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { type UseChatHelpers } from 'ai/react';

interface ChatInputProps extends Pick<UseChatHelpers, 'input' | 'handleInputChange' | 'handleSubmit'> {}

const ChatInput: React.FC<ChatInputProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative flex items-center bg-gray-800 rounded-xl">
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you today?"
            rows={1}
            className="flex-1 bg-transparent text-gray-200 rounded-lg p-3 pr-14 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500 text-sm font-mono"
            style={{ minHeight: '52px', maxHeight: '200px' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:bg-orange-600 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput; 
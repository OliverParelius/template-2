import React from 'react';
import { PaperAirplaneIcon, PlusIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { type UseChatHelpers } from 'ai/react';

interface ChatInputProps extends Pick<UseChatHelpers, 'input' | 'handleInputChange' | 'handleSubmit'> {}

const ChatInput: React.FC<ChatInputProps> = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <div className="p-4 border-t border-gray-700/50 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative flex items-center bg-gray-800 rounded-xl p-1">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg"
            aria-label="Attach file"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg mr-1"
            aria-label="Edit last message"
          >
            <PencilSquareIcon className="h-5 w-5" />
          </button>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you today?"
            rows={1}
            className="flex-1 bg-transparent text-gray-200 rounded-lg p-3 pr-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500 text-sm"
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:bg-orange-600 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </form>
        <p className="text-xs text-gray-600 text-center mt-2">
          Claude 3.5 Sonnet · Free Research Preview. <a href="#" className="underline hover:text-gray-400">Terms</a>
        </p>
      </div>
    </div>
  );
};

export default ChatInput; 
"use client";
import { useState } from "react";

interface Message {
  id: number;
  user: string;
  content: string;
  isOnline: boolean;
}

const AdminPage = () => {
  // Initial list of messages
  const [messages] = useState<Message[]>([
    { id: 1, user: "John Doe", content: "Hello, I need help.", isOnline: true },
    {
      id: 2,
      user: "Jane Smith",
      content: "My service is not working.",
      isOnline: false,
    },
  ]);

  // Tracks the reply for each message by message ID
  const [replies, setReplies] = useState<{ [key: number]: string }>({});

  // Handle changes in the reply textarea
  const handleReplyChange = (messageId: number, reply: string) => {
    setReplies((prev) => ({ ...prev, [messageId]: reply }));
  };

  // Handle sending replies (right now it just logs it, but you can integrate API calls)
  const handleReply = (messageId: number) => {
    const reply = replies[messageId];
    if (reply?.trim()) {
      console.log(`Reply to message ID ${messageId}: ${reply}`);
      setReplies((prev) => ({ ...prev, [messageId]: "" })); // Clear the reply after sending
    }
  };

  return (
    <main className="flex flex-col mt-24 items-center min-h-screen bg-custom-gray py-8">
      <div className="w-full max-w-4xl p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        {/* Online Users Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Online Users</h2>
          <div className="flex space-x-4">
            {messages
              .filter((msg) => msg.isOnline)
              .map((msg) => (
                <div
                  key={msg.id}
                  className="bg-green-200 text-green-800 px-4 py-2 rounded-md"
                >
                  {msg.user}
                </div>
              ))}
          </div>
        </section>

        {/* Messages Section */}
        <section className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 bg-gray-50 border rounded-md shadow-sm"
            >
              {/* User and Status */}
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">{msg.user}</span>
                <span
                  className={`px-2 py-1 text-sm rounded-md ${
                    msg.isOnline
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {msg.isOnline ? "Online" : "Offline"}
                </span>
              </div>

              {/* Message Content */}
              <p className="mb-4 text-gray-600">{msg.content}</p>

              {/* Reply Textarea */}
              <textarea
                value={replies[msg.id] || ""}
                onChange={(e) => handleReplyChange(msg.id, e.target.value)}
                placeholder="Type your reply..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Send Reply Button */}
              <button
                onClick={() => handleReply(msg.id)}
                className="mt-3 bg-custom-gray1 text-white px-4 py-2 rounded-md hover:bg-custom-gray2"
              >
                Send Reply
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default AdminPage;

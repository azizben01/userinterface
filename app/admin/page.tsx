"use client";
import { useState } from "react";

interface Message {
  id: number;
  user: string;
  content: string;
  isOnline: boolean;
}

const AdminPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "John Doe", content: "Hello, I need help.", isOnline: true },
    {
      id: 2,
      user: "Jane Smith",
      content: "My service is not working.",
      isOnline: false,
    },
  ]);

  const [reply, setReply] = useState("");

  const handleReply = (messageId: number) => {
    console.log(`Reply to message ID ${messageId}: ${reply}`);
    setReply(""); // Clear the input after replying
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <p className="font-bold">
              {msg.user} ({msg.isOnline ? "Online" : "Offline"})
            </p>
            <p>{msg.content}</p>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              className="mt-2 p-2 border rounded w-full"
            />
            <button
              onClick={() => handleReply(msg.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Send Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;

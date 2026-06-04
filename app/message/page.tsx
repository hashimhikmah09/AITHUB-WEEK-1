"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

type Message = {
  id?: string;
  content: string;
  attachmentUrl?: string | null;
  isRead?: boolean;
  senderId?: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  const conversationId = "123"; // replace with real conversationId

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlNmFmZDFlLWFlMmItNDM0Mi04NTcwLTI0NzE2ZGRiYzk0MSIsImlhdCI6MTc3OTA1MjM0MiwiZXhwIjoxNzc5NjU3MTQyfQ.0pySHhEvUe9hwXFko-QYnleQijo0pAApV1qCHOi3SXA"; // replace with real auth token

  // =========================
  // SOCKET CONNECTION
  // =========================
  useEffect(() => {
    socket.emit("joinConversation", conversationId);

    socket.on("newMessage", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [conversationId]);

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = async () => {
    if (!text.trim()) return;

    const res = await fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        conversationId,
        content: text,
      }),
    });

    const data = await res.json();

    // 2. Emit real-time update
  socket.emit("sendMessage", {
    conversationId,
    content: text,
    senderId: "currentUserId", // replace with actual user ID
  });

    if (data.success) {
      setMessages((prev) => [...prev, data.data]);
      setText("");
    } else {
      console.error(data.message);
    }
  };

  // =========================
  // LOAD INITIAL MESSAGES (OPTIONAL)
  // =========================
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(
        `http://localhost:5000/messages/${conversationId}?page=1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        setMessages(data.data);
      }
    };

    fetchMessages();
  }, [conversationId]);

  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <div className="w-80 border-r p-4">
        <h2 className="font-bold text-2xl">Conversations</h2>

        <div className="mt-6 p-4 rounded-2xl bg-gray-100 flex justify-between items-center">
          <span>SolarTech Ltd</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            2
          </span>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="flex">
              <div className="bg-yellow-100 p-4 rounded-2xl max-w-md">
                <p>{msg.content}</p>

                {msg.attachmentUrl && (
                  <a href={msg.attachmentUrl} target="_blank" className="text-blue-500 block mt-2">
                    View Attachment
                  </a>
                )}

                <div className="text-xs text-gray-500 mt-2">
                  {msg.isRead ? "Seen" : "Sent"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-4 border-t flex gap-3">
          <input value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Type message..."
            className="flex-1 border rounded-xl p-3"
          />

          <button onClick={sendMessage} className="bg-yellow-500 text-white px-6 rounded-xl">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
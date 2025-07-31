import React, { useState } from "react";

export default function TabDiskusi({ ticketNo, currentUser = "Anda" }) {
    const [messages, setMessages] = useState([
        { id: 1, author: "User", text: "Mohon bantuan update jadwal.", time: "10:20" },
        { id: 2, author: "Helpdesk", text: "Baik, sedang ditindaklanjuti.", time: "10:35" },
    ]);
    const [text, setText] = useState("");

    const send = () => {
        if (!text.trim()) return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), author: currentUser, text, time: new Date().toLocaleTimeString().slice(0,5) },
        ]);
        setText("");
    };

    return (
        <div className="rounded border bg-white dark:bg-gray-800 p-4">
            <div className="font-semibold mb-3">Diskusi #{ticketNo}</div>
            <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
                {messages.map((m) => (
                    <div key={m.id} className="border rounded p-2 text-sm">
                        <div className="flex justify-between">
                            <span className="font-medium">{m.author}</span>
                            <span className="text-gray-500">{m.time}</span>
                        </div>
                        <p className="mt-1">{m.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex gap-2">
                <input
                    className="flex-1 border rounded px-3 py-2 text-sm"
                    placeholder="Tulis pesan…"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                />
                <button onClick={send} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    Kirim
                </button>
            </div>
        </div>
    );
}

import React, { useState } from "react";

export default function TabFile({ ticketNo }) {
    const [files, setFiles] = useState([]);

    const onPick = (e) => {
        const picked = Array.from(e.target.files || []);
        const mapped = picked.map((f) => ({
            id: `${f.name}-${f.size}-${f.lastModified}`,
            name: f.name,
            size: `${(f.size / 1024).toFixed(1)} KB`,
        }));
        setFiles((prev) => [...prev, ...mapped]);
        e.target.value = ""; // reset
    };

    const remove = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

    return (
        <div className="rounded border bg-white dark:bg-gray-800 p-4">
            <div className="font-semibold mb-3">Lampiran #{ticketNo}</div>

            <div className="flex items-center gap-3">
                <label className="inline-flex items-center px-3 py-2 rounded border bg-gray-50 hover:bg-gray-100 cursor-pointer">
                    <input type="file" multiple className="hidden" onChange={onPick} />
                    Upload File
                </label>
                <div className="text-xs text-gray-500">PNG/JPG/PDF disarankan &lt; 5MB</div>
            </div>

            <ul className="mt-4 space-y-2">
                {files.length === 0 && (
                    <li className="text-sm text-gray-500">Belum ada file terunggah.</li>
                )}
                {files.map((f) => (
                    <li key={f.id} className="flex justify-between items-center border rounded px-3 py-2 text-sm">
                        <span>{f.name} <span className="text-gray-500">({f.size})</span></span>
                        <button
                            className="text-red-600 hover:underline"
                            onClick={() => remove(f.id)}
                        >
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

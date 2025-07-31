import React from "react";

export default function TabLog({ logs = [] }) {
    if (!logs.length) {
        logs = [
            { time: "2024-12-31 11:21", actor: "User",      action: "Create Ticket" },
            { time: "2024-12-31 12:10", actor: "Helpdesk",  action: "Assign ke Unit IT" },
            { time: "2025-01-01 09:02", actor: "Unit IT",   action: "Update status → In Progress" },
        ];
    }

    return (
        <div className="rounded border bg-white dark:bg-gray-800 p-4">
            <div className="font-semibold mb-3">Log Aktivitas</div>
            <div className="overflow-x-auto">
                <table className="min-w-[560px] table-auto text-sm border border-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-3 py-2 text-left">Waktu</th>
                        <th className="border px-3 py-2 text-left">Pelaku</th>
                        <th className="border px-3 py-2 text-left">Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {logs.map((l, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td className="border px-3 py-2">{l.time}</td>
                            <td className="border px-3 py-2">{l.actor}</td>
                            <td className="border px-3 py-2">{l.action}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

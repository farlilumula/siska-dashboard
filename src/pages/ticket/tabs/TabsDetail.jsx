import React from "react";

const Box = ({ title, color = "green", children }) => {
    const map = {
        green: "text-green-600 bg-green-100",
        emerald: "text-emerald-600 bg-emerald-100",
        sky: "text-sky-600 bg-sky-100",
    };
    const colorClass = map[color] || map.green;

    return (
        <div className="rounded border p-4">
            <div className={`flex items-center gap-2 text-sm font-semibold ${colorClass}`}>
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/60 text-current">
          i
        </span>
                {title}
            </div>
            <div className="text-sm mt-3 text-gray-800">{children}</div>
        </div>
    );
};

export default function TabsDetail({ ticket }) {
    return (
        <div className="space-y-4">
            <div>
                <h3 className="font-semibold">Rangkuman</h3>
                <p className="text-sm text-gray-700 mt-1">{ticket?.ringkasanJudul}</p>
            </div>

            <Box title="Catatan dari User" color="green">
                <pre className="whitespace-pre-wrap">{ticket?.ringkasanIsi}</pre>
            </Box>

            <Box title="Catatan dari SuperUser" color="emerald">
                <p>{ticket?.catatanSU || "—"}</p>
            </Box>
        </div>
    );
}

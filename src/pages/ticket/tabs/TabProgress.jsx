import React from "react";

export default function TabProgress({ steps = [] }) {
    if (!steps.length) {
        steps = [
            { label: "Dibuat",          time: "2024-12-31 11:21", done: true  },
            { label: "Diterima HD",     time: "2024-12-31 12:10", done: true  },
            { label: "Diproses Unit IT", time: "2025-01-01 09:02", done: true  },
            { label: "Verifikasi User", time: "",                 done: false },
        ];
    }

    return (
        <div className="rounded border bg-white dark:bg-gray-800 p-4">
            <div className="font-semibold mb-3">Progress Tiket</div>
            <ol className="relative border-l pl-4">
                {steps.map((s, idx) => (
                    <li key={idx} className="mb-6 ml-2">
            <span
                className={[
                    "absolute -left-[9px] inline-flex h-4 w-4 items-center justify-center rounded-full ring-4",
                    s.done ? "bg-green-500 ring-green-100" : "bg-gray-300 ring-gray-100",
                ].join(" ")}
            />
                        <h4 className="text-sm font-medium">
                            {s.label} {s.time && <span className="text-gray-500 font-normal">({s.time})</span>}
                        </h4>
                    </li>
                ))}
            </ol>
        </div>
    );
}

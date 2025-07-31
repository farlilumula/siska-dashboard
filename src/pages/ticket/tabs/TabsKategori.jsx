import React from "react";

export default function TabsKategori({ ticket }) {
    return (
        <div className="space-y-3">
            <h3 className="font-semibold">Kategori Tiket</h3>
            <div className="text-sm text-gray-700">
                Kategori: <span className="font-medium">{ticket?.kategori || "-"}</span>
            </div>

            {/* Contoh tambahan field lain jika ada */}
            <div className="rounded border bg-gray-50 p-3 text-sm">
                Konten kategori / metadata lain dapat ditempatkan di sini.
            </div>
        </div>
    );
}

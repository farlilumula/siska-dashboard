import React from "react";
import Tabs from "@/components/Tabs.jsx";
import TabsDetail from "@/pages/ticket/tabs/TabsDetail.jsx";
import TabsKategori from "@/pages/ticket/tabs/TabsKategori.jsx";

export default function TabRingkasan({ ticket }) {
    return (
        <div className="rounded border bg-white dark:bg-gray-800">
            <div className="border-b px-4 py-3 font-semibold">Informasi Tiket</div>
            <Tabs
                className="pt-3"
                defaultKey="detail"
                items={[
                    { key: "detail", label: "Detail Tiket",   content: <TabsDetail ticket={ticket} /> },
                    { key: "kategori", label: "Tiket Kategori", content: <TabsKategori ticket={ticket} /> },
                ]}
            />
        </div>
    );
}

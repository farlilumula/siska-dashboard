import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Tabs from "@/components/Tabs.jsx";
import TabRingkasan from "@/pages/ticket/tabs/TabRingkasan.jsx";
import TabDiskusi from "@/pages/ticket/tabs/TabDiskusi.jsx";
import TabFile from "@/pages/ticket/tabs/TabFile.jsx";
import TabProgress from "@/pages/ticket/tabs/TabProgress.jsx";
import TabLog from "@/pages/ticket/tabs/TabLog.jsx";

// ===== Dummy store: ganti dengan fetch API sesuai backend Anda =====
const TICKETS = [
    {
        no: "KFA/3128/A200/0000028704",
        outletCode: "KF.BM GORONTALO",
        bmGroup: "UNIT BISNIS GORONTALO",
        createdAt: "31 Desember 2024, 11:21:12",
        status: "REJECT",
        statusColor: "bg-red-500",
        priority: "Urgent",
        priorityColor: "bg-orange-500",
        kontakPIC: "082238353606",
        subgroup: "UNIT BISNIS GORONTALO",
        ditugaskanKepada: "Unit Information Technology - Unit Information Technology",
        ringkasanJudul: "Permohonan Perubahan Shift Kerja KF Telaga UB Gorontalo",
        ringkasanIsi: `Dear IT Kantor Pusat, Tim Operasional I Love You`,
        catatanUser: "Catatan dari User...",
        catatanSU: "Catatan dari SuperUser...",
        kategori: "Application",
        lampiranUser: [],
        lampiranIT: [],
    },
    // bisa tambah data lain...
];

function getTicketByNo(no) {
    return TICKETS.find((t) => t.no === no);
}

// ===== Komponen kecil =====
const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${className}`} >
    {children}
  </span>
);

const InfoRow = ({ label, value }) => (
    <div className="flex justify-between py-2 text-sm border-b last:border-b-0">
        <span className="text-gray-500">{label}</span>
        <span className="font-medium text-right ml-4">{value || "-"}</span>
    </div>
);

export default function TicketDetail() {
    const { no } = useParams();
    const navigate = useNavigate();
    const [ticket, setTicket] = useState(null);

    // Ambil data (dummy). Ganti dengan fetch API.
    useEffect(() => {
        // Jika pakai API:
        // fetch(`/api/tickets/${encodeURIComponent(no)}`).then(...);
        setTicket(getTicketByNo(no));
    }, [no]);

    const notFound = useMemo(() => !ticket, [ticket]);

    if (notFound) {
        return (
            <div className="p-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-blue-600 hover:underline"
                        >
                            ← Kembali
                        </button>
                    </div>
                    <div className="rounded border bg-white dark:bg-gray-800 p-6">
                        <h2 className="text-lg font-semibold">Tiket tidak ditemukan</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            No tiket <span className="font-mono">{no}</span> tidak tersedia.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="max-w-6xl mx-auto space-y-4">
                {/* Header bar */}
                <div className="rounded-lg bg-blue-900 text-white p-4 flex items-center justify-between">
                    <div className="space-y-0.5">
                        <h1 className="text-lg font-semibold">
                            #{ticket.no}
                        </h1>
                        <div className="text-sm opacity-90">
                            {ticket.outletCode} — {ticket.bmGroup}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-xs">Create Date : {ticket.createdAt}</div>
                        <Badge className={`${ticket.priorityColor} text-white`}>{ticket.priority}</Badge>
                    </div>
                </div>

                {/* Tabs */}
                <div className="rounded-lg bg-white dark:bg-gray-800 p-0 ring-1 ring-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="rounded border bg-white dark:bg-gray-800">
                                <Tabs
                                    defaultKey="ringkasan"
                                    items={[
                                        {
                                            key: "ringkasan",
                                            label: "Ringkasan",
                                            content: <TabRingkasan ticket={ticket} />,
                                        },
                                        {
                                            key: "diskusi",
                                            label: "Diskusi",
                                            content: <TabDiskusi ticketNo={ticket.no} />,
                                        },
                                        {
                                            key: "file",
                                            label: "File",
                                            content: <TabFile ticketNo={ticket.no} />,
                                        },
                                        {
                                            key: "progress",
                                            label: "Progress Tiket",
                                            content: <TabProgress />,
                                        },
                                        {
                                            key: "log",
                                            label: "Log Aktivitas",
                                            content: <TabLog />,
                                        },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Kanan (1 kolom): detail card + lampiran */}
                        <div className="space-y-4">
                            <div className="rounded border bg-white dark:bg-gray-800">
                                <div className="border-b px-4 py-3 font-semibold">Detail Ticket</div>
                                <div className="p-4 space-y-1.5">
                                    <InfoRow label="No Tiket" value={ticket.no} />
                                    <InfoRow label="Group" value={`${ticket.outletCode} - ${ticket.bmGroup}`} />
                                    <InfoRow label="Kontak PIC" value={ticket.kontakPIC} />
                                    <InfoRow label="Sub Group" value={ticket.subgroup} />
                                    <InfoRow label="Ditugaskan Kepada" value={ticket.ditugaskanKepada} />
                                    <div className="flex justify-between py-2 text-sm border-b">
                                        <span className="text-gray-500">Status Tiket</span>
                                        <Badge className={`${ticket.statusColor} text-white`}>{ticket.status}</Badge>
                                    </div>
                                    <div className="flex justify-between py-2 text-sm">
                                        <span className="text-gray-500">Prioritas</span>
                                        <Badge className={`${ticket.priorityColor} text-white`}>{ticket.priority}</Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white dark:bg-gray-800">
                                <div className="border-b px-4 py-3 font-semibold">Lampiran</div>

                                <div className="p-4 space-y-4">
                                    <div className="rounded border p-3">
                                        <div className="text-sm font-medium mb-2">Lampiran User</div>
                                        {ticket.lampiranUser?.length ? (
                                            <ul className="list-disc list-inside text-sm">
                                                {ticket.lampiranUser.map((f, i) => (
                                                    <li key={i}>
                                                        <a href={f.url} className="text-blue-600 underline">{f.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="text-sm text-gray-500">Tidak ada Lampiran</div>
                                        )}
                                    </div>

                                    <div className="rounded border p-3">
                                        <div className="text-sm font-medium mb-2">Lampiran Unit Information Technology</div>
                                        {ticket.lampiranIT?.length ? (
                                            <ul className="list-disc list-inside text-sm">
                                                {ticket.lampiranIT.map((f, i) => (
                                                    <li key={i}>
                                                        <a href={f.url} className="text-blue-600 underline">{f.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="text-sm text-gray-500">Tidak ada Lampiran</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Link
                                    to="/Ticket"
                                    className="flex-1 text-center rounded border px-3 py-2 text-sm hover:bg-gray-50"
                                >
                                    ← Kembali ke List
                                </Link>
                                <a
                                    href="#"
                                    className="flex-1 text-center rounded bg-blue-600 text-white px-3 py-2 text-sm hover:bg-blue-700"
                                >
                                    Tindak Lanjut
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

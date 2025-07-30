import React, { useState, useEffect } from "react";
import TiketFilterCards from "./TiketFilterCards.jsx";
import { Link, useNavigate  } from "react-router-dom";
import { GrFormView } from "react-icons/gr";

const dataTiket = [
    {
        no: "KFA/3128/A200/0000028704",
        status: "REJECT",
        statusColor: "bg-red-500",
        lastStatus: "Unit Information Technology",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek",
    },
    {
        no: "KFA/3128/A200/0000035007",
        status: "RESOLVED",
        statusColor: "bg-blue-500",
        lastStatus: "Unit Information Technology",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek",
    },
    {
        no: "KFA/3128/A200/0000007360",
        status: "IN PROGRESS",
        statusColor: "bg-gray-900",
        lastStatus: "Unit Operation Online Business & Digital Supporting",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek",
    },
    {
        no: "KFA/3128/A200/0000003185",
        status: "IN PROGRESS",
        statusColor: "bg-gray-900",
        lastStatus: "Unit Operation Excellent & Performance Wilayah II",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek",
    },
    {
        no: "KFA/3128/A200/0000006369",
        status: "PENDING",
        statusColor: "bg-orange-500",
        lastStatus: "ServiceDesk",
        konfirmasi: "https://scm-kt.buaya.dev/software-engineering/smartstock",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek",
    },
];

// ======== Modal View sederhana ========
function ViewTicketModal({ isOpen, onClose, data }) {
    if (!isOpen) return null;

    // Tutup ESC
    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onEsc);
        return () => window.removeEventListener("keydown", onEsc);
    }, [onClose]);

}

export default function Ticket() {
    const [showMenuNo, setShowMenuNo] = useState(null); // simpan nomor tiket untuk dropdown yang terbuka
    const [isViewOpen, setViewOpen] = useState(false);
    const [viewData, setViewData] = useState(null);

    const [filteredData, setFilteredData] = useState(dataTiket);

    const navigate = useNavigate();

    const handleView = (ticketNo) => {
        const found =
            filteredData.find((row) => row.no === ticketNo) ||
            dataTiket.find((row) => row.no === ticketNo);
        if (found) {
            setViewData(found);
            setViewOpen(true);
            setShowMenuNo(null);
        }
        navigate(`/ticket/${encodeURIComponent(ticketNo)}`);
    };

    const handleFilterChange = (filters) => {
        let filtered = dataTiket;

        if (filters.outlet?.length > 0) {
            filtered = filtered.filter((item) =>
                filters.outlet.includes(item.outlet)
            );
        }

        if (filters.status?.length > 0) {
            filtered = filtered.filter((item) =>
                filters.status.includes(item.status)
            );
        }

        if (filters.prioritas?.length > 0) {
            filtered = filtered.filter((item) =>
                filters.prioritas.includes(item.prioritas || "NORMAL")
            );
        }

        setFilteredData(filtered);
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl mb-4">List Tiket</h2>
                <Link
                    to="/ticket/CreateTicket"
                    className="bg-orange-500 text-white px-4 py-2 rounded m-5 shadow-lg shadow-orange-500/35"
                >
                    + Tiket Baru
                </Link>
            </div>

            <div>
                <TiketFilterCards onFilterChange={handleFilterChange} />
            </div>

            <div className="mb-4 flex justify-between items-center">
                <button className="bg-gray-100 px-4 py-2 rounded">Show 100 rows ▼</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Excel</button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-[1000px] border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-4 py-2 border">No Tiket</th>
                        <th className="px-4 py-2 border">Aksi</th>
                        <th className="px-4 py-2 border">Last Status</th>
                        <th className="px-4 py-2 border">Konfirmasi</th>
                        <th className="px-4 py-2 border">Nama BM</th>
                        <th className="px-4 py-2 border">Outlet</th>
                        <th className="px-4 py-2 border">Kategori</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Rangkuman</th>
                        <th className="px-4 py-2 border">Tanggal Ticket</th>
                        <th className="px-4 py-2 border">Assign SU</th>
                        <th className="px-4 py-2 border">Assign Helpdesk</th>
                        <th className="px-4 py-2 border">Assign Group</th>
                        <th className="px-4 py-2 border">Prioritas</th>
                    </tr>
                    </thead>

                    <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.no} className="hover:bg-gray-100">
                            <td className="border px-4 py-2 whitespace-nowrap">{item.no}</td>

                            {/* Aksi + Dropdown (harus di dalam td yang sama, dan wrapper relative) */}
                            <td className="border px-4 py-2 text-center">
                                <div className="relative inline-block">
                                    <button
                                        onClick={() =>
                                            setShowMenuNo(showMenuNo === item.no ? null : item.no)
                                        }
                                        className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-xs text-white"
                                        title="Menu aksi"
                                    >
                                        ...
                                    </button>

                                    {showMenuNo === item.no && (
                                        <div className="absolute right-0 mt-2 bg-white border rounded shadow z-50 w-32">
                                            <button
                                                onClick={() => handleView(item.no)}
                                                className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2"
                                            >
                                                <GrFormView /> View
                                            </button>
                                            {/* Tambah item lain di sini bila perlu */}
                                        </div>
                                    )}
                                </div>
                            </td>

                            <td className="border px-4 py-2 whitespace-nowrap">{item.lastStatus}</td>
                            <td className="border px-4 py-2 text-blue-500 underline text-xs break-all">
                                {item.konfirmasi || "-"}
                            </td>
                            <td className="border px-4 py-2">{item.bm}</td>
                            <td className="border px-4 py-2">{item.outlet}</td>
                            <td className="border px-4 py-2">{item.kategori}</td>

                            <td className="border px-4 py-2">
                  <span
                      className={`text-white text-xs px-2 py-1 rounded whitespace-nowrap ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                            </td>

                            <td className="border px-4 py-2 whitespace-nowrap">{item.rangkuman}</td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination contoh */}
            <div className="mt-4 flex justify-end">
                <button className="border px-4 py-1 rounded bg-gray-100 hover:bg-gray-200">
                    Previous
                </button>
                <button className="ml-2 border px-4 py-1 rounded bg-blue-500 text-white">
                    1
                </button>
            </div>

            {/* Modal View */}
            <ViewTicketModal
                isOpen={isViewOpen}
                onClose={() => {
                    setViewOpen(false);
                    setViewData(null);
                }}
                data={viewData}
            />
        </div>
    );
}

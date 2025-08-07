import { Link } from "react-router-dom";
import TrendChart from "../../pages/dashboard/TrendChart.jsx";
import StatusCard from "@/components/StatusCard.jsx"

const Home = () => {
    const dummyTickets = [
        { id: 1, judul: "Tiket: Tidak Bisa Login", status: "Pending" },
        { id: 2, judul: "Tiket: Aplikasi Error", status: "Resolved" },
        { id: 3, judul: "Tiket: Data Tidak terbentuk", status: "Reject" },
        { id: 4, judul: "Tiket: Mutasi User", status: "In Progress" },
        { id: 5, judul: "Tiket: Salah Faktor Jual", status: "Approval SU" },
    ];

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <h2 className="text-2xl mb-4">Dashboard Superuser</h2>

            <div>
                <StatusCard/>
            </div>

            {/* List Tiket */}
            <div className="flex justify-between items-center mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <h3 className="text-xl font-semibold">Daftar Tiket</h3>
                <Link to="/ticket/CreateTicket" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 shadow-lg shadow-orange-500/35">
                    + Tambah Tiket
                </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mb-5">
                {dummyTickets.map((ticket) => (
                    <Link to={`/tiket/detail/${ticket.id}`} key={ticket.id} className="block p-3 border-b hover:bg-gray-100">
                        <div className="flex justify-between">
                            <span className="text-gray-500">{ticket.judul}</span>
                            <span className="text-sm text-gray-500">{ticket.status}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <TrendChart />
            </div>

        </div>
    );
};

export default Home;

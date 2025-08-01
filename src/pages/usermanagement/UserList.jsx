import React, { useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash } from "react-icons/fi";
import {assets} from "@/assets/assets";
import {Link} from "react-router-dom";

const users = [
    {
        id: 1,
        name: "Super Admin",
        status: "Active",
        email: "admin@admin.com",
        lastLogin: "01 Aug 2025, 13:01",
        company: "Admin",
        avatar: "https://via.placeholder.com/40",
    },
    {
        id: 2,
        name: "su.cilegon",
        status: "Active",
        email: "su.cilegon@kimiafarmaapotek.co.id",
        lastLogin: "24 Jul 2025, 16:07",
        company: "ServiceDesk",
        avatar: "https://via.placeholder.com/40",
    },
];

export default function UserList() {
    const [showMenuId, setShowMenuId] = useState(null);

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">User List</h2>
                <Link
                    to="/CreatePegawai"
                    className="bg-orange-500 text-white px-4 py-2 rounded m-5 shadow-lg shadow-orange-500/35">
                    + Add New
                </Link>
            </div>

            <div className="mb-4 flex justify-start items-center gap-2">
                <button className="bg-gray-100 px-4 py-2 rounded dark:bg-gray-700">Show 100 rows ▼</button>
                <button className="bg-gray-100 px-4 py-2 rounded dark:bg-gray-700">Copy ▼</button>
                <button className="bg-gray-100 px-4 py-2 rounded dark:bg-gray-700">Excel</button>
            </div>

            <div className="overflow-auto rounded shadow border">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 font-semibold">
                    <tr>
                        <th className="px-4 py-2 text-left">Image</th>
                        <th className="px-4 py-2 text-left">Nama Lengkap</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Last Login</th>
                        <th className="px-4 py-2 text-left">Company</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2">
                                <img
                                    src={assets.loginBg}
                                    alt={user.name}
                                    className="h-8 w-8 rounded-full"
                                />
                            </td>
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">
                  <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                      }`}
                  >
                    {user.status}
                  </span>
                            </td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.lastLogin}</td>
                            <td className="px-4 py-2">{user.company}</td>
                            <td className="px-4 py-2 relative">
                                <button
                                    className="text-gray-600 hover:text-blue-600"
                                    onClick={() =>
                                        setShowMenuId(showMenuId === user.id ? null : user.id)
                                    }
                                >
                                    <FiMoreVertical />
                                </button>

                                {/* Dropdown */}
                                {showMenuId === user.id && (
                                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
                                        <button
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => alert(`Edit ${user.name}`)}
                                        >
                                            <FiEdit /> Edit
                                        </button>
                                        <button
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                                            onClick={() => alert(`Delete ${user.name}`)}
                                        >
                                            <FiTrash /> Delete
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

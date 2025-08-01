import React, { useState } from "react";

export default function FormInsertUser() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "admin@admin.com",
        email: "",
        phone: "",
        kodeBM: "",
        kodeOutlet: "",
        role: "",
        password: "********",
        isActive: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="bg-blue-900 text-white text-lg px-4 py-2 font-semibold rounded-t">
                Insert New User
            </div>

            <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* First Name */}
                <div>
                    <label className="block mb-1 text-sm font-medium">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="John"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Doe"
                    />
                </div>

                {/* Username */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        disabled
                        className="w-full bg-gray-100 border rounded px-3 py-2"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="0813-xxxx-xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Role Account */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Role Account</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Choose One</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="ServiceDesk">ServiceDesk</option>
                    </select>
                </div>

                {/* Kode Business Manager */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Kode Business Manager</label>
                    <select
                        name="kodeBM"
                        value={formData.kodeBM}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Choose One</option>
                        <option value="BM001">BM001</option>
                        <option value="BM002">BM002</option>
                    </select>
                </div>

                {/* Kode Outlet */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Kode Outlet</label>
                    <select
                        name="kodeOutlet"
                        value={formData.kodeOutlet}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Choose One</option>
                        <option value="OUT001">OUT001</option>
                        <option value="OUT002">OUT002</option>
                    </select>
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Account Status */}
                <div>
                    <label className="block mb-1 text-sm font-medium">Account Status</label>
                    <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label className="text-sm">Tick For Active User</label>
                </div>
            </form>
            <hr/>



            {/* Footer Buttons */}
            <div className="flex justify-end gap-2 px-4 pb-4 mt-5">
                <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                    Close
                </button>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

// ModalEditPegawai.jsx
import React, { useEffect } from "react";

const noop = () => {};

export default function ModalEditPegawai({
                                             isOpen,
                                             onClose = noop,
                                             onSubmit = noop,
                                             formData = {},
                                             setFormData = noop,
                                         }) {
    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...(prev || {}), [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // tutup ESC
    // useEffect(() => {
    //     const onEsc = (e) => e.key === "Escape" && onClose();
    //     window.addEventListener("keydown", onEsc);
    //     return () => window.removeEventListener("keydown", onEsc);
    // }, [onClose]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (formData) {
            setFormData((prev) => ({
                ...prev,
                npp_combined: formData.kode_npp && formData.nama_pegawai ? `${formData.kode_npp}|${formData.nama_pegawai}` : "",
                bm_combined: formData.kode_bm && formData.nama_bm ? `${formData.kode_bm}|${formData.nama_bm}` : "",
                outlet_combined: formData.kode_outlet && formData.nama_outlet ? `${formData.kode_outlet}|${formData.nama_outlet}` : "",
            }));
        }
    }, [formData?.id]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
            {/* backdrop klik → close */}
            <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

            <div className="relative bg-white dark:bg-gray-800 w-full max-w-2xl mx-auto rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
                <h2 className="text-xl font-bold mb-4">Edit Pegawai</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Kode NPP & Nama Pegawai</label>
                            <select
                                name="bm_combined"
                                value={formData.npp_combined || ""}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const [kode, nama] = val.split("|");
                                    setFormData((prev) => ({
                                        ...prev,
                                        npp_combined: val,
                                        kode_npp: kode || "",
                                        nama_pegawai: nama || "",
                                    }));
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" disabled>Pilih Nama Pegawai</option>
                                <option value="19970117B|EVA RIZKIA BAGI, S.Farm">19970117B - EVA RIZKIA BAGI, S.Farm</option>
                                <option value="19880518A|FARLY C LUMULA">19880518A - FARLY C LUMULA</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-medium">No HP</label>
                            <input
                                type="text"
                                name="no_hp"
                                value={formData?.no_hp ?? ""}
                                placeholder="contoh : 082238353606"
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Kode BM & Nama BM</label>
                            <select
                                name="bm_combined"
                                value={formData.bm_combined || ""}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const [kode, nama] = val.split("|");
                                    setFormData((prev) => ({
                                        ...prev,
                                        bm_combined: val,
                                        kode_bm: kode || "",
                                        nama_bm: nama || "",
                                    }));
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" disabled>Pilih BM</option>
                                <option value="3126|KF.BM GORONTALO">3126 - KF.BM GORONTALO</option>
                                <option value="3122|KF.BM JAKARTA">3122 - KF.BM JAKARTA</option>
                            </select>

                        </div>
                        <div>
                            <label className="block font-medium">Kode Outlet & Nama Outlet</label>
                            <select
                                name="outlet_combined"
                                value={formData.outlet_combined || ""}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const [kode, nama] = val.split("|");
                                    setFormData((prev) => ({
                                        ...prev,
                                        outlet_combined: val,
                                        kode_outlet: kode || "",
                                        nama_outlet: nama || "",
                                    }));
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" disabled>Pilih Outlet</option>
                                <option value="AZ06|KF.JDS">AZ06 - KF.JDS</option>
                                <option value="AZ03|KF.HB JASSIN">AZ03 - KF.HB JASSIN</option>
                                <option value="AZ04|KF.HB LIMBOTO">AZ04 - KF.HB LIMBOTO</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

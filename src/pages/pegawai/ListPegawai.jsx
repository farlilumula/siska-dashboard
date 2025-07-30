import { useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash } from "react-icons/fi";
import ModalEditPegawai from "./ModalEditPegawai";
import ModalTambahPegawai from "./ModalTambahPegawai.jsx";

const dataPegawaiAwal = [
  {
    id: 1,
    kodeNPP: "19970117B",
    kodeBM: "3126",
    namaBM: "UNIT BISNIS GORONTALO",
    kodeOutlet: "A203",
    namaOutlet: "KF. HB JASSIN GORONTALO",
    namaPegawai: "EVA RIZKIA BAGI, S.Farm",
    noHp: "081243809934",
  },
];

export default function ListPegawai() {
  const [showMenuId, setShowMenuId] = useState(null);
  const [data, setData] = useState(dataPegawaiAwal);

  // Tambah
  const [isAddOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    kode_npp: "",
    kode_bm: "",
    nama_bm: "",
    kode_outlet: "",
    nama_outlet: "",
    nama_pegawai: "",
    no_hp: "",
    bm_combined:"",
    outlet_combined:""
  });

  // Edit
  const [isEditOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState(null); // { ...pegawai }

  const handleDelete = (id) => {
    if (confirm("Yakin ingin menghapus pegawai ini?")) {
      setData((prev) => prev.filter((item) => item.id !== id));
      // tutup menu aksi
      setShowMenuId(null);
    }
  };

  const openEditModal = (pegawai) => {
    // Pre-fill form dari data tabel → mapping key agar sesuai dengan ModalEdit
    setEditForm({
      id: pegawai.id,
      kodeNPP: pegawai.kodeNPP,
      kodeBM: pegawai.kodeBM,
      namaBM: pegawai.namaBM,
      kodeOutlet: pegawai.kodeOutlet,
      namaOutlet: pegawai.namaOutlet,
      namaPegawai: pegawai.namaPegawai,
      noHp: pegawai.noHp,
    });
    setEditOpen(true);
    setShowMenuId(null); // tutup dropdown saat modal dibuka
  };

  const handleUpdatePegawai = (updatedPegawai) => {
    setData((prev) =>
        prev.map((item) => (item.id === updatedPegawai.id ? updatedPegawai : item))
    );
    setEditOpen(false);
    setEditForm(null);
  };

  const handleCreatePegawai = () => {
    // mapping form tambah → data baris
    const newRow = {
      id: Date.now(),
      kodeNPP: addForm.kode_npp,
      kodeBM: addForm.kode_bm,
      namaBM: addForm.nama_bm,
      kodeOutlet: addForm.kode_outlet,
      namaOutlet: addForm.nama_outlet,
      namaPegawai: addForm.nama_pegawai,
      noHp: addForm.no_hp,
    };

    setData((prev) => [newRow, ...prev]);
    setAddOpen(false);
    setAddForm({
      kode_npp: "",
      kode_bm: "",
      nama_bm: "",
      kode_outlet: "",
      nama_outlet: "",
      nama_pegawai: "",
      no_hp: "",
    });
  };

  return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 h-screen">
        <h2 className="text-xl font-light mb-4">Data Pegawai</h2>

        <button
            onClick={() => setAddOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-3"
        >
          + Add
        </button>

        <div className="overflow-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Kode NPP</th>
              <th className="border px-3 py-2 text-left">Kode BM</th>
              <th className="border px-3 py-2 text-left">Nama BM</th>
              <th className="border px-3 py-2 text-left">Kode Outlet</th>
              <th className="border px-3 py-2 text-left">Nama Outlet</th>
              <th className="border px-3 py-2 text-left">Nama Pegawai</th>
              <th className="border px-3 py-2 text-left">No. HP</th>
            </tr>
            </thead>
            <tbody>
            {data.map((pegawai) => (
                <tr key={pegawai.id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2 relative">
                    <div className="flex items-center gap-2">
                      <button
                          onClick={() =>
                              setShowMenuId(showMenuId === pegawai.id ? null : pegawai.id)
                          }
                          className="text-blue-600 hover:text-blue-800 focus:outline-none"
                      >
                        <FiMoreVertical />
                      </button>
                      {pegawai.kodeNPP}
                    </div>

                    {/* Dropdown menu */}
                    {showMenuId === pegawai.id && (
                        <div className="absolute left-0 mt-1 bg-white border rounded shadow z-20 w-32">
                          <button
                              onClick={() => openEditModal(pegawai)}
                              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2"
                          >
                            <FiEdit /> Edit
                          </button>
                          <button
                              onClick={() => handleDelete(pegawai.id)}
                              className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-100 flex items-center gap-2"
                          >
                            <FiTrash /> Delete
                          </button>
                        </div>
                    )}
                  </td>
                  <td className="border px-3 py-2">{pegawai.kodeBM}</td>
                  <td className="border px-3 py-2">{pegawai.namaBM}</td>
                  <td className="border px-3 py-2">{pegawai.kodeOutlet}</td>
                  <td className="border px-3 py-2">{pegawai.namaOutlet}</td>
                  <td className="border px-3 py-2">{pegawai.namaPegawai}</td>
                  <td className="border px-3 py-2">{pegawai.noHp}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Modal Edit */}
        <ModalEditPegawai
            isOpen={isEditOpen}
            onClose={() => {
              setEditOpen(false);
              setEditForm(null);
            }}
            formData={editForm || {}}
            setFormData={setEditForm}
            onSubmit={handleUpdatePegawai}
        />

        {/* Modal Tambah */}
        <ModalTambahPegawai
            isOpen={isAddOpen}
            onClose={() => setAddOpen(false)}
            onSubmit={handleCreatePegawai}
            formData={addForm}
            setFormData={setAddForm}
        />
      </div>
  );
}

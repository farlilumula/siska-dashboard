import { useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash } from "react-icons/fi";
import ModalEditPegawai from "./ModalEditPegawai";
import ModalTambahPegawai from "./ModalTambahPegawai.jsx";
import InfoModal from "@/components/InfoModal";
import {HiOutlineFolderAdd, HiOutlineFolderRemove} from "react-icons/hi";

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
    outlet_combined: "",
    npp_combined: ""
  });

  // Edit
  const [isEditOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState(null);

  // Modal Info (setelah delete)
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");
  const [infoVariant, setInfoVariant] = useState("success");

  const handleDelete = (id) => {
    setData((prev) => prev.filter((row) => row.id !== id));
    setShowMenuId(null);

    // tampilkan modal info
    setInfoVariant("success");
    setInfoMsg("Berhasil dihapus.");
    setInfoOpen(true);
  };

  const openEditModal = (pegawai) => {
    setEditForm({
      id: pegawai.id,
      kode_npp: pegawai.kodeNPP,
      nama_pegawai: pegawai.namaPegawai,
      kode_bm: pegawai.kodeBM,
      nama_bm: pegawai.namaBM,
      kode_outlet: pegawai.kodeOutlet,
      nama_outlet: pegawai.namaOutlet,
      no_hp: pegawai.noHp,
      bm_combined: `${pegawai.kodeBM}|${pegawai.namaBM}`,
      outlet_combined: `${pegawai.kodeOutlet}|${pegawai.namaOutlet}`,
      npp_combined: `${pegawai.kodeNPP}|${pegawai.namaPegawai}`,
    });
    setEditOpen(true);
    setShowMenuId(null);
  };

  const handleUpdatePegawai = (updatedPegawai) => {
    const formatted = {
      id: updatedPegawai.id,
      kodeNPP: updatedPegawai.kode_npp,
      kodeBM: updatedPegawai.kode_bm,
      namaBM: updatedPegawai.nama_bm,
      kodeOutlet: updatedPegawai.kode_outlet,
      namaOutlet: updatedPegawai.nama_outlet,
      namaPegawai: updatedPegawai.nama_pegawai,
      noHp: updatedPegawai.no_hp,
    };
    setData((prev) => prev.map((item) => item.id === formatted.id ? formatted : item));
    setEditOpen(false);
    setEditForm(null);
  };

  const handleCreatePegawai = () => {
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

        <div className="overflow-auto h-screen">
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
                      {showMenuId === pegawai.id ? (
                          <button
                              onClick={() => setShowMenuId(null)}
                              className="text-red-600 hover:text-red-800 focus:outline-none"
                              title="Tutup menu aksi"
                          >
                            <HiOutlineFolderRemove className="size-5"/>
                          </button>
                      ) : (
                          <button
                              onClick={() => setShowMenuId(pegawai.id)}
                              className="text-green-600 hover:text-green-800 focus:outline-none"
                              title="Buka menu aksi"
                          >
                            <HiOutlineFolderAdd className="size-5"/>
                          </button>
                      )}
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

        {/* Modal Info (setelah delete) */}
        <InfoModal
            isOpen={infoOpen}
            onClose={() => setInfoOpen(false)}
            title="Status"
            message={infoMsg || "Berhasil dihapus."}
            variant={infoVariant}     // "success" default
            okText="OK"
            showClose={true}
        />
      </div>
  );
}

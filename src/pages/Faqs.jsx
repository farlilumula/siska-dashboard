import AccordionItem from "@/components/AccordionItem.jsx";
import {Link} from "react-router-dom";
import {LuDatabase, LuExternalLink, LuPodcast, LuShieldQuestion} from "react-icons/lu";
import {assets} from "@/assets/assets.js";
import * as React from "react";

export default function FAQSection() {
    return (
        <div className="bg-white min-h-screen p-6">
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5 mb-8 overflow-hidden h-60">
                <div className="absolute inset-y-0 right-1/4 w-1/6 h-full bg-orange-500 transform skew-x-[-30deg] origin-right z-0" />
                <div className="absolute h-full inset-y-0 right-1/12">
                    <img src={assets.faq} className="bg-cover h-full w-auto" alt="logo"/>
                </div>
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-sky-950 drop-shadow-sm">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <p className="text-sm text-gray-100 mt-2 max-w-xl">
                        Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda di FAQ kami,
                        Anda selalu dapat menghubungi kami atau
                    </p>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
                        📧 Email Kami
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded p-4 shadow-sm bg-gray-50 max-h-screen overflow-y-auto">
                    <h2 className="font-bold text-indigo-800 mb-4"><LuShieldQuestion className="inline-flex m-2 size-6" />Pertanyaan Umum</h2>
                    <AccordionItem title="Apa itu SISKA?">
                        SiSKA atau Sistem Informasi Support Kimia Farma, merupakan aplikasi yang digunakan untuk menampung seluruh tiket permasalahan yang berkaitan dengan operasional perusahaan khususnya aplikasi 7Solution, baik itu permasalahan bug aplikasi sampai dengan master data dan seluruh permasalahan yang dialami oleh Outlet Kimia Farma seluruh Indonesia ataupun Kantor Pusat Kimia Farma.
                    </AccordionItem>
                    <AccordionItem title="Panduan Penggunaan SISKA">
                        Dokumen panduan pengguna dapat diakses melalui link dibawah ini : <Link className="flex bold text-gray-800 text-shadow-2xs">Link Dokumen<LuExternalLink className="m-1"/></Link>
                    </AccordionItem>
                    <AccordionItem title="Template Berita Acara">
                        Sehubungan dengan sudah berakhirnya kerjasama antara Kimia Farma & Telkom, maka dari itu seluruh berita acara harus menggunakan format yang baru, template format dapat di download pada link dibawah ini: <Link className="flex bold text-gray-800 text-shadow-2xs">Link Dokumen<LuExternalLink className="m-1"/></Link>
                    </AccordionItem>
                </div>

                {/* Kolom 2 - Alur & Data */}
                <div className="border rounded p-4 shadow-sm bg-gray-50">
                    <h2 className="font-bold text-indigo-800 mb-4"><LuDatabase className="inline-flex m-2 size-6"/>Alur & Data</h2>
                    <AccordionItem title="Bisnis Proses SISKA">
                        Bisnis Proses dapat diakses melalui link dibawah ini : <Link className="inline-flex bold text-gray-800 text-shadow-2xs">Link Dokumen<LuExternalLink className="m-1"/></Link>
                    </AccordionItem>
                    <AccordionItem title="Perbedaan status tiket SISKA?">
                        <h3 className="mb-3">Penjelasan mengenai perbedaan status tiket yang ada di SiSKA :</h3>
                        <div>
                            <span className="m-4 font-bold">Status</span>
                            <span className="m-3 font-bold">Deskripsi</span>
                            <hr className="m-4"/>
                            <ul className="space-y-2 text-sm">
                                <li className="grid grid-cols-12 gap-2 items-baseline mb-10">
                                    <span className="col-span-3 bg-yellow-300 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      APPROVAL SU
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sedang dilakukan pengecekan oleh SuperUser, jika sudah dilakukan maka tiket akan diteruskan ke SupportKP.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
    <span className="inline-block col-span-3 bg-blue-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
      HELPDESK
    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sedang dilakukan pengecekan oleh tim SupportKP.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
    <span className="col-span-3 bg-red-400 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
      PENDING
    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sedang dilakukan pengecekan oleh tim Development.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
                                    <span className="col-span-3 bg-gray-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      IN PROGRESS
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sedang dilakukan perbaikan oleh tim yang diassign oleh tim SupportKP.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
                                    <span className="col-span-3 bg-indigo-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      RESOLVED
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sudah dilakukan perbaikan oleh tim terkait dan perlu dikonfirmasi oleh SuperUser apakah tiket tersebut sudah sesuai atau belum dengan permasalahan.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
                                    <span className="col-span-3 bg-indigo-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      RESOLVED SU
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket sudah dilakukan perbaikan oleh SuperUser dan perlu dikonfirmasi oleh Outlet apakah tiket tersebut sudah sesuai atau belum dengan permasalahan.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
                                    <span className="col-span-3 bg-orange-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      REJECT
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket dikembalikan oleh SuperUser / Outlet karena perbaikan yang dilakukan belum sesuai dan perlu dilakukan perbaikan kembali oleh tim yang ditunjuk.
                                    </p>
                                </li>
                                <li className="grid grid-cols-12 gap-2 items-start mb-10">
                                    <span className="col-span-3 bg-green-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                      CLOSED
                                    </span>
                                    <p className="col-span-9 text-justify">
                                        Tiket dianggap selesai karena perbaikan yang dilakukan sudah sesuai dengan permasalahan.
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </AccordionItem>
                </div>

                {/* Kolom 3 - Permasalahan & Kategori */}
                <div className="border rounded p-4 shadow-sm bg-gray-50 max-h-screen overflow-y-auto">
                    <h2 className="font-bold text-indigo-800 mb-4"><LuPodcast className="inline-flex m-2 size-6"/>Permasalahan & Kategori</h2>
                    <AccordionItem title="Permasalahan">
                        <h3 className="mb-4">Penjelasan mengenai perbedaan kategori permasalahan :</h3>
                        <table className="text-sm w-full table-auto">
                            <thead>
                            <tr>
                                <th className="text-left font-bold pb-2">Permasalahan</th>
                                <th className="text-left font-bold pb-2">Deskripsi</th>
                                <hr/>
                            </tr>
                            </thead>
                            <tbody className="divide-y">
                            <tr>
                                <td className="py-1 font-bold">Application</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan Aplikasi 7Solution seperti : Bug Aplikasi termasuk Bridging, LiPH, Salah Input, DO Delivery, Saldo Transaksi dan lain - lain yang masih berhubungan dengan Aplikasi 7Solution.</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Akun 7S (SS, POS, dll)</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan Akun 7S seperti : Reset, Void, Akun Baru.</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Data Request</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan Laporan seperti : Konsinyasi, IM, Status Faktur, Dropping, dan lain - lain yang berhubungan dengan data maupun laporan Aplikasi 7Solution.</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Software</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan aplikasi seperti : Update Windows, Installasi SAP, Microsoft Office, Driver Printer dan lain - lain.</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Hardware</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan perangakt keras seperti : Printer, TV, PC, Perangkat POS, Laptop dan lain - lain.</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Infrastructure</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan Infrastructure seperti : Jaringan Internet, Server..</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold">Pengajuan Email</td>
                                <td className="py-1 text-gray-500">Permasalahan yang berkaitan dengan Pengajuan Email seperti : Pengajuan Email Baru, Hapus Email Pegawai Resign dan lain - lain.</td>
                            </tr>
                            </tbody>
                        </table>
                    </AccordionItem>
                </div>
            </div>
        </div>
    );
}

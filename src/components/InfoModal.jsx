// src/components/InfoModal.jsx
import React from "react";

export default function InfoModal({
                                      isOpen,
                                      onClose,
                                      title = "Informasi",
                                      message = "",
                                      variant = "success", // "success" | "error" | "info"
                                      okText = "OK",
                                      showClose = true, // tampilkan tombol Close tambahan
                                  }) {
    if (!isOpen) return null;

    const colorMap = {
        success: "bg-green-100 text-green-800 border-green-300",
        error: "bg-red-100 text-red-800 border-red-300",
        info: "bg-blue-100 text-blue-800 border-blue-300",
    };

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50">
            {/* backdrop klik → close */}
            <div className="absolute inset-0" onClick={onClose} aria-hidden />

            <div className="relative bg-white dark:bg-gray-800 w-full max-w-md mx-auto rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold mb-3">{title}</h2>

                <div className={`rounded border px-3 py-2 mb-4 text-sm ${colorMap[variant]}`}>
                    {message}
                </div>

                <div className="flex justify-end gap-2">
                    {showClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
                        >
                            Close
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                        {okText}
                    </button>
                </div>
            </div>
        </div>
    );
}

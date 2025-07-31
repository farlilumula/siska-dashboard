import React, { useState, useEffect, useId } from "react";

/**
 * Tabs generik tanpa dependensi.
 * props:
 * - items: [{ key, label, content }]
 * - defaultKey: string
 * - onChange?: (key) => void
 * - className?: string
 */
export default function Tabs({ items = [], defaultKey, onChange, className = "" }) {
    const firstKey = items[0]?.key;
    const [active, setActive] = useState(defaultKey || firstKey);
    const uid = useId();

    useEffect(() => {
        if (defaultKey) setActive(defaultKey);
    }, [defaultKey]);

    const handleClick = (key) => {
        setActive(key);
        onChange?.(key);
    };

    const activeItem = items.find((i) => i.key === active) || items[0];

    return (
        <div className={className}>
            {/* Tab list */}
            <div role="tablist" className="flex gap-6 border-b px-4">
                {items.map((it) => {
                    const selected = it.key === active;
                    return (
                        <button
                            key={it.key}
                            role="tab"
                            aria-selected={selected}
                            aria-controls={`${uid}-${it.key}-panel`}
                            id={`${uid}-${it.key}-tab`}
                            onClick={() => handleClick(it.key)}
                            className={[
                                "py-2 text-sm -mb-[1px] border-b-2",
                                selected
                                    ? "font-medium border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-600 hover:text-blue-600",
                            ].join(" ")}
                        >
                            {it.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab panel */}
            <div
                role="tabpanel"
                id={`${uid}-${activeItem?.key}-panel`}
                aria-labelledby={`${uid}-${activeItem?.key}-tab`}
                className="p-4"
            >
                {activeItem?.content}
            </div>
        </div>
    );
}

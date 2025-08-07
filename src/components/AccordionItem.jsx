import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                className="flex justify-between items-center w-full py-3 font-medium text-left text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? <FiChevronUp /> : <FiChevronDown/>}
            </button>
            {isOpen && <div className="pb-4 text-sm text-gray-600">{children}</div>}
        </div>
    );
}

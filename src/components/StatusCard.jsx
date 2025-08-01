import {
    CheckCircleIcon,
    ChatBubbleBottomCenterTextIcon,
    MinusCircleIcon,
    TicketIcon,
    ArrowTopRightOnSquareIcon,
    XCircleIcon,
} from "@heroicons/react/24/solid";

const CardInfo = ({ title, value, icon, iconBg }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-lg dark:shadow-gray-700 dark:bg-gray-800">
        <div>
            <h4 className="text-xl font-semibold dark:text-gray-400">{value}</h4>
            <p className="text-sm dark:text-gray-400">{title}</p>
        </div>
        <div className={`p-2 rounded ${iconBg}`}>{icon}</div>
    </div>
);


export default function StatusCard () {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-250">
                <CardInfo
                    title="Total Tiket"
                    value="159"
                    icon={<TicketIcon className="w-6 h-6 text-yellow-500" />}
                    iconBg="bg-yellow-100"
                />
                <CardInfo
                    title="Persetujuan SU"
                    value="6"
                    icon={<CheckCircleIcon className="w-6 h-6 text-yellow-500" />}
                    iconBg="bg-yellow-100"
                />
                <CardInfo
                    title="Pending Tiket"
                    value="1"
                    icon={<MinusCircleIcon className="w-6 h-6 text-red-500" />}
                    iconBg="bg-red-100"
                />
                <CardInfo
                    title="Dalam Proses"
                    value="6"
                    icon={<ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-indigo-500" />}
                    iconBg="bg-indigo-100"
                />
                <CardInfo
                    title="Terselesaikan"
                    value="2"
                    icon={<ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500" />}
                    iconBg="bg-blue-100"
                />
                <CardInfo
                    title="Selesai"
                    value="142"
                    icon={<CheckCircleIcon className="w-6 h-6 text-emerald-500" />}
                    iconBg="bg-emerald-100"
                />
                <CardInfo
                    title="Selesai SU"
                    value="1"
                    icon={<CheckCircleIcon className="w-6 h-6 text-emerald-500" />}
                    iconBg="bg-emerald-100"
                />
                <CardInfo
                    title="Dikembalikan"
                    value="1"
                    icon={<XCircleIcon className="w-6 h-6 text-red-500" />}
                    iconBg="bg-red-100"
                />
            </div>
        </div>

    )
}
"use client";

export default function MenuCard({ item }) {
    return (
        <div className="rounded-xl overflow-hidden border bg-white drak:bg-[#071827]">
            <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="text-sm font-medium">{item.price}</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
                <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 rounded bg-black text-white">Add</button>
                    <button className="px-3 py-1 rounded border">Details</button>
                </div>
            </div>
        </div>
    )
}
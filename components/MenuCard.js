"use client";
export default function MenuCard({ id, name, price, category, image }) {
  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-[#071827]">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-3" />
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
        </div>
        <div className="text-sm font-semibold">₹{price}</div>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 rounded bg-[#a66a4a] text-white">Add</button>
        <button className="px-3 py-1 rounded border">Details</button>
      </div>
    </div>
  );
}
export default MenuCard;
function MenuCard({ name, price, desc, img }) {
    return (
        <div className="rounded-xl border p-4 bg-white dark:bg-[#071827]">
            <div className="flex gap-4">
                <img src={img} alt={name} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                        <h3 className="font semibold text-lg">{name}</h3>
                        <div className="text-sm font-medium">₹{price}</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>

                    <div className="mt-3">
                        <button className="px-3 py-1 rounded bg-[#a66a4a] text-white text-sm">Add</button>
                        <button className="ml-2 px-3 py-1 rounded border text-sm">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
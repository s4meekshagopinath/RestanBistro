import Navbar from "../../components/Navbar";

export default function MenuPage() {
  const items = [
    {
      id: 1,
      name: "Bruschetta",
      price: "₹199",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh-g98gvGo8Li9z0i3EamC32B1MEi7IHFUQ&s",
      desc: "Grilled bread topped with fresh tomatoes and herbs.",
    },
    {
      id: 2,
      name: "Truffle Pasta",
      price: "₹699",
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      desc: "Rich creamy pasta infused with premium truffle oil.",
    },
    {
      id: 3,
      name: "Classic Tiramisu",
      price: "₹299",
      image:
        "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      desc: "Coffee-flavored dessert layered with mascarpone.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
                <div className="font-semibold text-[#a66a4a]">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
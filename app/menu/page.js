import Navbar from "../../components/Navbar"
import MenuCard from "../../components/MenuCard";

export default function MenuPage() {
  const items = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 699,
      category: "Main",
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
    },
    {
      id: 2,
      name: "Herb Chicken",
      price: 499,
      category: "Main",
      image:
        "https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
    },
    {
      id: 3,
      name: "Fresh Mojito",
      price: 199,
      category: "Drinks",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Menu</h1>

        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 rounded-full border">All</button>
          <button className="px-4 py-2 rounded-full border">Starters</button>
          <button className="px-4 py-2 rounded-full border">Mains</button>
          <button className="px-4 py-2 rounded-full border">Desserts</button>
          <button className="px-4 py-2 rounded-full border">Drinks</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <MenuCard key={it.id} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}
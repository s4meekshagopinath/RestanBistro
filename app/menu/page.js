"use client";
import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";

export default function MenuPage() {
  const items = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 699,
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      desc: "Creamy truffle tagliatelle.",
      category: "Mains",
    },
    {
      id: 2,
      name: "Herb Chicken",
      price: 549,
      image:
        "https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
      desc: "Roasted chicken with fresh herbs.",
      category: "Mains",
    },
    {
      id: 3,
      name: "Fresh Mojito",
      price: 199,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg",
      desc: "Lime, mint and soda.",
      category: "Drinks",
    },
    {
      id: 4,
      name: "BBQ Smash Burger",
      price: 349,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg",
      desc: "Smashed chicken patty, cheddar, onion tanglers, and smoky BBQ sauce.",
      category: "Mains",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 299,
      image:
        "https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
      desc: "Crisp romaine with parmesan.",
      category: "Starters",
    },
    {
      id: 6,
      name: "Tiramisu",
      price: 259,
      image:
        "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      desc: "Classic Italian dessert.",
      category: "Desserts",
    },
  ];

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((i) => i.category === filter);
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-center mb-6">Menu</h1>

      <div className="flex justify-center gap-3 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === c ? "bg-[#a66a4a] text-white" : "border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((it) => (
          <MenuCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  )
}
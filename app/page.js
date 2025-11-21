import Navbar from "../components/Navbar";

export default function Home() {
  const items = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 699,
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      desc: "Creamy truffle tagliatelle.",
    },
    {
      id: 2,
      name: "Herb Chicken",
      price: 549,
      image:
        "https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
      desc: "Roasted chicken with fresh herbs.",
    },
    {
      id: 3,
      name: "Fresh Mojito",
      price: 199,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
      desc: "Lime, mint and soda.",
    },
    {
      id: 4,
      name: "BBQ Smash Burger",
      price: 349,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg",
      desc: "Smashed chicken patty, cheddar, onion tanglers, and smoky BBQ sauce.",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 299,
      image:
        "https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
      desc: "Crisp romaine with parmesan.",
    },
    {
      id: 6,
      name: "Tiramisu",
      price: 259,
      image:
        "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      desc: "Classic Italian dessert.",
    },
  ];

  return (
    <div>
      <Navbar />

      <header
        className="relative h-screen md:h-[88vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/f659b/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
            Delicious Food and Fine Dining Experience
            <br />
            <span className="font-medium text-lg md:text-2xl">
              A cozy dining experience with delicious flavors and aesthetic ambience
            </span>
          </h1>

          <div className="mt-8 flex gap-4">
            <a
              href="/menu"
              className="px-6 py-3 rounded-full bg-[#a66a4a] hover:bg-[#8c563c] text-white font-semibold"
            >
              View Menu
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-white text-white font-semibold bg-white/10"
            >
              Book Table
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Dishes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="rounded-xl overflow-hidden border p-0 bg-white">
              <img src={it.image} alt={it.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{it.name}</h3>
                  <div className="text-sm font-medium">₹{it.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1 rounded bg-black text-white">Add</button>
                  <button className="px-3 py-1 rounded border">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">About / Other sections here</div>
      </div>
    </div>
  );
}
import Navbar from "../components/Navbar";

export default function Home() {
  const items = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 699,
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      desc: "Creamy truffle tagliatelle."
    },
    {
      id: 2,
      name: "Herb Chicken",
      price: 549,
      image:
        "https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
      desc: "Roasted chicken with fresh herbs."
    },
    {
      id: 3,
      name: "Fresh Mojito",
      price: 199,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
      desc: "Lime, mint and soda."
    },
    {
      id: 4,
      name: "BBQ Smash Burger",
      price: 349,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg",
      desc: "Smashed chicken patty, cheddar, onion tanglers, and smoky BBQ sauce."
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 299,
      image:
        "https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
      desc: "Crisp romaine with parmesan."
    },
    {
      id: 6,
      name: "Tiramisu",
      price: 259,
      image:
        "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      desc: "Classic Italian dessert."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <header className="relative h-screen md:h-[88vh] bg-cover bg-center">
        <div className="absolute inset-0">
          <img
            src="https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/f659b/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.png"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
              Delicious Food and Fine Dining Experience
            </h1>
            <p className="text-white/90 mt-4 text-sm md:text-lg">
              A cozy dining experience with delicious flavors and aesthetic ambience
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="/menu"
                className="px-6 py-3 rounded-full bg-[#ff8a00] hover:bg-[#e27400] text-white font-semibold"
              >
                View Menu
              </a>
              <a
                href="#book"
                className="px-6 py-3 rounded-full border border-white text-white font-semibold bg-white/10"
              >
                Book Table
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Dishes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="rounded-xl overflow-hidden border bg-white shadow-sm">
              <div className="w-full h-48 overflow-hidden">
                <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
              </div>
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

        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Opening Hours</h3>
              <p className="text-gray-600 mb-4">
                A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between border-b pb-2">Sunday - Tuesday <span className="font-medium">10:00 - 21:00</span></li>
                <li className="flex justify-between border-b pb-2">Wednesday - Thursday <span className="font-medium">11:30 - 22:00</span></li>
                <li className="flex justify-between">Friday - Saturday <span className="font-medium">12:00 - 23:00</span></li>
              </ul>
            </div>

            <div className="h-64 bg-cover bg-center rounded-lg shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541542684-0a1d12a2d4d6?auto=format&fit=crop&w=1200&q=60')" }} />
          </div>
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-6">About</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Restan Bistro is dedicated to serving delicious, carefully crafted dishes in a warm and elegant setting. We use fresh ingredients and traditional techniques to bring out bold flavors that keep guests coming back.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75" alt="Restan" className="h-10 mx-auto md:mx-0" />
              <p className="text-sm mt-3 text-gray-300">© {new Date().getFullYear()} Restan Bistro. All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-300">Contact: +91 9483657402</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
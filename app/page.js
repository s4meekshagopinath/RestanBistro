import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <header
        className="relative h-screen md:h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/f659b/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
            Delicious Food and Fine Dining Experience
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl">
            A cozy dining experience with delicious flavors and aesthetic ambience
          </p>

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

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">
          Featured Dishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
            src="https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg"
            alt="Truffle pasta"
            className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Truffle Pasta</h3>
              <p className="text-gray-600 text-sm mt-1">
                Creamy truffle fettuccine with herbs
              </p>
              <p className="text-black mt-2 font-semibold">₹499</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
            src="https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg"
            alt="herb chicken"
            className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Herb Chicken</h3>
              <p className="text-gray-600 text-sm mt-1">
                Juicy grilled chicken with fresh herbs
              </p>
              <p className="text-black mt-2 font-semibold">₹549</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
            src="https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
            alt="fresh mojito"
            className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Fresh Mojito</h3>
              <p className="text-gray-600 text-sm mt-1">
                Refreshing mint lime drink
              </p>
              <p className="text-black mt-2 font-semibold">₹199</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
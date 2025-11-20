import Navbar from "../components/Navbar";

export default function Home() {
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

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#3b2f2f]">
          Featured Dishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#e6dcc7]">
            <img
              src="https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg"
              alt="Truffle pasta"
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-[#3b2f2f]">Truffle Pasta</h3>
              <p className="text-[#6f5c4f] text-sm mt-2">
                Creamy & rich with shaved truffle
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#e6dcc7]">
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141"
              alt="herb chicken"
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-[#3b2f2f]">Herb Chicken</h3>
              <p className="text-[#6f5c4f] text-sm mt-2">
                Tender grilled chicken with herbs
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#e6dcc7]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ef0rHxVHEIT-8D7Gq0xSQp3p1kCjV93ZOA&s"
              alt="Mojito"
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-[#3b2f2f]">Classic Mojito</h3>
              <p className="text-[#6f5c4f] text-sm mt-2">
                Refreshing lime & mint cocktail
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
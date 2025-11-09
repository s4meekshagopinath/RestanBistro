export default function Home() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold mb-3">Restan Bistro</h1>

        <p className="text-base mb-6">A A cozy dining experience with delicious flavors and aesthetic ambience</p>

        <div className="flex justifyicenter gap-4">
          <a href="/menu" className="px-5 py-2 bg-blacl text-white rounded-md">
            View Menu
          </a>
          <a href="/contact" className="px-5 py-2 border border-black rounded-md">
            Book Table
          </a>
        </div>
      </div>
    </div>
  );
}

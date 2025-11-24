export default function menu(){
  const menu =[
    {
      img:"https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      id:1,
      title:"Truffle Pasta",
      p:"Creamy truffle tagliatelle.",
      rate:"₹699"
    },
    {
      img:"https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
      id:2,
      title:"Caesar Salad",
      p:"Crisp romaine tossed with parmesan.",
      rate:"₹299"
    },
    {
      img:"https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
      id:3,
      title:"Fresh Mojito",
      p:"Lime, mint and soda.",
      rate:"₹199"
    },
    {
      img:"https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      id:4,
      title:"Tiramisu",
      p:"Classic Italian dessert.",
      rate:"₹259"
    }
  ]
  return(
    <div className="Relative">
     <div className="hidden md:block md:h-[50px] w-full bg-yellow-800 flex items-center">
      <div className="text-white text-xl ml-2.5 ">
        <a className="pl-1.5">Phone: ‪+4733378901‬</a>
        <a className="pl-5"> Email: food@restan.com</a>
      </div>
       <div className="flex items-center justify-center ml-[700px]">
        <select className="text-white text-xl">
          <option>English</option>
        </select>
        <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-[25px]">
          f
        </div>
         <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-[25px]">
          t
        </div>
         <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-[25px]">
          I
        </div>
         <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-[25px]">
          f
        </div>
       </div>
     </div>

     <div className="bg-contain h-[400px] md:h-[550px] w-full md:w-[1530px]" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/japanese-sushi-beautiful-blooming-orchid-white-background-close-up-horizontal-photo-29988748.jpg')" }}>
        <div className="flex">
          <div>
            <img className="h-[100px] w-[140px] ml-15 pt-4" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" />
          </div>
          <div className="hidden md:block text-white text-2xl mt-10 ml-[230px]">
            <select><option>Home</option></select>
            <select><option>Pages</option></select>
            <select><option>Menu</option></select>
            <select><option>Blog</option></select>
            <select><option>Shop</option></select>
          </div>
          <div className="hidden md:block text-xl text-white border-white border-2 p-5 flex items-center mt-4 ml-[450px]">
            Reservation
          </div>
        </div>
        <hr className="border-0.5 border-gray-400 mt-4" />
        <div className="text-5xl text-white mt-[90px] text-center font-semibold">
          Restaurant Menu
        </div>
     </div>

     <div className="flex md:flex-row flex-col">
      <div className="h-[600px] w-full md:w-[500px] mt-[50px] md:ml-[70px]">
        <img src="https://www.1mg.com/articles/wp-content/uploads/2025/08/731.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="md:ml-[100px] w-full">
        <div className="flex justify-end mr-6 mt-4" >
          <h2 className="hidden md:block h-[30px] border-2 border-gray-500 text-black w-[50px] flex items-center justify-center">Half</h2>
          <h2 className="hidden md:block h-[30px] border-2 border-gray-500 text-black w-[50px] flex items-center justify-center ml-2.5">Full</h2>
        </div>

        <div className="md:ml-[0px] mt-6 px-6">
          {
            menu.map(menu=>(
              <div className="flex pt-5 items-center space-x-6 border-b border-gray-200 pb-6" key={menu.id}>
                <img className="hidden md:block rounded-full h-[125px] w-[125px] object-cover" src={menu.img} />
                <div className="ml-0 md:ml-[5px]">
                  <h2 className="text-2xl font-semibold">{menu.title}</h2>
                  <h3 className="text-gray-600 mt-1">{menu.p}</h3>
                </div>
                <div className="ml-auto text-2xl text-yellow-800">
                  <h2>{menu.rate}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
     </div>

     <div className="h-[600px] w-full md:w-[1200px] bg-gray-800 border-2 md:ml-[165px] mt-[100px] rounded-3xl flex items-center">
      <div className="px-8">
        <h2 className="text-5xl text-white mb-6 font-semibold">30 Minutes Delivery!</h2>
        <h2 className="text-white text-2xl mb-6">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you an experience that you’ll have a hard time forgetting.</h2>
        <button className="border-2 border-gray-600 p-5 text-white text-2xl rounded-3xl bg-amber-900 hover:bg-black hover:text-white">Order Now!</button>
      </div>
      <div className="hidden md:block">
        <img className="h-[500px] mt-5" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75" />
      </div>
     </div>
    </div>
  );
}
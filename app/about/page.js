export default function(){
  return(
   <div className="relative">
      <div className="hidden md:block md:h-[50px] w-full bg-yellow-800 flex items-center ">
        <div className="flex text-white text-2xl ml-5">
            <h2>Phone: ‪+4733378901‬</h2>
         <h2 className="ml-4"> Email: food@restan.com</h2>
        </div>
       <div className="flex ml-[1000px] mt-[-10px] text-white">
        <select className="text-2xl">
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
          <option>Malayalam</option>
          <option>Telugu</option>
        </select>
        <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          F
        </div>
          <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          I
        </div>
          <div className="h-[20px] w-[30px] text-white border-white rounded-full bg-black flex items-center justify-center ml-5">
          T
        </div>
       </div>
      </div>

      <div className="h-[300px] md:h-[550px] bg-contain w-full md:w-[1530px]"
        style={{ backgroundImage:"url('https://thumbs.dreamstime.com/b/japanese-sushi-beautiful-blooming-orchid-white-background-close-up-horizontal-photo-29988748.jpg')" }}>
        <div className="relative flex">
           <div className="h-[80px] pt-5">
            <img className="h-[50px] md:h-[80px] ml-8"
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75" />
           </div>

           <div className="hidden md:block text-white text-xl mt-12 ml-[300px]">
            <select className="pl-4"><option>Home</option></select>
            <select className="pl-4"><option>Pages</option></select>
            <select className="pl-4"><option>Menu</option></select>
            <select className="pl-4"><option>Blog</option></select>
            <select className="pl-4"><option>Shop</option></select>
           </div>

           <div className="hidden md:block text-white border-2 border-white p-5 h-[80px] w-[200px] text-2xl mt-5 ml-[300px] hover:bg-white hover:text-black">
            Reservation
           </div>
        </div>
        
        <div className="text-white text-5xl font-semibold text-center mt-10">About Us</div>
        <div className="text-white text-xl text-center mt-5">about-us</div>
      </div>

      <hr className="border-2 border-white mt-2" />

      <div className="relative bg-yellow-200 h-[400px] md:h-[500px] w-full">
        <div className="text-yellow-700 text-3xl text-center pt-7">----OUR TRUSTED 8K HAPPY PARTNER----</div>
        <div className="h-[150px] w-[300px] md:h-[200px] md:w-[1400px] md:ml-[60px] ml-15 mt-[50px] md:mt-[100px] bg-contain"
          style={{ backgroundImage:"url('images/hotel.png')" }}></div>
      </div>

      <div className="flex md:flex-row flex-col md:space-x-5">
        <div className="flex space-x-8 mt-[100px] ml-5">
          <img className="h-[500px] w-[400px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSGa9FB-MtWsfswXmIJ2VvRvOTE7R0F_c8tERlJkvn2HqWBkzRqpYaAGO5HpMnBS__bA&usqp=CAU" />
          <img className="hidden md:block h-[500px] w-[400px]"
            src="https://www.shutterstock.com/image-photo/restaurant-kitchen-portrait-confident-chef-600nw-2645077225.jpg" />
        </div>

        <div className="h-[500px] w-full md:w-[700px] border-gray-200 border-2 mt-23">
            <h2 className="text-amber-700 text-3xl font-semibold ml-[50px] mt-[50px]">About us</h2>

             <h2 className="text-5xl dark:text-white text-black font-semibold mt-5 ml-[50px]">
               We Invite You To Visit Restan Bistro
             </h2>

             <p className="text-amber-700 mt-5 ml-[50px]">
               Step inside and you'll find a space that feels warm, familiar, and welcoming.
               Our dishes are made with care, using fresh ingredients and recipes that bring
               people together. Whether you're here for a relaxed evening, a family dinner,
               or a quiet moment with good food, we aim to make every visit memorable.
               It's the kind of place where time slows down a little, and the experience
               stays with you long after you leave.
             </p>

             <button className="border-2 border-white p-5 bg-amber-800 text-white hover:bg-black ml-[50px] mt-8">
               Discover more
             </button>
        </div>
      </div>
   </div>
  );
}
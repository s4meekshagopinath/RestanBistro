export default function Items(){
    const item = [
        {
            img:"https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
            id:1,
            rating:"4.7(4.3K)",
            title:"Truffle Pasta",
            p:"Creamy truffle tagliatelle."
        },
        {
            img:"https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
            id:2,
            rating:"4.9(5.1K)",
            title:"Herb Chicken",
            p:"Roasted chicken with fresh herbs."
        },
        {
            img:"https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
            id:3,
            rating:"4.5(2.9K)",
            title:"Fresh Mojito",
            p:"Lime, mint and soda."
        },
        {
            img:"https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg",
            id:4,
            rating:"4.8(6.7K)",
            title:"BBQ Smash Burger",
            p:"Smashed patty, cheddar, onion tanglers, smoky BBQ sauce."
        },
        {
            img:"https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
            id:5,
            rating:"4.6(3.8K)",
            title:"Caesar Salad",
            p:"Crisp romaine tossed with parmesan."
        },
        {
            img:"https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
            id:6,
            rating:"5(3.7K)",
            title:"Tiramisu",
            p:"Classic Italian dessert."
        }
    ]

    return(
     <div className="relative ">
        <div className="grid grid-rows-3 md:grid-cols-3 gap-10 mt-6">
            {
              item.map(item=>(
               <div key={item.id} className="h-[580px] md:w-[500px] border-2 border-gray-300 rounded-3xl ">
                <img src={item.img} className="border-2 border-gray-300 rounded-3xl"></img>
                <h2 className="text-4xl mt-2.5 ml-1.5">{item.rating}</h2>
                <h2 className="text-3xl mt-2.5 ml-1.5">{item.title}</h2>
                <p className="mt-2.5 ml-1.5">{item.p}</p>
                <button className="border-black h-[35px] w-[400px] border-2 rounded-3xl mt-5 ml-6 hover:bg-black hover:text-white">Add to Cart</button>
               </div>
              ))  
            }
        </div>
     </div>
    );
}
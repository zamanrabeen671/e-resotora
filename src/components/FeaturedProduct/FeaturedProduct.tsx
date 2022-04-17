import React from "react";

const food = [
  {
    name: "Burger",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    category: "fast-food",
    img: "https://wallpaperaccess.com/full/1184214.jpg",
  },
  {
    name: "Burger",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    category: "fast-food",
    img: "https://besthqwallpapers.com/Uploads/8-8-2018/60879/thumb2-4k-hamburger-close-up-fastfood-cutlets.jpg",
  },
  {
    name: "Pizza",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    category: "fast-food",
    img: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg",
  },
  {
    name: "Delicious Pizza",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    category: "fast-food",
    img: "https://images7.alphacoders.com/596/thumb-1920-596343.jpg",
  },
];

export const FeaturedProduct = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {food.map((item, index) => {
        return (
          <div className="card bg-slate-700 shadow-xl" key={index}>
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-between">
                <div className="bg-red-400 text-slate-100 text-2xl p-4 mask mask-hexagon">
                  {item.price}
                </div>
                <button className="btn btn-primary">Buy Now</button>
              </div>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.price}</div>
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

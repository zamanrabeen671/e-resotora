import React from "react";
import { IProductTypes } from "../../types/productTypes";

interface IProductProps {
  products: IProductTypes[];
}

export const FeaturedProduct: React.FC<IProductProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((item, index) => {
        return (
          <div className="card bg-slate-700 shadow-xl" key={item.id}>
            <figure>
              <img src={item.productImage} alt="Shoes" />
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

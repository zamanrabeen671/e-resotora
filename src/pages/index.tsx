/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FeaturedProduct } from "../components/FeaturedProduct/FeaturedProduct";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { IProductTypes } from "../types/productTypes";

const food = [
  {
    id: "1",
    name: "Burger",
    description: "lorem lorem lorem lorem lorem lorem lorem",
    materials: ["suger", "bun", "cucumber", "letuce"],
    price: 1022,
    category: "fast-food",
    productImage: "https://wallpaperaccess.com/full/1184214.jpg",
    imgeUrl: "https://wallpaperaccess.com/full/1184214.jpg",
    stock: 20,
  },
  {
    id: "2",
    name: "Burger",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    materials: ["suger", "bun", "cucumber", "letuce"],
    category: "fast-food",
    productImage:
      "https://besthqwallpapers.com/Uploads/8-8-2018/60879/thumb2-4k-hamburger-close-up-fastfood-cutlets.jpg",
    imgeUrl: "https://wallpaperaccess.com/full/1184214.jpg",
    stock: 20,
  },
  {
    id: "3",
    name: "Pizza",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    materials: ["suger", "bun", "cucumber", "letuce"],
    category: "fast-food",
    productImage:
      "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg",
    imgeUrl: "https://wallpaperaccess.com/full/1184214.jpg",
    stock: 20,
  },
  {
    id: "4",
    name: "Delicious Pizza",
    price: 1022,
    description: "lorem lorem lorem lorem lorem lorem lorem",
    materials: ["suger", "bun", "cucumber", "letuce"],
    category: "fast-food",
    productImage: "https://images7.alphacoders.com/596/thumb-1920-596343.jpg",
    imgeUrl: "https://wallpaperaccess.com/full/1184214.jpg",
    stock: 20,
  },
];

export default function Home() {
  const [products, setProducts] = useState<IProductTypes[]>(food);

  return (
    <div className="container my-2 py-2">
      <HeroBanner />
      <FeaturedProduct products={products} />
    </div>
  );
}

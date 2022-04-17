import React from "react";
import { FeaturedProduct } from "../components/FeaturedProduct/FeaturedProduct";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <div className="container my-2 py-2">
      <HeroBanner />
      <FeaturedProduct />
    </div>
  );
}

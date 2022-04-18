import React from "react";

export const HeroBanner = () => {
  return (
    <div className="py-2 ">
      <div
        className="hero h-96 rounded-lg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80)`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-slate-100">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello E-Restorian</h1>
            <p className="mb-5">
              E-restora is a online foodie provider. We stand for something Good
              In Everything we do. That meanse carefully source premium
              ingrediants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

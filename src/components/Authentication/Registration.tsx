import React from "react";

export const RegistrationInputBox = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: () => void;
}) => {
  return (
    <div className=" duration-150 transition transform -translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <h6>Already have an accout?</h6>
            <button
              onClick={setToggle}
              className="btn btn-outline btn-secondary"
            >
              Want to Login?
            </button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form>
              <div className="card-body">
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="exp: john doe"
                      className="input input-bordered w-52"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      placeholder="exp: john doe"
                      className="input input-bordered w-52"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="exp: john deo@gmail.com"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Sign UP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

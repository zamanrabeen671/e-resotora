import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="navbar bg-slate-100">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            ERESTORA
          </NavLink>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <NavLink to="/">Item 1</NavLink>
              </li>
              <li>
                <NavLink to="/">Item 2</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none">
          {/* <div className="drawer drawer-end"> */}
          {/* <div className="drawer-content"> */}
          <label
            htmlFor="my-drawer-4"
            tabIndex={0}
            className="btn btn-ghost btn-circle drawer-button"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          {/* </div> */}
          {/* </div> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt="userImage"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Settings</NavLink>
              </li>
              <li>
                <NavLink to="/">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

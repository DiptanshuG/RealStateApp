import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex  w-screen justify-between m-2 p-3 gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img
              className="w-20 h-20 "
              src="https://png.pngtree.com/template/20191015/ourlarge/pngtree-real-estate-logo---modern-and-simple-house-design-image_319093.jpg"
              alt="Estatery"
            />
            <h1 className="font-bold text-xl">Estatery</h1>
          </div>
          <nav className="flex justify-around items-center grow ml-5">
            <ul className="flex justify-around  gap-[3.25rem]">
              <li className="text-purple list-none cursor-pointer bg-lightPurple p-2 rounded">
                Rent
              </li>
              <li className="text-purple list-none cursor-pointer p-2 rounded">
                Buy
              </li>
              <li className="text-purple list-none cursor-pointer p-2 rounded">
                Sell
              </li>
              <li className="text-purple list-none cursor-pointer p-2 rounded">
                ManageProperty
              </li>
              <li className="text-purple list-none cursor-pointer p-2 rounded">
                Resources
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center p-2">
          <button className="m-2 p-2 w-40 rounded bg-purple text-white">
            Login
          </button>
          <button className="m-2 p-2 w-40 rounded bg-purple text-white">
            Signup
          </button>
        </div>
      </div>

      <div className="flex justify-between m-2 p-7 ">
        <h1 className="font-bold text-4xl ">Search properties to rent</h1>
        <input
          type="text"
          placeholder="Search with Search Bar "
          className="p-2 w-80 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-purple"
        />
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const PropertyCard = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <h1>
            $1,095 <span>/month</span>
          </h1>{" "}
          <span>
            {" "}
            <AiOutlineHeart />
          </span>
        </div>
        <div>
          <h1>Palm Harbor</h1>
        </div>
        <div>
          <p>lorenloren lorenloren loren</p>
        </div>
        <div>
          <button> beds</button>
          <button> bathrooms</button>
          <button> 5x7 m^2</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

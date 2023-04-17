import React from "react";
import { FiCheck } from "react-icons/fi";
import { HiX } from "react-icons/hi";

const WoodQuality = () => {
  return (
    <>
      <div className="wood_maincountainer">
        <div className="wood_title">
          <h1>
            THE WOOD WE <br /> WORK WITH
          </h1>
        </div>
        <div className="wood_photos">
          <img src="/wood1.png"></img>
          <img src="/wood2.png"></img>
          <img src="/wood3.png"></img>
        </div>
        <div className="photo-unit__titles">
          <div>Oak</div>
          <div>Buk</div>
          <div>Ash</div>
        </div>
        <div className="wood_photo-unit">
          <div>
            <span>
              <FiCheck />
              Durability
            </span>
            <span>
              <FiCheck />
              Beautiful texture
            </span>
            <span>
              <FiCheck />
              Water resistance
            </span>
            <span>
              <HiX />
              Expensive
            </span>
          </div>
          <div>
            <span>
              <FiCheck />
              Durability
            </span>
            <span>
              <HiX />
              Hard to handle
            </span>
          </div>
          <div>
            <span>
              <FiCheck />
              Durability
            </span>
            <span>
              <HiX />
              Hard to handle
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodQuality;

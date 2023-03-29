import React from 'react';

const WoodQuality = () => {
  return (
    <>
      <div className="wood_maincountainer">
        <div className="wood_title">
          <h1>
            THE WOOD WE <br></br> WORK WITH
          </h1>
        </div>
        <div className="wood_photo-unit">
          <div className="first">
            <p>Oak</p>
            <span>Durability</span>
            <span>Beautiful texture</span>
            <span>Water resistance</span>
            <span>Expensive</span>
          </div>
          <div second photo>
            <p>Buk</p>
            <span>Durability</span>
            <span>Hard to handle</span>
          </div>
          <div third photo>
            <p>Ash</p>
            <span>Durability</span>
            <span>Hard to handle</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WoodQuality;

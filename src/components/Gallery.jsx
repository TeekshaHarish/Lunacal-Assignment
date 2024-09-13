import React from "react";

import Img1 from "../assets/images/img1.jpeg";
import Img2 from "../assets/images/img2.jpeg";
import Img3 from "../assets/images/img3.jpeg";

const images = [Img1, Img2, Img3];
const Gallery = () => {
  return (
    <section className="my-4">
      <div className="flex justify-between">
        <div className="bg-gray-900 text-white rounded-2xl flex justify-center items-center py-2 px-6">
          Gallery
        </div>
        <div className="flex flex-1 gap-2 justify-end">
          <div className="bg-gray-500 text-white rounded-2xl flex justify-center items-center py-2 px-4 cursor-pointer">
            + Add Image
          </div>
          <div className="rounded-full bg-gray-700 text-white h-10 w-10 flex justify-center items-center cursor-pointer">
            ←
          </div>
          <div className="rounded-full bg-gray-700 text-white h-10 w-10 flex justify-center items-center cursor-pointer">
            →
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-6">
        {images.map((image) => (
          <img src={image} alt="" className="w-24 h-24 rounded-xl " />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

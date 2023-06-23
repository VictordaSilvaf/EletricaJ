import React, { useState } from "react";
import ChevronDown from "./../assets/chevron-down.svg";

interface Categories {
  id: number;
  title: string;
  image: string;
}

interface Props {
  categories: Categories[];
}

const CategoryButton: React.FC<Props> = ({ categories }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`flex items-center justify-center cursor-pointer relative ${
        isHovered ? "hovered" : ""
      }`}
      onClick={handleClick}
    >
      Categorias{" "}
      <img
        src={ChevronDown}
        alt="chevron down"
        className={`flex items-center h-3 w-3 ml-1 mt-0.5 ${
          isHovered ? "rotate-180" : ""
        }`}
      />
      {isHovered && (
        <div className="absolute top-16 bg-white  min-w-[260px] rounded-xl p-4 shadow-xl z-30">
          {categories.map((item) => {
            return (
              <div key={item.id} className="w-full grid grid-cols-5 h-16 gap-4 py-2 hover:bg-slate-100 p-2 rounded-lg duration-150">
                <div className="col-span-1 p-2 h-12 w-12 bg-amarelo rounded-xl">
                  <img
                    src={item.image}
                    alt=""
                    className="h-8 w-8 object-contain "
                  />
                </div>
                <div className="col-span-4 h-full flex items-center text-xs truncate ml-3">{item.title}</div>
              </div>
            );
          })}
          <div className="absolute -top-1 rotate-45 left-[45%] w-4 h-4 bg-white"></div>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;

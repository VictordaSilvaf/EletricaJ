import { Link } from "react-router-dom";
import Bubbles from "./../assets/bubbles.png";
import Logo from "./../assets/logo.png";
import CategoryButton from "./CategoryButton";

import CategoryImage1 from "./../assets/categories/category1.png";
import CategoryImage2 from "./../assets/categories/category2.png";
import CategoryImage3 from "./../assets/categories/category3.png";
import CategoryImage4 from "./../assets/categories/category4.png";
import CategoryImage5 from "./../assets/categories/category5.png";
import CategoryImage6 from "./../assets/categories/category6.png";
import CategoryImage7 from "./../assets/categories/category7.png";
import CategoryImage8 from "./../assets/categories/category8.png";
import MenuButton from "./MenuButton";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "LÂMPADAS",
    image: CategoryImage1,
  },
  {
    id: 2,
    title: "LUSTRES",
    image: CategoryImage2,
  },
  {
    id: 3,
    title: "LUMINÁRIAS",
    image: CategoryImage3,
  },
  {
    id: 4,
    title: "DECORAÇÕES",
    image: CategoryImage4,
  },
  {
    id: 5,
    title: "ACESSÓRIOS",
    image: CategoryImage5,
  },
  {
    id: 6,
    title: "FERRAMENTAS",
    image: CategoryImage6,
  },
  {
    id: 7,
    title: "UTENSÍLIOS DOMÉSTICOS",
    image: CategoryImage7,
  },
  {
    id: 8,
    title: "CABOS",
    image: CategoryImage8,
  },
];

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="w-full h-16 grid grid-cols-12">
      <div className="col-span-0 lg:col-span-1 h-full hidden lg:block">
        <img src={Bubbles} alt="bubbles" className="h-16 w-auto" />
      </div>
      <div className="col-span-5 lg:col-span-4 flex justify-center h-full">
        <img src={Logo} alt="logo" className="h-16 w-auto py-3" />
      </div>

      <div className="col-span-7 bg-amarelo rounded-s-full h-16">
        <nav className="h-full pl-20">
          <ul className="hidden lg:flex justify-start h-full items-center gap-6 text-sm ">
            <li className="hover:bg-slate-100 duration-150 ease-in-out">
              <Link to={`/`} className="nav-btn-selected">
                Home
                <div className="w-full rounded-lg h-1 -mb-1 bg-white"></div>
              </Link>
            </li>
            <li className="hover:bg-slate-100 duration-150 ease-in-out">
              <CategoryButton categories={categories} />
            </li>
            <li className="hover:bg-slate-100 duration-150 ease-in-out">
              <Link to={`/sobre`} className="">
                Sobre
              </Link>
            </li>
            <li className="hover:bg-slate-100 duration-150 ease-in-out">
              <Link to={`/localizacao`} className="">
                Localização
              </Link>
            </li>
            <li className="hover:bg-slate-100 duration-150 ease-in-out">
              <a
                href="#contato"
                className="bg-azul_escuro text-white px-7 font-bold py-2 rounded-lg"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* mobile */}
          <div className="w-full h-full flex lg:hidden justify-end items-center pr-6">
            <MenuButton
              onButtonClick={() => {
                setIsSelected(!isSelected);
              }}
            />
          </div>
        </nav>
      </div>
      <div
        className={`bg-white shadow-lg h-auto py-8 top-16 right-0 z-50 absolute w-1/2 duration-200 ease-in-out ${
          isSelected ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-6 text-sm ">
          <li className="hover:bg-slate-100 duration-150 ease-in-out">
            <Link
              to={`/`}
              className="nav-btn-selected hover:bg-slate-100 duration-150 ease-in-out py-3 px-6 rounded-lg "
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-slate-100 duration-150 ease-in-out py-3 px-6 rounded-lg">
            <CategoryButton categories={categories} />
          </li>
          <li className="hover:bg-slate-100 duration-150 ease-in-out">
            <Link
              to={`/sobre`}
              className="hover:bg-slate-100 duration-150 ease-in-out py-3 px-6 rounded-lg"
            >
              Sobre
            </Link>
          </li>
          <li className="hover:bg-slate-100 duration-150 ease-in-out">
            <Link
              to={`/localizacao`}
              className="hover:bg-slate-100 duration-150 ease-in-out py-3 px-6 rounded-lg"
            >
              Localização
            </Link>
          </li>
          <li className="hover:bg-slate-100 duration-150 ease-in-out">
            <a
              href="#contato"
              className="bg-azul_escuro text-white px-7 font-bold py-2 rounded-lg "
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

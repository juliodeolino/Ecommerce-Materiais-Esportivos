import { SlArrowDown } from "react-icons/sl";
import ProductCard from "../components/ProductCard";
import FilterGroup from "../components/FilterGroup";
import { CiFilter } from "react-icons/ci";
import React, { useState } from 'react';


const produc = [
  {
    id: "1",
    image: "/produc-image-1.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "2",
    image: "/produc-image-2.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino", 
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "3",
    image: "/produc-image-3.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "4",
    image: "/produc-image-4.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "5",
    image: "/produc-image-5.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "6",
    image: "/produc-image-1.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "7",
    image: "/produc-image-2.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "8",
    image: "/produc-image-3.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "9",
    image: "/produc-image-1.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "10",
    image: "/produc-image-2.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "11",
    image: "/produc-image-3.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "12",
    image: "/produc-image-4.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "13",
    image: "/produc-image-5.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "14",
    image: "/produc-image-2.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
  {
    id: "15",
    image: "/produc-image-3.jpeg",
    title: "tênis",
    description: "K-Swiss v8 - Masculino",
    oldPrice: 200,
    newPrice: 100,
  },
];

const ProductListing = () => {
  const [ isFilterOpen, setisFilterOpen ] = useState(false);

  const toggleFilter = () => setisFilterOpen(!isFilterOpen);

  return (
    <>
      <main className="flex justify-center relative">
        <section className="
                    w-full max-w-[1440px] h-[2500px] 
                    bg-secondaryFundo 
                    relative 
                    flex flex-col 
                    justify-start lg:justify-center 
                    items-center
                    mt-10
                    "
        >
          <div>
            {/* Conteiner de agrupamento */}
            <div
              className="
                    relative lg:absolute 
                    flex lg:items-center 
                    flex-row lg:flex-row
                    justify-start lg:justify-end
                    lg:w-[90%] pt-10
                    lg:top-10 lg:right-20
                    gap-5
                    "
            >
              {/* Botao de Filtro */}
              <div
                className="
                        lg:hidden 
                        w-16 h-16 
                        bg-primary 
                        rounded-md 
                        justify-center items-center flex 
                        right-10
                        order-2
                        hover:bg-tertiary
                        "
                        onClick={toggleFilter}
              >
                <CiFilter className="text-white text-4xl" />
              </div>
              {/* Botao de Ordenar por */}
              <button
                className="
                        w-[265px] lg:w-[332px]
                        h-[60px]
                        text-[13px] lg:text-[16px]
                        flex justify-between items-center 
                        px-5  
                        rounded-sm 
                        border border-dark-gray2 
                        font-bold
                        order-1 lg:order-2
                        "
              >
                Ordernar por:
                <SlArrowDown />
              </button>
            </div>
             {/* Texto que mostra o resultado */}
              <h2
                className="
                        text-[14px] lg:text-[16px] font-semibold 
                        text-dark-gray2
                        order-2 lg:order-1
                        lg:absolute
                        lg:top-24 lg:left-24
                        "
              >
                Resultados para "Tênis" -
                <span
                  className="
                          text-[14px] lg:text-[16px] 
                          font-normal 
                          "
              >
                  389 produtos
                </span>
              </h2>
          </div>

          <section className="lg:w-[-315px] absolute top-44 lg:right-20">
            <div className=" 
              grid lg:grid-cols-3 grid-cols-2 
              gap-4 lg:gap-4

              "
              >
              {produc.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                />
              ))}
            </div>
          </section>
          <FilterGroup 
            isOpen={isFilterOpen}
            onClose={toggleFilter}
          />
        </section>
      </main>
    </>
  );
};

export default ProductListing;

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderHome from "../components/SliderHome";
import IconsCollectionFeature from "../components/IconsCollectionFeature";

const HomePage = () => {
  const [slidePerView, setSlidePerView] = useState(1);
  const [activeId, setActiveId] = useState("s");

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
  ];

  const categories = [
    { id: "s", label: "Sapatos", src: "/icon-shoe.svg" },
    { id: "t", label: "Camisetas", src: "/icon-shirt.svg" },
    { id: "h", label: "Fones", src: "/icon-headphones.svg" },
    { id: "p", label: "Calças", src: "/icon-pant.svg" },
    { id: "c", label: "Bonés", src: "/icon-cap.svg" },
  ];

  return (
    <>
      {/* Slider */}
      <main className="flex flex-col items-center justify-center w-full">
        <SliderHome />
        {/* Coleções em destaque */}
        <section className="h-full w-full max-w-[1440px] mx-auto bg-secondaryFundo flex gap-4 justify-center py-20 flex-col items-center lg:flex-row">
          <CollectionCard image="/collection-1.png" />
          <CollectionCard image="/collection-2.png" />
          <CollectionCard image="/collection-3.png" />
        </section>
        <section className="max-w-[1440px]  w-full flex flex-col justify-center items-center bg-secondaryFundo">
          <h2 className="text-dark-gray2 font-bold text-[22px] p-5">
            Coleções em destaque
          </h2>
          <div className="lg:flex gap-8 h-full justify-center items-center grid grid-cols-2">
            {categories.map((cat) => (
              <div key={cat.id} onClick={() => setActiveId(cat.id)}>
                <IconsCollectionFeature
                  iconSrc={cat.src}
                  label={cat.label}
                  isActive={cat.id === activeId}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Seção produtos em alta */}
        <section className="bg-secondaryFundo w-full max-w-[1440px] h-full flex flex-col justify-center items-center relative py-20">
          <div className=" w-[87%] justify-between flex top-3 mx-auto">
            <h2 className="text-[20px] font-bold text-dark-gray2">
              Coleções em alta
            </h2>
            <button className="text-primary font-semibold flex items-center gap-3">
              Ver todos
              <HiArrowNarrowRight className="w-8 h-5" />
            </button>
          </div>
          <div className="w-[90%] h-[90%] grid grid-cols-2 gap-6 lg:grid lg:grid-cols-4 lg:gap-4 lg:px-4">
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
        {/* Seção oferta especial */}
        <section className="max-w-[1440px] w-full min-h-[553px] h-full flex relative">
          <div className="w-full h-full justify-center items-center flex flex-col relative lg:flex-row lg:justify-end lg:items-center">
            <div className="
            w-[281px] h-[173px] 
            lg:w-[466px] lg:h-[330px] 
            rounded-t-full 
            bg-gradient-to-b from-secondary to-transparent opacity-[0.5] 
            z-0 
            absolute
            lg:left-24
            mx-auto
            top-32">
            </div>
              <img
                src="/public/oferta-special.png"
                alt="Oferta-Special"
                className="
                w-[301px] h-[173px]
                lg:w-[573px] lg:h-[330px] 
                z-10 
                absolute
                lg:left-0
                top-40"
              />
            <div className="max-w-[330px] lg:max-w-[586px] pt-96 pb-20 flex flex-col lg:right-9 lg:pt-40">
              <h6 className="text-primary font-bold pb-5">Oferta especial</h6>
              <h2 className="text-dark-gray2 font-bold text-[28px] lg:text-[48px]  text-wrap leading-tight">
                Air Jordan edição de colecionador
              </h2>
              <p>z
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi atque voluptates labore a iste in, velit nesciunt, quos
                modi pariatur numquam, incidunt quaerat eveniet! Natus numquam
                eum dolore magnam modi!
              </p>
              <button className="bg-primary w-[200px] h-[40px] font-bold text-white rounded-md mt-5 hover:bg-tertiary">
                Ver Ofertas
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

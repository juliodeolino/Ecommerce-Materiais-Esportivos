import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const HomePage = () => {
  const [slidePerView, setSlidePerView] = useState(1);

  const data = [
    { id: "1", image: "/home-slide-0.png" },
    { id: "2", image: "/home-slide-4.png" },
    { id: "3", image: "/home-slide-6.png" },
    { id: "4", image: "/home-slide-1.png" },
  ];

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

  return (
    <>
      {/* Slider */}
      <main className="flex flex-col items-center justify-center w-full">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper max-w-[1440px] w-full mx-auto"
        >
          {data.map((item) => (
            <SwiperSlide className="flex justify-center">
              <div className="w-[1440px] h-[641px] mt-10 relative flex ml-15 justify-end items-center bg-[#F5F5F5]">   
                  <img
                  src={item.image}
                  alt="Slider"
                  className="object-cover rounded-md w-[50%] absolute right-[10%]"
                />
                <div className="absolute top-[25%] left-[15%] w-[300px] text-wrap leading-tight">
                  <h5 className="text-warning">
                    Melhores ofertas personalizadas
                  </h5>
                  <h1 className="text-dark-gray font-bold text-[48px] py-5">
                    Queima de stoque Nike
                  </h1>
                  <p className="pb-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    tralarero tralala.
                  </p>
                  <button className="bg-primary w-[220px] h-[48px] rounded-md text-white font-bold">
                    Ver ofertas
                  </button>
                </div>
                <div className="w-48 h-48 rounded-full overflow-hidden absolute right-5 top-10 ">
                  <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
                    {[...Array(12 * 12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-warning/50 rounded-full m-[2px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Coleções em destaque */}
        <section className="h-[full] w-[1440px] bg-secondaryFundo flex gap-4 justify-center py-20">
          <CollectionCard image="/collection-1.png" />
          <CollectionCard image="/collection-2.png" />
          <CollectionCard image="/collection-3.png" />
        </section>
        <section className="w-[1440px] flex flex-col justify-center items-center bg-secondaryFundo">
          <h2 className="text-dark-gray2 font-bold text-[22px] p-5">
            Coleções em destaque
          </h2>
          <div className="flex gap-8 h-[200px] justify-center items-center" >
            <div className="bg-white w-[104px] h-[104px] rounded-full justify-center items-center relative">
              <img
                src="collection-headphones-01.png"
                alt="Headphones"
                className="absolute p-5"
              />
              <h5 className="absolute top-[120px] left-[20px] font-semibold text-dark-gray2 text-[14px]">
                Headphones
              </h5>
            </div>
            <div className="bg-white w-[104px] h-[104px] rounded-full justify-center items-center relative">
              <img
                src="collection-pants-01.png"
                alt="Calça"
                className="absolute p-5"
              />
              <h5 className="absolute top-[120px] left-[20px] font-semibold text-dark-gray2 text-[14px]">
                Calças
              </h5>
            </div>
            <div className="bg-white w-[104px] h-[104px] rounded-full justify-center items-center relative">
              <img
                src="collection-pants-01.png"
                alt="Calça"
                className="absolute p-5"
              />
              <h5 className="absolute top-[120px] left-[20px] font-semibold text-dark-gray2 text-[14px]">
                Calças
              </h5>
            </div>
            <div className="bg-white w-[104px] h-[104px] rounded-full justify-center items-center relative">
              <img
                src="collection-shirt-01.png"
                alt="Camisas"
                className="absolute p-5"
              />
              <h5 className="absolute top-[120px] left-[20px] font-semibold text-dark-gray2 text-[14px]">
                Camisetas
              </h5>
            </div>
            <div className="bg-white w-[104px] h-[104px] rounded-full justify-center items-center relative">
              <img
                src="collection-tenis-01.png"
                alt="Tênis"
                className="absolute p-5"
              />
              <h5 className="absolute top-[120px] left-[20px] font-semibold text-dark-gray2 text-[14px]">
                Tênis
              </h5>
            </div>
          </div>
        </section>
        {/* Seção produtos em alta */}
        <section className="bg-secondaryFundo w-[1440px] h-[1000px] flex justify-center items-center relative">
          <div className="absolute w-[87%] justify-between flex top-3">
            <h2 className="text-[20px] font-bold text-dark-gray2">Coleções em alta</h2>
            <button 
            className="text-primary font-semibold flex items-center gap-3">Ver todos
            <HiArrowNarrowRight 
            className="w-8 h-5"
            />
            </button>
          </div>
          <div className="w-[90%] h-[90%] grid grid-cols-4 gap-4 px-4">
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
        <section className="w-[1440px] h-[553px] flex justify-around items-center relative ">
          <div className="w-[466px] h-[233px] rounded-t-full bg-gradient-to-b from-secondary to-transparent opacity-[0.5] z-0  absolute left-[10%] bottom-[250px]" />
          <img
            src="/public/oferta-special.png"
            alt="Oferta-Special"
            className="w-[573px] h-[330px] z-10"
          />
          <div className="w-[586px]">
            <h6 className="text-primary font-bold pb-5">Oferta especial</h6>
            <h2 className="text-dark-gray font-bold text-[48px] text-wrap leading-tight">
              Air Jordan edição de colecionador
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              atque voluptates labore a iste in, velit nesciunt, quos modi
              pariatur numquam, incidunt quaerat eveniet! Natus numquam eum
              dolore magnam modi!
            </p>
            <button className="bg-primary w-[200px] h-[40px] font-bold text-white rounded-md mt-5">
              Ver Ofertas
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

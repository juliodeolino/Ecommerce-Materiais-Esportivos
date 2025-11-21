import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function SliderHome() {
  const data = [
    { id: "1", image: "/home-slide-0.png" },
    { id: "2", image: "/home-slide-4.png" },
    { id: "3", image: "/home-slide-6.png" },
    { id: "4", image: "/home-slide-1.png" },
  ];

  return (
    <Swiper
        autoplay={{
            delay:5000,
            disableOnInteraction: false,
        }}
        loop={true}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper max-w-[375px] lg:max-w-[1440px] w-full mx-auto"
    >
      {data.map((item) => (
        <SwiperSlide className="flex flex-col lg:justify-center">
<div className="
    w-full max-w-[1440px] mx-auto 
    h-full lg:h-[641px]
    py-24
    mt-10 
    relative 
    bg-[#F5F5F5] 
    
    /* MOBILE: Coluna e Centralizado */
    flex flex-col items-center 
    
    /* DESKTOP (lg): Linha e Justificado */
    lg:flex-row lg:justify-center lg:items-center 
">
    {/* ---------------------------------------------------- */}
    {/* 1. Imagem Principal (Mobile: Fica acima do texto) */}
    {/* No Desktop, ela se posiciona ao lado do texto via Flexbox. */}
    {/* Removido 'absolute' e 'top-20' */}
    <img
        src={item.image}
        alt="Slider"
        className="
            order-1 lg:order-2 /* Mobile: 1º item; Desktop: 2º item (à direita) */
            object-cover rounded-md 
            w-[290px] h-[170px] lg:min-w-[730px] lg:min-h-[430px] 
            mt-10 lg:mt-0 
        "
    />

    {/* ---------------------------------------------------- */}
    {/* 2. Bloco de Conteúdo (Texto e Botão) */}
    {/* Removido 'absolute' e as coordenadas 'top-72'/'lg:left-[15%]' */}
    <div className="
        order-2 lg:order-1 /* Mobile: 2º item; Desktop: 1º item (à esquerda) */
        w-[300px] lg:w-[450px] 
        flex flex-col 
        items-center lg:items-start /* Centralizado no Mobile, Alinhado à esquerda no Desktop */
        text-center lg:text-left
        mt-8 lg:mt-0 lg:mr-10
    ">
        <h5 className="text-warning font-bold">Melhores ofertas personalizadas</h5>
        <h1 className="text-dark-gray font-bold text-[36px] lg:text-[48px] py-3 lg:py-5 leading-tight">
            Queima de stoque Nike
        </h1>
        <p className="pb-5 text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit tralarero tralala.
        </p>
        <button className="bg-primary w-full lg:w-[220px] h-[48px] rounded-md text-white font-bold hover:bg-tertiary">
            Ver ofertas
        </button>
    </div>

    {/* ---------------------------------------------------- */}
    {/* 3. Elemento de Fundo Decorativo (Mantido 'absolute') */}
    {/* Posicionamento mais limpo: Usa right-0 para mobile e lg:right-0 para desktop, centralizado verticalmente. */}
    <div className="
        w-48 h-48 rounded-full overflow-hidden absolute 
        
        /* POSICIONAMENTO */
        right-0 top-10 -mr-32 /* Mobile: Canto superior direito */
        lg:right-40 lg:top-10  /* Desktop: No meio vertical à direita */
        
        z-0 /* Fundo */
    ">
        <div className="
        grid grid-cols-12 grid-rows-12
        w-36 h-36 
        lg:w-full lg:h-full">
            {[...Array(12 * 12)].map((_, i) => (
                <div
                    key={i}
                    className="lg:w-1 lg:h-1 w-[3px] h-[3px] bg-warning/50 rounded-full m-[2px]"
                />
            ))}
        </div>
    </div>
</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

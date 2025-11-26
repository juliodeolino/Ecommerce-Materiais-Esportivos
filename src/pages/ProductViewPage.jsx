import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuStar } from "react-icons/lu";
import ProductCard from "../components/ProductCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  { id: "1", image: "/home-slide-0.png", bgColor: "#E2E3FF" },
  { id: "2", image: "/home-slide-4.png", bgColor: "#FFE88C" },
  { id: "3", image: "/home-slide-6.png", bgColor: "#FFC0BC" },
  { id: "4", image: "/home-slide-1.png", bgColor: "#DEC699" },
  { id: "5", image: "/home-slide-5.jpeg", bgColor: "#E8DFCF" },
];

const number = ["39", "40", "41", "42", "43"];

const cores = [
  { nome: "Blue", classe: "bg-[#6FEEFF]" },
  { nome: "Red", classe: "bg-[#FF6969]" },
  { nome: "Black", classe: "bg-[#5E5E5E]" },
  { nome: "Blue-ocean", classe: "bg-[#6D70B7]" },
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
];

const ProductViewPage = () => {
  const [numberSelect, setnumberSelect] = useState(null);
  const [corSelecionada, seCorselecionada] = useState(null);
  const [avaliacao, setAvaliacao] = useState(0);
  const [itemSelect, setitemSelect] = useState(null);

    const navigate = useNavigate();
    const { idProduto } = useParams();
    const handleComprar = () => {
    navigate(`/produtos/detalhes/${idProduto}/carrinho`); 
  };
  

  return (
    <>
      <main className="flex justify-center mt-10">
        <section className="
        h-full lg:h-[1500px] max-w-[1440px] w-full 
        flex flex-col lg:flex-row 
        bg-secondaryFundo 
        justify-center 
        gap-8 p-5
        relative ">
        <section className="flex flex-col lg:flex-row">
          <div>
            {/* Titulo do produto */}
          <h2 className="
          text-dark-gray2 
          text-[12px] lg:text-[14px]
          
          ">
            <span className="font-bold text-wrap">Home</span> / Produtos / Tênis / Nike /
            Tênis Nike Revolution 6 Next Nature Masculino
          </h2>
          {/* Seção do Slider */}
          <div className="
                        w-[335px] lg:w-full lg:max-w-[700px] 
                        h-[272px] lg:h-[571px] 
                        relative 
                        mt-10
                        items-center
                        "
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full"
              spaceBetween={0}
              slidesPerView={1}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="flex justify-center items-center rounded-xl p-4 w-full h-full"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <img
                      src={item.image}
                      alt="Slider"
                      className="object-cover rounded-md rotate-[18deg] w-[238px] h-[218px] lg:w-[498px] lg:h-[248px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Opções de Tenis abaixo do Slider  */}
          <div className=" flex mt-10 justify-between ">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => setitemSelect(item.image)}
                className={`w-[60px] lg:w-[112px] h-[57px] lg:h-[96px] rounded-sm flex justify-center items-center 
                ${
                  itemSelect === item.image
                    ? "border-2 border-primary"
                    : "border-none"
                }
                `}
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.image}
                  alt={`Slide${item.id}`}
                  className="w-32 h-auto"
                />
              </button>
            ))}
          </div>
          </div>
        {/* ------------------------------------------------------------------------------------------------ */}
          {/* Informações do produto */}
          <div className="max-w-[440px] max-h-[571px] px-5 mt-10">
            <h2 className="text-[14px] lg:text-[24px] font-bold text-dar ">
              Tênis Nike Revolution <br />6 Next Nature Masculino
            </h2>
            <h6 className="text-[14px] text-dark-gray2 py-4">
              Casual | Nike REF:38416711
            </h6>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((estrela) => (
                <button
                  key={estrela}
                  onClick={() => setAvaliacao(estrela)}
                  className="focus:outline-none"
                >
                  <LuStar
                    className={`w-5 h-5 transition-colors ${
                      estrela <= avaliacao
                        ? "fill-warning stroke-warning"
                        : "stroke-warning"
                    }`}
                  />
                </button>
              ))}
              <div className="flex justify-center items-center gap-1 font-bold w-[63px] h-[23px] bg-warning text-white rounded-sm text-[14px]">
                4.7 <LuStar className="fill-white" />
              </div>
              <h3 className="text-dark-gray3 text-[14px]">(90 avaliações)</h3>
            </div>
            <p className="text-[14px] font-bold text-dark-gray">
              R$ <span className="text-[24px] font-bold">219</span>,00{" "}
              <span className="text-ligth-gray font-normal line-through">
                219,00
              </span>
            </p>
            <h4 className="text-[13px] font-bold text-ligth-gray py-4">
              Descrição do produto
            </h4>
            <p className="text-dark-gray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              earum facilis consectetur eius adipisci velit numquam possimus
              repellat deserunt .
            </p>
            <h3 className="text-[13px] font-bold text-ligth-gray">Tamanho</h3>
            {/* Tamanhos disponiveis */}
            <div className="flex gap-2 py-4">
              {number.map((num) => (
                <button
                  key={num}
                  onClick={() => setnumberSelect(num)}
                  className={`border rounded-sm p-2 transition-colors
                    ${
                      numberSelect === num
                        ? "bg-primary border-none text-white font-bold"
                        : "bg-white text-dark-gray border-dark-gray3"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <h3 className="text-[13px] font-bold text-ligth-gray p-2">Cor</h3>
            {/* Cor diponiveis */}
            <div className="flex gap-3 py-4">
              {cores.map((cor) => (
                <button
                  key={cor.nome}
                  onClick={() => seCorselecionada(cor.nome)}
                  className={`w-[31px] h-[31px] rounded-full
                        ${cor.classe}
                        ${
                          corSelecionada === cor.nome
                            ? "ring-2 ring-offset-2 ring-primary"
                            : "border-gray-300"
                        }
                        `}
                ></button>
              ))}
            </div>
              <Link
              to={`/produtos/detalhes/${idProduto}/carrinho`}
              >
              <button
              onClick={handleComprar}
              className="
              w-full lg:w-[220px] 
              h-[48px] 
              rounded-md bg-warning 
              text-white font-bold 
              mt-4 
              flex items-center justify-center"
            >
              COMPRAR
            </button>
            </Link>
          </div>
        </section>

          
          {/* Seção Produtos Relacionados */}
          <div className="lg:absolute lg:top-[900px] lg:left-[140px]">
            <div className="flex justify-between w-full lg:min-w-[1220px] py-5">
              <h2 className="text-[14px] lg:text-[20px] font-bold text-dark-gray">
                Produtos Relacionados
              </h2>
              <button className="text-primary text-[14px] lg:text-[20px] font-semibold flex items-center gap-3 absolute right-10">
                Ver todos
                <HiArrowNarrowRight className="w-8 h-5" />
              </button>
            </div>
            <div className="
                          lg:absolute 
                          lg:flex grid grid-cols-2 
                          gap-4
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
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductViewPage;

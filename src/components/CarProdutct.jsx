import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

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

const CarProduct = ({ image, tilte, description, oldPrice, newPrice }) => {
  return (
    <>
      <main className="flex justify-center">
        <section className="bg-secondaryFundo w-[1440px] h-[1000px] mt-10 flex gap-4 justify-center relative">
          <div className="w-[890px] h-[352px] bg-white rounded-md mt-20 flex justify-between relative">
            <h2 className="p-10 h-5">MEU CARRINHO</h2>
            <div className="flex gap-10 p-10 h-5">
              <h2>QUANTIDADE</h2>
              <h2>UNITÁRIO</h2>
              <h2>TOTAL</h2>
            </div>
            <div className="absolute top-[100px] w-full h-[40%] flex">
              <div className="w-full h-full flex items-center rounded-md pl-10">
                <div className="w-[127px] h-[104px] bg-secondary flex justify-between items-center">
                  <img
                    src="/home-slide-4.png"
                    alt="Produto"
                    className="w-[120px] h-[65px] object-cover"
                  />
                </div>
                <div className="px-10 w-80">
                  <h2 className="text-[16px] font-bold text-dark-gray">
                    Tênis Nike Revolution 6 Next <br /> Nature Masculino
                  </h2>
                  <h3>
                    <span className="text-dark-gray3 ">Cor: </span>Vermelho /
                    Branco
                  </h3>
                  <h3>
                    <span className="text-dark-gray3">Tamanho:</span> 42{" "}
                  </h3>
                </div>
                <div className="ml-14">
                  <button className="w-[35px] h-[35px] border-2 border-ligth-gray2 rounded-md bg-white">
                    -
                  </button>
                  <input
                    type="number"
                    id="quantityInput"
                    value="1"
                    min="1"
                    className="w-10 appearance-none my-5"
                  />
                  <button className="w-[35px] h-[35px] border-2 border-ligth-gray2 rounded-md bg-white">
                    +
                  </button>
                  <h2 className="underline text-dark-gray3">Remover item</h2>
                </div>
                <div className="flex flex-col items-center ml-5">
                  <span className="text-ligth-gray2 line-through text-[16px] ">
                    R$219
                  </span>
                  <h3 className="text-[18px] font-bold">R$219,00</h3>
                </div>
                <div className="flex flex-col items-center ml-5">
                  <span className="text-ligth-gray2 line-through text-[16px] ">
                    R$219
                  </span>
                  <h3 className="text-[18px] font-bold">R$219,00</h3>
                </div>
              </div>
              <div className="absolute top-[140px] left-10">
                <h2 className="text-[16px] font-bold text-dark-gray2 my-2">
                  Cupom de desconto
                </h2>
                <input
                  type="text"
                  placeholder="Insira seu código"
                  className="w-[270px] h-[60px] p-5 bg-ligth-gray3 rounded-md"
                />
                <button className="w-[114px] h-[60px] bg-ligth-gray3 mx-3 rounded-md">
                  OK
                </button>
              </div>
              <div className="absolute top-[140px] left-[455px]">
                <h2 className="text-[16px] font-bold text-dark-gray2 my-2">
                  Calcular Frete
                </h2>
                <input
                  type="text"
                  placeholder="Insira seu CEP"
                  className="w-[270px] h-[60px] p-5 bg-ligth-gray3 rounded-md"
                />
                <button className="w-[114px] h-[60px] bg-ligth-gray3 mx-3 rounded-md">
                  OK
                </button>
              </div>
            </div>
            <div className="border-t border-ligth-gray w-[92%] absolute left-10 top-24"></div>
            <div className="border-t border-ligth-gray w-[92%] absolute left-10 top-60"></div>
          </div>
          <section className="w-[334px] h-[364px] bg-white rounded-md mt-20 relative flex justify-center">
            <div className="p-5 absolute flex w-full">
              <h2 className="font-bold text-[20px] py-5">Resumo</h2>
              <div className="border-t border-ligth-gray w-[90%] absolute top-24"></div>
            </div>
            <div className="flex w-full justify-between p-5 top-24 absolute">
              <div className="w-2">
                <h2 className="text-dark-gray3 text-[16px] py-2">Subtotal:</h2>
                <h2 className="text-dark-gray3 text-[16px] py-2">Frete:</h2>
                <h2 className="text-dark-gray3 text-[16px] py-2">Desconto:</h2>
                <h2 className="text-dark-gray font-bold text-[20px] py-2">
                  Total
                </h2>
              </div>
              <div className="mt-2">
                <h2 className="text-dark-gray text-[16px] py-2">R$ 219,00</h2>
                <h2 className="text-dark-gray text-[16px] py-2">R$ 0,00</h2>
                <h2 className="text-dark-gray text-[16px] py-2">R$ 30,00</h2>
                <h2 className="text-primary font-semibold text-[16px] py-2">
                  R$ 219,00
                </h2>
              </div>
              <h3 className="text-dark-gray3 text-[10px] absolute right-5 top-48">
                ou 10x de R$ 21,00 sem juros
              </h3>
              <Link
              to="produtos/detalhes/:idProduto/carrinho/concluir"
              >
                <button className="absolute bg-warning w-[274px] h-[40px] rounded-md text-white font-bold top-[215px] left-8">
                Continuar
              </button>
              </Link>
            </div>
          </section>

          <section className="absolute flex top-[520px] h-[400px] left-24 items-end">
              <div className="absolute top-1 flex justify-between w-full py-5">
                  <h2>Produtos Relacionados</h2>
                  <button 
                  className="text-primary font-semibold flex items-center gap-3">Ver todos
                  <HiArrowNarrowRight 
                  className="w-8 h-5"
                  />
                  </button>
              </div>
              <div className="flex gap-5">
                {produc.map((produc) => (
                <div className="w-[214px] h-[338px]" >
                <p className="text-[14px] p-1.5 bg-green-price w-[96px] h-[32px] rounded-full flex justify-center m-3 absolute font-semibold text-dark-gray2">30% OFF</p>
                <Link to="/produtos/detalhes/idProduto">
                <img src={produc.image} alt="Produto" className="w-[214px] h-[234px] object-cover" />
                </Link>
                <h6 className="text-[10px] font-bold text-ligth-gray pt-3">{produc.title}</h6>
                <h3 className="text-[20px] text-dark-gray2">{produc.description}</h3>
                <p className="flex gap-3">
                <span className="text-dark-gray3 line-through">${produc.oldPrice}</span>
                <span className="font-bold text-dark-gray">${produc.newPrice}</span>
                </p>
            </div>
            ))} 
              </div>
          </section>
        </section>
      </main>
    </>
  );
};
export default CarProduct;

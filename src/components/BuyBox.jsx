import { Link } from "react-router-dom";

const BuyBox = () => {
  return (
    <>
      <main className="w-full flex justify-center">
        <section className="flex w-[1440px] h-full bg-secondaryFundo flex-col gap-5">
          <section className="w-[468px] h-[532px] bg-white rounded-md mt-20 relative flex justify-center px-5">
            <div className="p-5 absolute flex w-full">
              <h2 className="font-bold text-[20px] py-5">Resumo</h2>
              <div className="border-t border-ligth-gray w-[90%] absolute top-24"></div>
              <div className="border-t border-ligth-gray w-[90%] absolute top-44"></div>
            </div>
            <div className="flex w-full justify-between p-5 top-44 absolute">
              <div className="w-full">
                <h2 className="text-dark-gray3 text-[16px] py-2">Subtotal:</h2>
                <h2 className="text-dark-gray3 text-[16px] py-2">Frete:</h2>
                <h2 className="text-dark-gray3 text-[16px] py-2">Desconto:</h2>
              </div>
              <div className="w-full flex flex-col justify-end items-end">
                <h2 className="text-dark-gray text-[16px] py-2">R$ 219,00</h2>
                <h2 className="text-dark-gray text-[16px] py-2">R$ 0,00</h2>
                <h2 className="text-dark-gray text-[16px] py-2">R$ 30,00</h2>
              </div>

              <div>
                <h2 className="text-dark-gray font-bold text-[20px] py-2">
                  Total
                </h2>
                <div>
                  <h2 className="text-primary font-semibold text-[16px] py-2">
                    R$ 219,00
                  </h2>
                  <h3 className="text-dark-gray3 text-[10px] absolute right-5 top-48">
                    ou 10x de R$ 21,00 sem juros
                  </h3>
                </div>
              </div>

              <Link to={``}>
                <button className="absolute bg-warning w-[408px] h-[50px] rounded-md text-white font-bold top-[215px] left-8">
                  Continuar
                </button>
              </Link>
            </div>
          </section>
          <div className="bg-white h-[538px] w-[750px] rounded-md flex relative justify-center">
            <div className="w-[690px] bg-white">
              <h5 className="top-3 py-7 text-dark-gray font-semibold text-[16px]">
                Informações Pessoais
              </h5>
              <div className="border-t border-2 w-[690px] top-16"></div>
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Nome Completo*
              </label>
              <input
                type="text"
                placeholder="Insira seu nome"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                CPF*
              </label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                E-mail*
              </label>
              <input
                type="text"
                placeholder="Insira seu email"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Celular*
              </label>
              <input
                type="text"
                placeholder="Insira seu celular"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
            </div>
          </div>
          <div className="bg-white h-[538px] w-[750px] rounded-md flex relative justify-center">
            <div className="w-[690px] bg-white">
              <h5 className="top-3 py-7 text-dark-gray font-semibold text-[16px]">
                Informações de entrega
              </h5>
              <div className="border-t border-2 w-[690px] top-16"></div>
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Endereço*
              </label>
              <input
                type="text"
                placeholder="Insira seu Endereço"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Bairro*
              </label>
              <input
                type="text"
                placeholder="Insira seu bairro"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Cidade*
              </label>
              <input
                type="text"
                placeholder="Insira sua cidade"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                CEP*
              </label>
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
            </div>
          </div>
          <div className="bg-white h-[538px] w-[750px] rounded-md flex relative justify-center">
            <div className="w-[690px] bg-white">
              <h5 className="top-3 py-7 text-dark-gray font-semibold text-[16px]">
                Informações de entrega
              </h5>
              <div className="border-t border-2 w-[690px] top-16"></div>
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Endereço*
              </label>
              <input
                type="text"
                placeholder="Insira seu Endereço"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Bairro*
              </label>
              <input
                type="text"
                placeholder="Insira seu bairro"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Cidade*
              </label>
              <input
                type="text"
                placeholder="Insira sua cidade"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                CEP*
              </label>
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
            </div>
          </div>
          <div className="bg-white h-[538px] w-[750px] rounded-md flex relative justify-center">
            <div className="w-[690px] bg-white">
              <h5 className="top-3 py-7 text-dark-gray font-semibold text-[16px]">
                Informações de Pagamento
              </h5>
              <div className="border-t border-2 w-[690px] top-16"></div>
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Forma de pagamento*
              </label>
              <input
                type="radio"
                placeholder="Insira seu Endereço"
                className="accent-pink-500 w-4 h-4"
              />
              <label className="px-2">Cartão de Crédito</label>
              <input
                type="radio"
                placeholder="Insira seu Endereço"
                className="accent-pink-500 w-4 h-4 p-5"
              />
              <label className="px-2">Boleto Bancário</label>
              <label className="py-2 flex text-dark-gray font-semibold text-[14px]">
                Nome do cartão*
              </label>
              <input
                type="text"
                placeholder="Insira seu bairro"
                className="w-full h-[60px] bg-ligth-gray3 block p-5"
              />
              <div className="w-[690px] h-[100px] flex justify-between">
                <div className="flex flex-col">
                  <label className="py-2">Cartão de Crédito</label>
                  <input
                    type="text"
                    placeholder="Insira o numero do cartão"
                    className="w-[332px] h-[60px] bg-ligth-gray3 p-5 block "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2">Data de validade do Cartão*</label>
                  <input
                    type="text"
                    placeholder="Insira a validade do Cartão"
                    className="w-[332px] h-[60px] bg-ligth-gray3 p-5 block "
                  />
                </div>
                <div className="flex flex-col absolute top-[350px]">
                  <label className="py-2">CVV *</label>
                  <input
                    type="text"
                    placeholder="CVV *"
                    className="w-[332px] h-[60px] bg-ligth-gray3 p-5 block "
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="bg-white h-[240px] w-[750px] rounded-md flex relative justify-center mb-10">
            <div className="w-[690px]">
              <h2 className="py-5 font-semibold">Finalizar Compra</h2>
              <div className="border-t border-2 w-[690px] top-16 absolute"></div>
              <div className="flex justify-between py-5">
                <h2 className="text-[20px] font-semibold">Total</h2>
                <div className="flex flex-col items-end">
                  <h2 className="text-[20px] font-semibold text-primary">
                    R$ 219,00
                  </h2>
                  <p className="text-[14px] text-ligth-gray">
                    ou 10x de R$ 21,00 sem juros
                  </p>
                </div>
              </div>
              <button className="h-[50px] justify-center w-full bg-warning text-white font-semibold rounded-md">
                Realizar Pagamento
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default BuyBox;

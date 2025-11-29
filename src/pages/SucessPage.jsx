import React from "react";
import { PaymentSummary } from "../components/PaymentSumary";
import { Link } from "react-router-dom";

export const SucessPage = ({ total }) => {
  return (
    <>
      <main className="flex w-full min-h-screen justify-center">
        <section className="bg-secondaryFundo flex flex-col items-center max-w-[1440px] w-full p-10">
          <div className="bg-white min-w-[315px] max-w-[838px] w-full p-10 flex flex-col gap-10 justify-center items-center">
            <img
              src="/public/congratulations.png"
              alt="Congragulations"
              className="w-16 "
            />
            <h2 className="text-[24px] font-bold text-center">
              Compra Realizada com Sucesso!
            </h2>
            <div className="border-t border-ligth-gray w-full"></div>
{/* Informações Pessoais */}
            <fieldset className="w-full flex flex-col gap-2">
              <legend className="text-[16px] text-dark-gray2 font-bold mb-3">
                Informações Pessoais
              </legend>
              {/* Note: Deve-se usar variáveis reais aqui, mas usamos placeholders por enquanto */}
              <h2 className="text-[14px] text-gray-600">Nome: <span className="font-medium text-dark-gray">João Silva</span></h2>
              <h2 className="text-[14px] text-gray-600">CPF: <span className="font-medium text-dark-gray">***.456.***-**</span></h2>
              <h2 className="text-[14px] text-gray-600">Email: <span className="font-medium text-dark-gray">joao.s@exemplo.com</span></h2>
              <h2 className="text-[14px] text-gray-600">Celular: <span className="font-medium text-dark-gray">(11) 98765-4321</span></h2>
              <div className="border-t border-gray-200 w-full mt-8"></div>
            </fieldset>

            {/* Informações de Entrega */}
            <fieldset className="w-full flex flex-col gap-2">
              <legend className="text-[16px] text-dark-gray2 font-bold mb-3">
                Informações de Entrega
              </legend>
              <h2 className="text-[14px] text-gray-600">Endereço: <span className="font-medium text-dark-gray">Rua das Flores, 123</span></h2>
              <h2 className="text-[14px] text-gray-600">Bairro: <span className="font-medium text-dark-gray">Jardim América</span></h2>
              <h2 className="text-[14px] text-gray-600">Cidade: <span className="font-medium text-dark-gray">São Paulo</span></h2>
              <h2 className="text-[14px] text-gray-600">CEP: <span className="font-medium text-dark-gray">01000-000</span></h2>
              <div className="border-t border-gray-200 w-full mt-8"></div>
            </fieldset>

            {/* Informações de Pagamento */}
            <fieldset className="w-full flex flex-col gap-2">
              <legend className="text-[16px] text-dark-gray2 font-bold mb-3">
                Informações de Pagamento
              </legend>
              <h2 className="text-[14px] text-gray-600">Titular do Cartão: <span className="font-medium text-dark-gray">João Silva</span></h2>
              <h2 className="text-[14px] text-gray-600">Final: <span className="font-medium text-dark-gray">**** **** **** 4321</span></h2>
              <div className="border-t border-gray-200 w-full mt-8"></div>
            </fieldset>

            {/* Resumo e Produtos */}
            <div className="flex flex-col w-full gap-5">
              <legend className="text-[16px] text-dark-gray2 font-bold">
                Resumo da Compra
              </legend>
              
              {/* Item de Produto (Exemplo) */}
              <fieldset className="w-full flex gap-5 items-center p-3 border border-gray-100 rounded-md">
                <div className="w-[71px] h-14 bg-secondary flex justify-center items-center">
                  <img
                    // Usando um placeholder genérico
                    src="/public/home-slide-4.png" 
                    alt="produto"
                    className="w-12 h-6"
                  />
                </div>
                <h2 className="text-[14px] text-dark-gray font-bold">
                  Tênis Nike Revolution 6 Next Nature <br /> Masculino
                </h2>
              </fieldset>
              <div className="flex w-full justify-between h-24 bg-warning/10 items-end mt-10">
                <PaymentSummary total={total} />
              </div>
              <button className="underline text-ligth-gray mt-5 hover:text-dark-gray">
                Imprimir Boleto
              </button>
            </div>
          </div>
          <Link 
          to="/"
          className="flex w-full justify-center">
            <button className="flex justify-center items-center text-white font-bold rounded-md w-full max-w-[778px] min-h-[50px] bg-warning mt-10 hover:bg-orange-600">
              Voltar para Home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

import React from "react";
import { OrderSumary } from "../components/OrderSumary";
import { PaymentSummary } from "../components/PaymentSumary";

export const PurchaseConfirmationPage = ( { cartItems, subtotal, shipping, discount, total, formatPrice } ) => {
  return (
    <main className="w-full flex flex-col items-center min-h-screen justify-center ">
      <section className="w-full max-w-[1440px] bg-secondaryFundo lg:flex flex-col lg:flex-row p-5">
        <div className="flex flex-col w-full lg:w-2/3 items-start">
          
          <h2 className="font-bold text-[18px] lg:text-[32px] p-5">
            Finalizar Compra
          </h2>
          
          <div
            className="
                        bg-white 
                        w-min-[310px] min-h-[538px] w-full
                        lg:max-w-[750px]
                        p-5 
                        rounded-md
                        flex flex-col
                        gap-5
                        "
          >
            {/* Informações do Cliente */}
            {/* ---------------------------------------------------------------------------------- */}
            <fieldset
              className="                        
                        flex flex-col
                        gap-5
                        "
            >
              <legend className="font-bold text-[14px] text-dark-gray2 pb-5">
                Informações Pessoais
              </legend>
              <div className="flex border w-full] border-ligth-gray2"></div>
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                placeholder="Insira seu nome"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                CPF *
              </label>
              <input
                type="text"
                placeholder="Insira seu CPF"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                E-mail *
              </label>
              <input
                type="text"
                placeholder="Insira seu email"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Celular *
              </label>
              <input
                type="text"
                placeholder="Insira seu celular"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
            </fieldset>
            {/* Endereço do Cliente */}
            {/* ---------------------------------------------------------------------------------- */}
            <fieldset
              className="                        
                        flex flex-col
                        gap-5
                        "
            >
              <legend className="font-bold text-[14px] text-dark-gray2 pb-5">
                Informações de Entrega
              </legend>
              <div className="flex border w-full] border-ligth-gray2"></div>
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Endereço *
              </label>
              <input
                type="text"
                placeholder="Insira seu endereço"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Bairro *
              </label>
              <input
                type="text"
                placeholder="Insira seu bairro"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Cidade *
              </label>
              <input
                type="text"
                placeholder="Insira sua cidade"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                CEP *
              </label>
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Complemento
              </label>
              <input
                type="text"
                placeholder="Insira seu complemento"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
            </fieldset>
            {/* Dados de pagamento */}
            {/* ---------------------------------------------------------------------------------- */}
            <fieldset
              className="                        
                        flex flex-col
                        gap-5
                        text-[14px]
                        
                        "
            >
              <legend className="font-bold text-[14px] text-dark-gray2 pb-5">
                Informações de Pagamento
              </legend>
              <div className="flex border w-full] border-ligth-gray2"></div>
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Forma de pagamento
              </label>
              <input
                type="radio"
                placeholder="Insira seu nome"
                className="accent-primary w-6"
              />
              Cartão de Crédito
              <input
                type="radio"
                placeholder="Insira seu nome"
                className="accent-primary w-6"
              />
              Boleto Bancário
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Nome do Cartão *
              </label>
              <input
                type="text"
                placeholder="Insira o nome do Cartão"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Data e Número do Cartão *
              </label>
              <input
                type="text"
                placeholder="Insira o número do Cartão"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                Data de Validade do Cartão *
              </label>
              <input
                type="text"
                placeholder="Insira a validade do Cartão"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />
              <label
                htmlFor=""
                className="text-[12px] font-semibold text-dark-gray"
              >
                CVV *
              </label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full min-h-[60px] bg-ligth-gray3 p-5 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              />

              <div className="hidden lg:block">
                <h2 className="text-[14px] text-dark-gray2 font-bold py-5">Finalizar Compra</h2>
                <div className="border border-ligth-gray w-full"></div>
                <PaymentSummary 
                  total={total}
                />
              <button
                className="bg-warning w-full h-[60px] rounded-md text-white font-bold text-lg hover:bg-primary-dark transition duration-150 mt-6"
                onClick={() => console.log("Processando pagamento...")}
              >
                Realizar Pagamento
              </button>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-16">
          <OrderSumary
            cartItems={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
            formatPrice={formatPrice}
            showCheckoutButton={true}
          />
        </div>
      </section>
    </main>
  );
};

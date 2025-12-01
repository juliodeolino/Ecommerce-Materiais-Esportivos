import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <main className="w-full h-screen flex bg-gradient-to-b from-secondary to-secondaryFundo">
        <section
          className="
                      w-full h-full 
                      flex justify-center items-center 
                      lg:justify-start lg:items-start 
                      "
        >
          <div
            className="
                      bg-white 
                      max-w-[315px] max-h-[411px] 
                      lg:min-w-[583px] lg:min-h-[399px] 
                      flex flex-col 
                      items-center lg:items-start 
                      gap-5 p-5 
                      shadow-md shadow-ligth-gray2
                      lg:mt-52 lg:ml-28
                      "
          >
            <h2 className="text-[22px] lg:text-[32px] font-bold text-dark-gray">
              Crie sua Conta
            </h2>
            <h3 className="text-[14px]">
              Ja possui uma conta?{" "}
              <span>
                Entre <Link>aqui</Link>
              </span>
            </h3>
            <fieldset className="flex flex-col w-full">
              <label className="font-semibold text-dark-gray2 text-[12px]">
                Email*
              </label>
              <input
                type="text"
                placeholder="Insira seu email"
                className="h-14 bg-ligth-gray3 p-5 w-full flex"
              />
            </fieldset>
            <div className="w-full flex flex-col gap-5 items-center">
              <Link className="w-full">
                <button className="w-full min-h-[48px] bg-primary hover:bg-tertiary rounded-md text-white font-bold">
                  Criar Conta
                </button>
              </Link>
               <div className="flex flex-col gap-4 items-center lg:flex-row">
                <h3 className="text-[14px]">Ou faça Login com</h3>
                <div className="flex gap-5">
                  <img
                    src="/public/gmail 1.png"
                    alt="Email"
                    className="w-6 h-6"
                  />
                  <img
                    src="/public/Facebook1.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/public/pexels-melvin-buezo-2529148 1.png"
            alt="tenis"
            className="mt-32 ml-[1000px] absolute z-10 hidden lg:block"
          />
          <img
            src="/public/pexels-melvin-buezo-2529148 2.png"
            alt="tenis"
            className="mt-80 ml-[1250px] absolute z-10 hidden lg:block"
          />
        </section>
      </main>
    </>
  );
};

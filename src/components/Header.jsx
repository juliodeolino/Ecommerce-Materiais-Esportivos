import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
// Importe o novo componente CartDropdown
import CartDropdown from "./CartDropdown";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  const activeLinkClasses = ({ isActive }) =>
    isActive
      ? "text-primary border-b-2 border-primary font-semibold transition-colors duration-300"
      : "text-dark-gray transition-colors duration-300";

  const sidebarLinkClasses = ({ isActive }) =>
    isActive
      ? "text-primary border-b-2 border-primary w-28 font-bold transition-colors duration-300 py-3"
      : "text-dark-gray2 transition-colors duration-300 py-3";

  return (
    <>
      <header
        className="
      bg-white 
        lg:grid lg:grid-cols-2 
        lg:h-[192px] h-auto 
        relative 
        w-full
        mt-5 lg:mt-0  
        "
      >
        {/* ------------------------------------------------------------------- */}
        {/* 1. LINHA PRINCIPAL: Logo, Busca Desktop, Ícones Mobile e Carrinho */}
        <div
          className="
        flex items-center justify-center
        gap-10 
        col-span-2 
        "
        >
          {/* Botao hamburguer para mobile */}
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className="lg:hidden order-999 text-3xl text-dark-gray2 "
          >
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
          {/*Logo Digital COllege*/}
          <img
            src="assets/logo-header.svg"
            alt="Logo-Digital-Colege"
            className="h-[30px] w-auto lg:h-[44px] lg:min-w-[256px] order-1"
          />
          {/* Campo de busca tamanho desktop*/}
          <div className="w-full relative max-w-xl hidden lg:flex order-2">
            <span className="absolute inset-y-0 right-0 flex items-center mr-8 text-gray-500">
              <FaSearch />
            </span>
            <input
              id="Search"
              placeholder="Pesquisar produto..."
              type="text"
              className="w-[559px] bg-ligth-gray3 h-[60px] p-5 rounded-md"
            />
          </div>

          <div className="flex order-3 gap-4 lg:gap-8">
            {/*Icone de Lupa para Mobile*/}
            <button
              onClick={toggleSearch}
              className="text-1xl text-primary lg:hidden"
            >
              <FaSearch />
            </button>

            <Link
              to="/cadastro"
              className="whitespace-nowrap underline text-dark-gray2 hidden lg:flex"
            >
              Cadastre-se
            </Link>

            <button className="bg-primary w-[114px] h-[40px] rounded-xl text-white font-bold hover:bg-tertiary hidden lg:flex lg:justify-center lg:items-center">
              Entrar
            </button>

            {/* Menu do carrinho*/}
            <CartDropdown
              trigger={
                <IoCartOutline className="text-3xl text-primary hover:text-tertiary" />
              }
            />
          </div>
        </div>
        {/*--------------------------------------------------------------------------------------------------------------------------------------*/}
        {/*2. BARRA DE NAVEGAÇÃO / BUSCA MOBILE*/}
        <div
          className={`
                          w-full p-4 lg:hidden 
                          ${isSearchVisible ? "block" : "hidden"}
                      `}
        >
          <div className="w-full relative">
            {/* Ícone de pesquisa dentro da barra de pesquisa */}
            <span className="absolute inset-y-0 right-0 flex items-center mr-4 text-gray-500">
              <FaSearch />
            </span>
            <input
              placeholder="Pesquisar produto..."
              type="text"
              className="w-full bg-ligth-gray3 min-h-[60px] p-4 rounded-md text-sm"
            />
          </div>
        </div>
        {/*--------------------------------------------------------------------------------------------------------------------------------------*/}
        <div
          className="
                hidden lg:flex lg:flex-row lg:justify-center lg:h-[50px] lg:gap-5 lg:py-2 
            "
        >
          <NavLink to="/" className={activeLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/produtos" className={activeLinkClasses}>
            Produtos
          </NavLink>
          <NavLink to="/categorias" className={activeLinkClasses}>
            Categorias
          </NavLink>
          <NavLink to="/meus-pedidos" className={activeLinkClasses}>
            Meus Pedidos
          </NavLink>
        </div>
        {/*--------------------------------------------------------------------------------------------------------------------------------------*/}
        {/* Painel da Sidebar */}

        <div
    className={`
        fixed inset-0 bg-dark-gray3 bg-opacity-50 z-40 lg:hidden transition-opacity duration-300
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
    onClick={() => setisMenuOpen(false)} // Use setisMenuOpen, como definido no useState
/>
        <div
          className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 lg:hidden 
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
          <div className="p-6 flex flex-col h-full">
            {/* Botão Fechar (X) */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setisMenuOpen(false)}
                className="text-4xl text-dark-gray2 hover:text-primary"
              >
                &times;
              </button>
            </div>

            {/* Links de Navegação */}
            <nav className="flex flex-col  pb-4 mb-4">
              <NavLink
                to="/"
                className={sidebarLinkClasses}
                onClick={() => setisMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/produtos"
                className={sidebarLinkClasses}
                onClick={() => setisMenuOpen(false)}
              >
                Produtos
              </NavLink>
              <NavLink
                to="/categorias"
                className={sidebarLinkClasses}
                onClick={() => setisMenuOpen(false)}
              >
                Categorias
              </NavLink>
              <NavLink
                to="/meus-pedidos"
                className={sidebarLinkClasses}
                onClick={() => setisMenuOpen(false)}
              >
                Meus Pedidos
              </NavLink>
            </nav>

            {/* Opções de Login/Cadastro */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="border border-dark-gray3 order--999"></div>
              <Link
                to="/cadastro"
                className="text-center underline text-dark-gray2 hover:text-primary order-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadastre-se
              </Link>
              <button
                className="bg-primary w-full h-10 rounded-xl text-white font-bold hover:bg-tertiary order-1"
                onClick={() => {
                  /* Lógica de redirecionamento ou modal de Login */ setIsMenuOpen(
                    false
                  );
                }}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
// Importe o novo componente CartDropdown
import CartDropdown from "./CartDropdown";

const Header = () => {
  return (
    <>
      <header className="bg-white grid grid-cols-2 h-[192px] pt-10 relative">
        <div className="flex gap-10 col-span-2 items-center justify-center">
          <img
            src="assets/logo-header.svg"
            alt="Logo-Digital-Colege"
            className="h-[44px] w-[256px]"
          />
          <div className="w-full relative max-w-xl">
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
          <Link
            to="/cadastro"
            className="whitespace-nowrap underline text-dark-gray2"
          >
            Cadastre-se
          </Link>
          <button className="bg-primary w-[114px] h-[40px] rounded-xl text-white font-bold hover:bg-tertiary">
            Entrar
          </button>
          
          {/* Use o CartDropdown aqui */}
          <CartDropdown
            trigger={
              <IoCartOutline className="text-3xl text-primary hover:text-tertiary" />
            }
          />
        </div>
        <div className="flex w-full gap-5 pt-10 justify-center pl-11">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-dark-gray"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-dark-gray"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-dark-gray"
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to="/meus-pedidos"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary font-semibold"
                : "text-dark-gray"
            }
          >
            Meus Pedidos
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
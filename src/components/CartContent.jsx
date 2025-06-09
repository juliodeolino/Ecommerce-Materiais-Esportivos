import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';


const CartContent = () => {
  // Dados de exemplo para o carrinho. Em uma aplicação real, estes viriam de props ou de um gerenciador de estado.
  const cartItems = [
    { id: 1, name: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 219.00, oldPrice: 219.00, image: '/home-slide-0.png' },
    { id: 2, name: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 219.00, oldPrice: 219.00, image: '/home-slide-0.png' },
  ];

  const totalValue = cartItems.reduce((acc, item) => acc + item.price, 0);

      const navigate = useNavigate();
      const { idProduto } = useParams();
      const handleComprar = () => {
      navigate(`/produtos/detalhes/${idProduto}/carrinho`); 
    };

  return (
    // Removendo o 'absolute' daqui para que o componente pai (CartDropdown) posicione
    // Adicionando 'max-h' e 'overflow-y-auto' para lidar com muitos itens
    <div className="w-[315px] max-h-[460px] bg-white p-5 flex flex-col shadow-sm overflow-y-auto">
      <h2 className="text-[20px] font-semibold text-dark-gray py-5">
        Meu Carrinho
      </h2>
      <div className="border-t border-dark-gray3 border-1 mb-5"></div> {/* Adicionei mb-5 para espaçamento */}

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 py-4">Seu carrinho está vazio.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-5 w-full py-2"> {/* Alterado para py-2 para menos espaçamento entre itens */}
              <div className="w-[71px] h-[58px] bg-secondary flex justify-center items-center rounded-sm">
                <img
                  src={item.image}
                  alt="Produto"
                  className="w-[50px] h-[25px] object-cover rotate-[18deg]"
                />
              </div>
              <div className="flex flex-col flex-1"> {/* flex-1 para ocupar espaço restante */}
                <h2 className="text-[16px] font-semibold text-dark-gray leading-tight">
                  {item.name}
                </h2>
                <p className="text-[16px] font-bold text-dark-gray">
                  R${item.price.toFixed(2)}{" "}
                  {item.oldPrice && item.oldPrice > item.price && ( // Renderiza oldPrice apenas se existir e for maior
                    <span className="line-through text-ligth-gray font-normal text-[12px]">
                      R${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Ajustando o posicionamento e classes aqui */}
      <div className="mt-auto pt-5"> {/* 'mt-auto' empurra este div para o final do flex container */}
        <div className="border-t border-dark-gray3 border-1 mb-3"></div>
        <div className="w-full flex justify-between mb-3">
          <h2 className="text-[20px] font-bold">Valor Total:</h2>
          <h2 className="font-semibold text-primary">R$ {totalValue.toFixed(2)}</h2>
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="text-dark-gray2 underline cursor-pointer hover:text-dark-gray">Esvaziar</h3>
        <Link
        to={`/produtos/detalhes/${idProduto}/carrinho`}
        >
          <button className="w-[124px] h-[40px] text-white bg-primary font-bold rounded-md text-[16px] hover:bg-tertiary transition-colors">
            Ver Carrinho
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
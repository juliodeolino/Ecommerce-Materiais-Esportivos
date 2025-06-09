import React, { useState, useRef, useEffect } from 'react';
import CartContent from './CartContent'; // Importe o componente de conteúdo do carrinho

const CartDropdown = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref para detectar cliques fora

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o dropdown estiver aberto e o clique não for dentro do dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // O container principal do dropdown, que terá a posição relativa
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* O elemento que aciona o dropdown (o ícone do carrinho) */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      {/* O conteúdo do dropdown, renderizado condicionalmente */}
      {isOpen && (
        <div
          // Classes para posicionar o dropdown à direita e no topo
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="cart-menu"
        >
          {/* Renderiza o seu componente de carrinho aqui */}
          <CartContent />
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
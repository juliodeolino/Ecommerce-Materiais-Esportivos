import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { OrderSumary } from "../components/OrderSumary";

// -----------------------------------------------------------
// 1. DADOS MOCKADOS (Constantes)
// Nomenclatura ajustada para 'products' (padrão em JS/React)
// -----------------------------------------------------------

const products = [
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


// -----------------------------------------------------------
// 2. COMPONENTE PRINCIPAL
// -----------------------------------------------------------

const CarPage = () => {
  // ---------------------------------------------------
  // 2.1. HOOKS DE ESTADO
  // ---------------------------------------------------
  const [cartItems, setCartItems] = useState(
    // Adiciona a propriedade 'quantity' inicial a cada produto
    products.slice(0, 1).map((product) => ({ ...product, quantity: 1 })) // Mostra apenas o primeiro item como exemplo
  );
  const [coupon, setCoupon] = useState("");
  const [cep, setCep] = useState("");

  // ---------------------------------------------------
  // 2.2. HANDLERS DE FUNÇÃO DO CARRINHO
  // ---------------------------------------------------

  // Função para atualizar a quantidade de um item específico
  const updateQuantity = (itemId, newQuantity) => {
    // Garante que a quantidade mínima é 1
    const quantity = Math.max(1, parseInt(newQuantity) || 1);
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
    
  const handleDecrement = (itemId) => {
    setCartItems((prevItems) => 
        prevItems.map((item) => 
            item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        )
    );
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) => 
        prevItems.map((item) => 
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
  };
    
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // ---------------------------------------------------
  // 2.3. LÓGICA DE CÁLCULO
  // ---------------------------------------------------
  
  // Calcula o subtotal de todos os itens no carrinho
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newPrice * item.quantity,
    0
  );

  // Exemplo de desconto e frete mockados
  const discount = 30.0;
  const shipping = 0.0; // Assume frete grátis por agora

  const total = subtotal + shipping - discount;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // ---------------------------------------------------
  // 2.4. RENDERIZAÇÃO (JSX)
  // ---------------------------------------------------
  
  // Se o carrinho estiver vazio
  if (cartItems.length === 0) {
      return (
          <main className="flex justify-center mt-20">
              <div className="text-center p-10 bg-white rounded-md shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio! 🛒</h2>
                  <Link to="/" className="text-primary hover:underline flex items-center justify-center">
                      Ir para a página inicial <HiArrowNarrowRight className="ml-2" />
                  </Link>
              </div>
          </main>
      );
  }

  return (
    <main className="flex justify-center">
      <section
        className={`
          lg:min-w-[1440px] w-full h-full 
          mt-10 flex 
          gap-4 
          justify-center items-center
          relative
          flex-col lg:flex-row
          bg-secondaryFundo
        `}
      >
        {/* Conteúdo Principal do Carrinho */}
        <div
          className={`
            lg:w-[890px] w-[315px]
            lg:p-5
            bg-white 
            rounded-md 
            lg:my-20 
            flex flex-col relative
          `}
        >
          {/* Cabeçalho da Tabela (Desktop) */}
          <div className="lg:grid lg:grid-cols-[1fr_150px_100px_100px] gap-4 h-5 p-10 hidden border-b border-gray-200">
            <h2 className="font-bold">MEU CARRINHO</h2>
            <h2 className="font-bold text-center">QUANTIDADE</h2>
            <h2 className="font-bold text-center">UNITÁRIO</h2>
            <h2 className="font-bold text-center">TOTAL</h2>
          </div>
            
          {/* Mapeia os itens do carrinho (Permite múltiplos itens) */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`
                w-full 
                flex flex-col lg:flex-row items-center lg:items-start 
                justify-center lg:justify-start 
                rounded-md lg:py-4 lg:px-10 border-b border-gray-100
              `}
            >
              {/* Detalhes do Produto */}
              <div className="flex w-full lg:w-auto items-center p-4 lg:p-0">
                <div
                  className={`
                    lg:w-[127px] lg:h-[104px] 
                    h-[58px] w-[71px] 
                    bg-gray-100 
                    flex justify-center items-center
                    rounded-md
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="lg:w-[120px] lg:h-[65px] object-cover"
                  />
                </div>
                <div className="lg:px-10 px-4 w-full">
                  <h2 className="text-[14px] lg:text-[16px] font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <h3 className="text-[12px]">
                    {item.description}
                  </h3>
                  <button
                     onClick={() => handleRemoveItem(item.id)}
                     className="block lg:hidden text-sm text-red-500 hover:text-red-700 underline mt-2"
                     aria-label={`Remover ${item.title} do carrinho`}
                   >
                     Remover item
                   </button>
                </div>
              </div>

              {/* Botões Adicionar e Decrementar Items */}
              <div className="flex flex-col items-center justify-center pt-2 lg:pt-0 w-full lg:w-[150px]">
                <div className="flex">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.quantity <= 1}
                    className="lg:w-9 lg:h-9 w-10 h-9 text-lg text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 rounded-l-md border border-gray-300 lg:border"
                    aria-label="Diminuir quantidade"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    min="1"
                    className="w-12 h-9 text-center appearance-none focus:outline-none border-t border-b border-gray-300"
                    aria-label={`Quantidade de ${item.title}`}
                  />
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="lg:w-9 lg:h-9 w-10 h-9 text-lg text-gray-700 bg-white hover:bg-gray-100 transition duration-150 rounded-r-md border border-gray-300 lg:border"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                 <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="hidden lg:block text-sm text-red-500 hover:text-red-700 underline mt-2 transition duration-150"
                    aria-label={`Remover ${item.title} do carrinho`}
                  >
                    Remover item
                  </button>
              </div>

              {/* Preços (Unitário e Total) */}
              <div className="flex justify-around w-full lg:w-auto py-4 lg:py-0">
                  {/* Unitário */}
                  <div className="flex flex-col items-center lg:w-[100px]">
                      <h2 className="block lg:hidden font-semibold">UNITÁRIO</h2>
                      <span className="text-gray-400 line-through text-[14px]">{formatPrice(item.oldPrice)}</span>
                      <h3 className="text-[16px] font-bold text-gray-900">{formatPrice(item.newPrice)}</h3>
                  </div>
                  {/* Total do Item */}
                  <div className="flex flex-col items-center lg:w-[100px]">
                      <h2 className="block lg:hidden font-semibold">TOTAL</h2>
                      {/* O subtotal por item é o preço unitário * quantidade */}
                      <span className="text-gray-400 line-through text-[14px]">{formatPrice(item.oldPrice * item.quantity)}</span>
                      <h3 className="text-[16px] lg:text-[18px] font-bold text-gray-900">
                          {formatPrice(item.newPrice * item.quantity)}
                      </h3>
                  </div>
              </div>
            </div>
          ))}

          {/* Campos de Cupons e Frete */}
          <div className="flex flex-col lg:flex-row p-4 lg:p-10 justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-[16px] font-bold text-gray-700 my-2">
                Cupom de desconto
              </h2>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                <input
                  type="text"
                  placeholder="Insira seu código"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full lg:w-[270px] h-[48px] p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  className="w-full lg:w-[114px] h-[48px] bg-ligth-gray2  hover:bg-ligth-gray text-primary font-semibold rounded-r-md transition duration-150"
                  // onClick={handleApplyCoupon} // Adicionar lógica de aplicação
                >
                  OK
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-700 my-2">
                Calcular Frete
              </h2>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                <input
                  type="text"
                  placeholder="Insira seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-full lg:w-[270px] h-[48px] p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  className="w-full lg:w-[114px] h-[48px] bg-ligth-gray2  hover:bg-ligth-gray text-primary font-semibold rounded-r-md transition duration-150"
                  // onClick={handleCalculateShipping} // Adicionar lógica de cálculo
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        <OrderSumary 
          cartItems={cartItems}
          subtotal={subtotal}
          shiping={shipping}
          discount={discount}
          total={total}
          formatPrice={formatPrice}
          showCheckoutButton={true}
        />
      </section>
    </main>
  );
};

export default CarPage;
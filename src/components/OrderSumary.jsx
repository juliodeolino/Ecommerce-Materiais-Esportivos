import React from 'react';
import { Link } from 'react-router-dom'; 


export const OrderSumary = ({ 
    cartItems = [], // Define array vazia como padrão
    subtotal = 0,   // Define 0 como padrão
    shipping = 0,   // Define 0 como padrão
    discount = 0,   // Define 0 como padrão
    total = 0,      // Define 0 como padrão
    formatPrice = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`, 
    showCheckoutButton = true
}) => {

    const installmentPrice = total / 10;

    return (
        // O estilo da se   ção principal (315px/334px de largura)
        <section className="min-w-[310px] lg:w-[334px] bg-white rounded-md p-5 justify-center m-5">
            <h2 className="font-bold text-[20px] py-2 border-b border-gray-200 mb-4">Resumo</h2>
            
            {/* Subtotal */}
            <div className="flex justify-between py-2">
                <h3 className="text-gray-600 text-[16px]">Subtotal ({cartItems.length} {cartItems.length > 1 ? 'itens' : 'item'}):</h3>
                <span className="text-gray-800 text-[16px]">{formatPrice(subtotal)}</span>
            </div>

            {/* Frete */}
            <div className="flex justify-between py-2">
                <h3 className="text-gray-600 text-[16px]">Frete:</h3>
                <span className="text-green-600 text-[16px] font-semibold">{shipping === 0 ? 'Grátis' : formatPrice(shipping)}</span>
            </div>

            {/* Desconto */}
            <div className="flex justify-between py-2">
                <h3 className="text-gray-600 text-[16px]">Desconto:</h3>
                <span className="text-red-500 text-[16px]">- {formatPrice(discount)}</span>
            </div>
            
            {/* Total */}
            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                <h2 className="text-gray-800 font-bold text-[20px]">Total</h2>
                <div className="flex flex-col items-end">
                    <h2 className="text-red-500 font-bold text-[22px]">{formatPrice(total)}</h2>
                    <h3 className="text-gray-500 text-[12px] mt-1">
                        ou 10x de {formatPrice(installmentPrice)} sem juros
                    </h3>
                </div>
            </div>

            {/* Botão de Finalizar Compra - Aparece apenas no Carrinho, não no Checkout */}
            {/* Usamos showCheckoutButton = false nesta página de Checkout */}
            {showCheckoutButton && (
                <Link to="/confirmacao-compra" className="mt-6 block">
                    <button className="bg-warning w-full h-[48px] rounded-md text-white font-bold hover:bg-orange-600 transition duration-150">
                        Finalizar Compra
                    </button>
                </Link>
            )}
        </section>
    );
};
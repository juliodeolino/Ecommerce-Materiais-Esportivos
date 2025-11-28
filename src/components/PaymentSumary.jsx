import React from 'react'

export const PaymentSummary = ({ 
    subtotal = 0,
    total = 0,
    // Garante que a função de formatação sempre exista
    formatPrice = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`
}) => {
    // Cálculo de parcelamento (mantido, mas pode ser removido se não for necessário)
    const installmentPrice = total / 10;

    return (
        // Contêiner com estilo de resumo padrão
        <section className="w-full bg-white rounded-md p-5">
            {/* Linha do Total */}
            <div className="mt-4 pt-4 flex justify-between items-center">
                <h2 className="text-gray-800 font-bold text-[20px]">Total a Pagar</h2>
                <div className="flex flex-col items-end">
                    <h2 className="text-red-500 font-bold text-[22px]">{formatPrice(total)}</h2>
                    <h3 className="text-gray-500 text-[12px] mt-1">
                        ou 10x de {formatPrice(installmentPrice)} sem juros
                    </h3>
                </div>
            </div>
        </section>
    );
};

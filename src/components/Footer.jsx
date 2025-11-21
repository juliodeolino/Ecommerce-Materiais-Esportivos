const Footer = () => {
  return (
    // Contêiner externo para centralizar o footer de largura limitada
    <div className="w-full flex justify-center bg-dark-gray">
      <footer
        className="
          w-full max-w-[1440px]
          h-full lg:h-[464px]
          bg-dark-gray 
          
          /* LAYOUT MOBILE: Coluna flexível (sem altura fixa) */
          flex flex-col gap-10 lg:gap-20 p-8 
          
          /* LAYOUT DESKTOP (lg): Linha flexível */
          lg:flex-row lg:justify-start lg:pt-11 lg:pb-8
          relative /* Mantido para o elemento de direitos autorais */
        "
      >
        {/* ---------------------------------------------------- */}
        {/* 1. Logo e Redes Sociais */}
        {/* Largura flexível no mobile, largura definida no desktop */}
        <div className="
          w-full lg:w-80
          h-auto /* Removida altura fixa */
          lg:min-w-[170px]
          order-1 /* Mantém a ordem */
        ">
          <img src="/assets/logo-footer.svg" alt="Digital-College" className="h-[29px] w-auto" />
          <p className="text-white pt-8 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            vel vero, nulla officiis eos voluptas at ad tempora sint
            temporibus.
          </p>
          <div className="flex gap-6 pt-8">
            <a href="#"><img src="/assets/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/assets/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/assets/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
        
        {/* ---------------------------------------------------- */}
        {/* 2. Informações e Categorias */}
        {/* No mobile, usa grid-cols-2. No desktop, usa flexbox para ficar ao lado da logo. */}
        <div className="
          grid grid-cols-2 gap-x-8 /* Mobile: Duas colunas na mesma linha */
          w-full mt-0 /* Removido mt-20 e h-[218px] */
          lg:flex lg:gap-20 lg:ml-20 lg:mt-0 
          order-2
        ">
          
          {/* Informação */}
          <div className="text-white">
            <h2 className="font-bold py-3">Informação</h2>
            <ul>
              <li className="py-1">Sobre Drip Store</li>
              <li className="py-1">Segurança</li>
              <li className="py-1">Wishlist</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Trabalhe conosco</li>
              <li className="py-1">Meus Pedidos</li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="text-white">
            <h2 className="font-bold py-3">Categorias</h2>
            <ul>
              <li className="py-1">Camisetas</li>
              <li className="py-1">Calças</li>
              <li className="py-1">Bonés</li>
              <li className="py-1">Headphones</li>
              <li className="py-1">Tênis</li>
            </ul>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. Contato */}
        <div className="text-white w-full lg:w-[233px] mt-0 order-3 mb-5">
          <h2 className="font-bold py-3">Contato</h2>
          <p className="pt-3">
            Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="py-2">(85) 3051-3411</p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 4. Rodapé Inferior (Direitos Autorais) */}
        {/* Posicionamento relativo, sem margem ou altura fixa */}
        <div className="
            w-full 
            border-t border-white/50 
            pt-4 text-center 
            lg:col-span-4 /* Ocupa toda a largura do footer */
            absolute bottom-4 left-0 lg:bottom-4
        ">
          <p className="text-white text-sm">@ 2022 Digital College</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
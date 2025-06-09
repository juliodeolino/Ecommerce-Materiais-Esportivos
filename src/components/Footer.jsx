const Footer = () => {
  return (
    <>
      <div className="w-full justify-center flex">
        <footer className="flex w-full max-w-[1440px] h-[454px] bg-dark-gray items-start justify-around pt-11">
          {/* Logo e redes sociais */}
          <div className="w-80">
            <img src="/assets/logo-footer.svg" alt="Digital-College" />
            <p className="text-white pt-8 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              vel vero, nulla officiis eos voluptas at ad tempora sint
              temporibus.
            </p>
            <div className="flex gap-6 pt-8">
              <a href="#">
                <img src="/assets/facebook.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="/assets/instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/assets/twitter.svg" alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Informações */}
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

          {/* Contato */}
          <div className="text-white w-[233px]">
            <h2 className="font-bold py-3">Contato</h2>
            <p className="pt-3">
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="py-2">(85) 3051-3411</p>
          </div>
          <div className="w-[1240px] border-t border-white/50 mt-80 pt-4 text-center absolute">
            <p className="text-white text-sm">@ 2022 Digital College</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

import Button from "../components/Button";
import BannerBackground from "../assets/banner/backgroundBanner.jpg";
import ProductsBackground from "../assets/products/productsBackground.jpg";
import GirlImageBanner from "../assets/banner/mulherBanner.png";
import Products from "../components/Products";
import BubbleGray from "../assets/bubblesGray.png";
import Categories from "../components/Categories";
import StoreImage from "../assets/store.png";
import FinalContent from "../assets/finalContent.png";
import Girl2 from "../assets/girl2.png";
import Like from "../assets/like.png";
import ImageFooter from "./../assets/bubbles2.png";
import SocialWhats from "./../assets/logo-whatsapp.svg";
import SocialInsta from "./../assets/logo-instagram.svg";
import SocialFace from "./../assets/logo-facebook.svg";
import logoDevelopment from "./../assets/logo-development.png";
import Logo2 from "../assets/logo2.svg";
import ArrowDown from "../assets/arrow-down.png";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative min-h-[82.5vh] bg-[#2B2D3C] overflow-hidden">
        <img
          src={BannerBackground}
          alt="background banner"
          className="absolute"
        />
        <div className="relative grid grid-cols-10 h-full ">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 md:col-start-2 lg:col-start-3 w-full h-full grid grid-cols-1 sm:grid-cols-2">
            <div className="h-full flex flex-col items-center sm:items-start text-center sm:text-left text-white pt-12">
              <h1 className="text-6xl font-bold">ILUMINE O SEU DIA A DIA!</h1>
              <h2 className="text-base font-light leading-7 mt-6">
                Aqui na Elétrica J. Santos queremos trazer mais luz para o seu
                dia a dia! Temos produtos para toda sua casa com a melhor
                qualidade e atendimento da região!
              </h2>
              <Button text={"VEJA NOSSOS PRODUTOS"} />
              <a
                href="#sobrenos"
                className="font-bold w-4/6 mt-4 px-4 py-3 border-[1px] border-white rounded-xl text-white text-center"
              >
                NOS CONHEÇA MELHOR
              </a>
              <a href="#sobrenos" className="w-4/6 mt-4 px-0 py-3 flex items-center justify-center sm:justify-start font-thin">
                <img src={ArrowDown} alt="seta para baixo" className="h-6 mr-1" />Role para ver mais
              </a>
            </div>

            <div className="h-full flex items-center relative min-h-[83vh]">
              <img
                src={GirlImageBanner}
                alt="Imagem mulher"
                className="absolute bottom-0 h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="flex justify-center mt-12">
        <div className="w-full grid grid-cols-10 relative">
          <img
            src={ProductsBackground}
            alt="background produtos"
            className=" absolute col-span-10 lg:col-span-7 col-start-1 lg:col-start-2"
          />

          <div className="col-span-6 col-start-3 w-full h-full grid grid-cols-2 z-10">
            <div className="h-full text-white pb-12 w-full col-span-2 pt-5 sm:pt-16 md:pt-36 lg:pt-56">
              <h2 className="flex justify-center items-center text-2xl font-bold mb-4 text-center">
                PRODUTOS EM DESTAQUE
              </h2>
              <Products />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center flex-col relative">
        <div className="w-full bg-azul_escuro flex items-center flex-col h-[320px] absolute"></div>
        <img
          src={BubbleGray}
          alt="Bolhas cinza"
          className="-ml-44 w-[85px] h-[85px] absolute"
        />
        <h2 className="w-full flex justify-center mt-14 text-2xl font-bold text-white z-10">
          Categorias
        </h2>

        <div className="w-full grid grid-cols-10">
          <div className="col-span-6 col-start-3 w-full h-full grid grid-cols-2 z-10">
            <div className="h-full text-white pb-12 w-full col-span-2">
              <Categories />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7]">
        <div className="flex justify-center relative">
          <h2 className="w-auto text-2xl font-bold text-azul_escuro z-10 pt-12 relative">
            SUA MELHOR OPÇÃO
            <img
              src={BubbleGray}
              alt="Bolhas cinza"
              className="absolute -left-16 top-6"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] ">
          <div className="flex items-end justify-center flex-col h-full relative">
            <div className="flex w-4/5 lg:w-3/5 justify-end items-center h-full relative py-4 z-20">
              <img
                src={StoreImage}
                alt=""
                className="z-10 w-auto h-4/5 relative"
              />
              <img
                src={Like}
                alt="Like"
                className="z-20 absolute left-0 bottom-4 block sm:hidden lg:block scale-50"
              />
            </div>

            <div className="h-5/6 rounded-xl w-2/5 bg-amarelo absolute right-16 z-10"></div>
            <div className="bg-azul_escuro h-1/2 w-full absolute"></div>
          </div>
          <div className="flex justify-center flex-col pl-6 items-center lg:items-start text-center lg:text-left">
            <p className="w-2/3 text-cinza_escuro font-thin">
              Desde 1970 somos especializados em materiais elétricos, sendo uma
              das principais distribuidoras do setor. Oferecemos os melhores
              produtos, com o preço que cabe no seu bolso e atende todas as
              necessidades do seu dia a dia. Aqui você irá encontrar lustres,
              luminárias, utilidades domésticas, ferramentas, acessórios,
              lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada
              padrão Eletropaulo, materiais elétricos em geral, equipamentos de
              segurança e comunicação.
            </p>
            <div className="my-6 text-center">
              <a
                href="#sobrenos"
                className="font-bold w-4/6 mt-4 px-4 py-3 bg-azul_escuro rounded-xl text-white text-center uppercase"
              >
                Saiba mais sobre nós
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center sm:items-end mt-8 flex-col sm:flex-row">
        <img
          src={FinalContent}
          alt=""
          className="h-[90%] absolute object-cover bottom-0"
        />
        <img src={Girl2} alt="" className="w-auto h-full relative -ml-28" />

        <div className="relative pb-14 pl-0 sm:pl-6">
          <Button text="ACIONE NOSSO TELEVENDAS" />
        </div>
      </div>
      <footer className="w-full bg-azul_escuro flex items-center flex-col relative  ">
        <div className="flex justify-between py-8 w-full px-[20%] text-white flex-col md:flex-row">
          <div className="flex flex-col items-center md:block text-center md:text-left">
            <img src={Logo2} alt="logo2" />
            <p className="w-full lg:w-[350px] mt-3 font-thin">
              Venha na Elétrica J. Santos e garanta a melhor opção para sua
              casa!
            </p>
          </div>
          <div className="font-thin flex items-center flex-col mt-12 md:mt-0">
            <p>NOS SIGA NAS REDES</p>
            <div className="flex gap-6 px-6 mt-5">
              <a href="#whatsapp" className="col-3 icon">
                <img src={SocialWhats} alt="whatsapp"></img>
              </a>
              <a href="#whatsapp" className="col-3 icon">
                <img src={SocialInsta} alt="instagram"></img>
              </a>
              <a href="#whatsapp" className="col-3 icon">
                <img src={SocialFace} alt="facebook"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-[20%]">
          <div className="bg-amarelo w-full h-[1px] my-6"></div>

          <div className="w-full flex flex-col items-center md:items-start text-center  md:text-left md:flex-row justify-between text-white pb-4 text-sm font-thin">
              <span className="py-6 md:py-0">© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</span>

              <p className="flex gap-2 items-center">Desenvolvido por <img src={logoDevelopment} alt="Logo empresa" className="h-5" /></p>
          </div>
        </div>
        <img src={ImageFooter} alt="Bolhas" className="absolute right-0 h-full py-14 hidden md:block" />
      </footer>
    </>
  );
};

export default Home;

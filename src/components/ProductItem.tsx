type Product = {
  id: number;
  name: string;
  descricao: string;
  preco: string;
  precoAtual: string;
  categoria: string;
  imagem: string;
};

type ProductProps = {
  item: Product;
  index: number;
};

const ProductItem = ({ item, index }: ProductProps) => {
  return (
    <a
      href="#a"
      key={index}
      className="relative w-full rounded-3xl shadow-md overflow-hidden bg-white"
    >
      <div className="relative flex flex-col">
        <img
          src={item.imagem}
          alt="name"
          className="w-full h-auto object-contain"
        />

        <div className="w-full flex justify-center">
          <div className="w-2/3 h-3 -mt-1.5 bg-azul_escuro rounded-lg"></div>
        </div>

        <div className="grid grid-cols-12 text-azul_escuro text-center">
          <div className="col-span-12 min-h-[60px] flex items-center justify-center font-semibold text-lg px-6 mb-4">
            {item.name}
          </div>
          <div className="py-2 col-span-5 decoratio line-through text-azul_escuro text-sm font-thin">
            {item.preco}
          </div>
          <div className="py-2 col-span-7 bg-amarelo rounded-l-xl">
            {item.precoAtual}
          </div>
          <div className="col-span-12 min-h-[50px] flex items-end justify-center">
            <div
              className={`rounded-t-lg px-4 py-1 text-sm text-cinza_escuro tracking-tight ${
                item.descricao != "" ? "bg-[#F7F7F7]" : ""
              }`}
            >
              {item.descricao}
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-0 bg-[#E0E0E0] rounded-e-lg px-3 shadow">
          <span className="text-azul_escuro text-xs flex justify-center items-center py-0.5 font-semibold">
            {item.categoria}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;

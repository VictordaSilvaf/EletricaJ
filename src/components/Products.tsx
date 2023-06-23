import ProductItem from "./ProductItem";
import Product1 from "./../assets/products/product1.png";
import Product2 from "./../assets/products/product2.png";
import Product3 from "./../assets/products/product3.png";
import Product4 from "./../assets/products/product4.png";
import Product5 from "./../assets/products/product5.png";
import Product6 from "./../assets/products/product6.png";
import Product7 from "./../assets/products/product7.png";
import Product8 from "./../assets/products/ventilador.png";

const products = [
  {
    id: 1,
    name: "Lustre suspenso rústico",
    descricao: "ou em 3x de R$ 333,33",
    preco: "R$ 1.500,00",
    precoAtual: "R$ 1.000,00",
    categoria: "Lustres",
    imagem: Product1,
  },
  {
    id: 2,
    name: "Lâmpada",
    descricao: "ou em 2x de R$ 22,50",
    preco: "R$ 120,00",
    precoAtual: "R$ 20,00",
    categoria: "Lâmpadas",
    imagem: Product2,
  },
  {
    id: 3,
    name: "Lustre suspenso rústico",
    descricao: "",
    preco: "R$ 130,00",
    precoAtual: "R$ 30,00",
    categoria: "Acessórios",
    imagem: Product3,
  },
  {
    id: 4,
    name: "Kit de ferramentas",
    descricao: "ou em 2x de R$ 22,50",
    preco: "R$ 140,00",
    precoAtual: "R$ 40,00",
    categoria: "Ferramentas",
    imagem: Product4,
  },
  {
    id: 5,
    name: "Garfos de mesa inox",
    descricao: "ou em 2x de R$ 22,50",
    preco: "R$ 150,00",
    precoAtual: "R$ 50,00",
    categoria: "Utensílios domésticos",
    imagem: Product5,
  },
  {
    id: 6,
    name: "Lustre suspenso rústico",
    descricao: "",
    preco: "R$ 160,00",
    precoAtual: "R$ 60,00",
    categoria: "Acessórios",
    imagem: Product6,
  },
  {
    id: 7,
    name: "Ventilador 2 em 1, mesa e parede",
    descricao: "",
    preco: "R$ 170,00",
    precoAtual: "R$ 70,00",
    categoria: "Utensílios domésticos",
    imagem: Product7,
  },
  {
    id: 8,
    name: "Lustre suspenso rústico",
    descricao: "ou em 2x de R$ 22,50",
    preco: "R$ 100,00",
    precoAtual: "R$ 80,00",
    categoria: "Acessórios",
    imagem: Product8,
  },
];

const Products = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((item, index) => {
        return (
            <ProductItem item={item} index={index} key={index}/>
        );
    })}
  </div>
  );
};

export default Products;

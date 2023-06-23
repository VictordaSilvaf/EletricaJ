type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <a
      href="#produtos"
      className="font-bold w-4/6 mt-6 px-4 py-3 bg-amarelo text-azul_escuro rounded-xl text-center shadow-amarelo shadow-lg-amarela whitespace-nowrap"
    >
      {text}
    </a>
  );
};

export default Button;

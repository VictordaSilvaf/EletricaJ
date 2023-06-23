type Category = {
  id: number;
  title: string;
  image: string;
};

type CategoryProps = {
  category: Category;
};

const CategoryItem = ({category}: CategoryProps) => {
  return (
    <a href='#a' key={category.id} className='text-center flex items-center justify-center flex-col mt-6'>
      <p className='mb-3 font-bold text-amarelo'>{category.title}</p>
      <div className="bg-amarelo rounded-[50px] p-8 w-[160px] h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] flex justify-center">
        <img src={category.image} alt="" className="h-full object-contain " />
      </div>
    </a>
  )
}

export default CategoryItem

import CategoryItem from "./../components/CategoryItem";
import CategoryImage1 from "./../assets/categories/category1.png";
import CategoryImage2 from "./../assets/categories/category2.png";
import CategoryImage3 from "./../assets/categories/category3.png";
import CategoryImage4 from "./../assets/categories/category4.png";
import CategoryImage5 from "./../assets/categories/category5.png";
import CategoryImage6 from "./../assets/categories/category6.png";
import CategoryImage7 from "./../assets/categories/category7.png";
import CategoryImage8 from "./../assets/categories/category8.png";

const categories = [
  {
    id: 1,
    title: "LÂMPADAS",
    image: CategoryImage1,
  },
  {
    id: 2,
    name: "Product 2",
    title: "LUSTRES",
    image: CategoryImage2,
  },
  {
    id: 3,
    title: "LUMINÁRIAS",
    image: CategoryImage3,
  },
  {
    id: 4,
    title: "DECORAÇÕES",
    image: CategoryImage4,
  },
  {
    id: 5,
    title: "ACESSÓRIOS",
    image: CategoryImage5,
  },
  {
    id: 6,
    title: "FERRAMENTAS",
    image: CategoryImage6,
  },
  {
    id: 7,
    title: "UTENSÍLIOS DOMÉSTICOS",
    image: CategoryImage7,
  },
  {
    id: 8,
    title: "CABOS",
    image: CategoryImage8,
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;

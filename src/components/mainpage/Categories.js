import Data from "./CategoriesData";

const Categories = () => {
  return (
    <section className="category">
      {Data.map((category, index) => {
        const { catImg, catName } = category;
        return (
          <div
            key={index}
            className="flex items-center space-x-3 px-3 py-2 hover:bg-[#e9ecef] hover:cursor-pointer transition-all duration-300"
          >
            <img src={catImg} alt="catImg" />
            <p className="text-lg">{catName}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Categories;

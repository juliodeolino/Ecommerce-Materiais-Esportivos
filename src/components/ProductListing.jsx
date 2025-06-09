import { SlArrowDown } from "react-icons/sl";
import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";


const produc = [
    {
      id: "1",
      image: "/produc-image-1.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "2",
      image: "/produc-image-2.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "3",
      image: "/produc-image-3.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "4",
      image: "/produc-image-4.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "5",
      image: "/produc-image-5.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "6",
      image: "/produc-image-1.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "7",
      image: "/produc-image-2.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
      id: "8",
      image: "/produc-image-3.jpeg",
      title: "tênis",
      description: "K-Swiss v8 - Masculino",
      oldPrice: 200,
      newPrice: 100,
    },
    {
        id: "9",
        image: "/produc-image-1.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "10",
        image: "/produc-image-2.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "11",
        image: "/produc-image-3.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "12",
        image: "/produc-image-4.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "13",
        image: "/produc-image-5.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "14",
        image: "/produc-image-2.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
      {
        id: "15",
        image: "/produc-image-3.jpeg",
        title: "tênis",
        description: "K-Swiss v8 - Masculino",
        oldPrice: 200,
        newPrice: 100,
      },
  ];

const ProductListing = () => {
    return ( 
        <>
            <main className="flex justify-center relative">
                <section className="w-[1440px] h-[2500px] bg-secondaryFundo relative flex justify-center mt-10">
                    <div className="absolute flex justify-between w-[90%] p-10">
                        <h2 className="text-[20px] font-semibold text-dark-gray2">Resultados para "Tênis" - <span className="text-[20px] font-normal ">389 produtos</span> </h2>
                        <button 
                        className="w-[332px] h-[60px] flex justify-between px-5 items-center rounded-sm border border-dark-gray2 font-bold">Ordernar por:
                        <SlArrowDown />
                        </button>
                    </div>
                    <section className="w-[904px] absolute top-[150px] right-20">
                        <div className=" grid grid-cols-3 gap-4">
                                {produc.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    oldPrice={item.oldPrice}
                                    newPrice={item.newPrice}
                                />
                                ))}
                            </div>
                        </section>
                        <FilterGroup />
                </section>
            </main>
        </>
     );
}
 
export default ProductListing;
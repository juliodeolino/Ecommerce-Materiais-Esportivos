import { Link } from "react-router-dom";

const ProductCard = ({ image, tilte, description, oldPrice, newPrice }) => {
    return ( 
        <>
            <div className="w-[292px] h-[439]" >
                <p className="text-[14px] p-1.5 bg-green-price w-[96px] h-[32px] rounded-full flex justify-center m-3 absolute font-semibold text-dark-gray2">30% OFF</p>
                <Link to="/produtos/detalhes/idProduto">
                <img src={image} alt="Produto" className="w-[292px] h-[321px] object-cover" />
                </Link>
                <h6 className="text-[10px] font-bold text-ligth-gray pt-3">{tilte}</h6>
                <h3 className="text-[28px] text-dark-gray2">{description}</h3>
                <p className="flex gap-3">
                    <span className="text-dark-gray3 line-through">${oldPrice}</span>
                    <span className="font-bold text-dark-gray">${newPrice}</span>
                </p>
            </div>
        </>
     );
}
 
export default ProductCard;
const CollectionCard = ({ image }) => {
    return ( 
        <>
            <div className="w-[338px] h-[212px] lg:min-w-[405px] lg:min-h-[251px] relative">
            <img src={image} 
            alt="Collection"
            className="w-full h-full" 
            />
            <div className="absolute inset-0 flex flex-col w-[full] justify-between">
                <p className="text-[14px] p-1.5 bg-green-price w-[96px] h-[32px] rounded-full flex justify-center mt-5 ml-8 font-semibold text-dark-gray2">30% OFF</p>
                <button className="bg-white w-[153px] h-[48px] rounded-md text-primary font-bold ml-8 mb-10 hover:bg-ligth-gray3">Comprar</button>
            </div>
            </div>
        </>
     );
}
 
export default CollectionCard;
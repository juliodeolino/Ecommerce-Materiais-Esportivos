import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage"
import PageLayout from "../layouts/PageLayout"
import ProdutListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import CarProduct from "../components/CarProdutct";
import BuyBox from "../components/BuyBox";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="produtos" element={<ProdutListingPage />}/>
                    <Route path="produtos/detalhes/:idProduto" element={<ProductViewPage />}/> 
                    <Route path="produtos/detalhes/:idProduto/carrinho" element={<CarProduct />}/>
                    <Route path="produtos/detalhes/:idProduto/carrinho/concluir" element={<BuyBox />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage"
import PageLayout from "../layouts/PageLayout"
import ProdutListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import CarProduct from "../components/CarProdutct";
import { CategoriesPage } from "../pages/CategoriesPage";
import { OrdersPage } from "../pages/OrdersPage";
import { RegistrationPage } from "../pages/RegistrationPage";

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
                    <Route path="produtos/detalhes/:idProduto/carrinho/concluir" element={<CarProduct />}/>
                    <Route path="categorias" element={<CategoriesPage />}/>
                    <Route path="meus-pedidos" element={<OrdersPage />}/>
                    <Route path="cadastro" element={<RegistrationPage />}/> 

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage"
import PageLayout from "../layouts/PageLayout"
import ProdutListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import { CategoriesPage } from "../pages/CategoriesPage";
import { OrdersPage } from "../pages/OrdersPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import  CarPage  from "../pages/CarPage"
import { PurchaseConfirmationPage } from "../pages/PurchaseConfirmationPage";
import { SucessPage } from "../pages/SucessPage";


const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="produtos" element={<ProdutListingPage />}/>
                    <Route path="produtos/detalhes/:idProduto" element={<ProductViewPage />}/> 
                    <Route path="produtos/detalhes/:idProduto/carrinho" element={<CarPage />}/>
                    <Route path="produtos/detalhes/:idProduto/carrinho/concluir" element={<CarPage />}/>
                    <Route path="categorias" element={<CategoriesPage />}/>
                    <Route path="meus-pedidos" element={<OrdersPage />}/>
                    <Route path="cadastro" element={<RegistrationPage />}/> 
                    <Route path="confirmacao-compra" element={<PurchaseConfirmationPage />}/>
                    <Route path="confirmacao-compra/pagina-sucesso" element={<SucessPage />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths; 
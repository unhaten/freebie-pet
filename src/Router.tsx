import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import CardDetail from "./pages/Shop/CardDetail/CardDetail";

// ! ROUTER === APP

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="shop" element={<Shop />}></Route>
                    <Route path="shop/:id" element={<CardDetail />}></Route>
                    <Route path="profile" element={<Profile />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                </Route>
                <Route path='*' element={<>page not found</>}></Route>
            </>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;

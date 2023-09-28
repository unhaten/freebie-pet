import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="shop" element={<Shop />}></Route>
            </Route>
        )
    );

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;

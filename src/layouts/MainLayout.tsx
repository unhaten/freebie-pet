import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <SubscriptionForm></SubscriptionForm>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;

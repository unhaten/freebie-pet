import "./home.module.scss";

import Hero from "./Hero/Hero";
import Goods from "./Goods/Goods";
import Browse from "./Browse/Browse";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Goods></Goods>
            <Browse></Browse>
            <Reviews></Reviews>
        </>
    );
};

export default Home;

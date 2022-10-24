import React from "react";
import HeaderNav from "../components/HeaderNav";
import FilterCariMobil from "../components/FilterCariMobil";
import DescDetailMobil from "../components/DescDetailMobil";
import Footer from "../components/Footer";

const DetailMobil = () => {
    return (
        <>
            <HeaderNav />
            <FilterCariMobil />
            <DescDetailMobil />
            <Footer />
        </>
    );
};

export default DetailMobil;

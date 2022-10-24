import React from "react";

import HeaderNav from "../components/HeaderNav";
import FilterCariMobil from "../components/FilterCariMobil";
import Footer from "../components/Footer";
import ListCariMobil from "../components/ListCariMobil";

const ResultCariMobil = () => {
    return (
        <>
            <HeaderNav />
            <FilterCariMobil />
            <ListCariMobil />
            <Footer />
        </>
    );
};

export default ResultCariMobil;

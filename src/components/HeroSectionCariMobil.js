import React from "react";
import { Link } from "react-router-dom";

import "../styles/HeroSectionStyle.css";
import img_car from "../assets/img_car.png";

const HeroSectionCariMobil = () => {
    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    {/* Jumbotroon Content */}
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="row mb-4 mt-5">
                            <div class="col-12">
                                <p class="jumbotroonTitle">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-12">
                                <p class="jumbotroonDesc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Jumbotroon Content */}

                    {/* Jumbotroon Image */}
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <img class="jumbotroonImage" src={img_car} />
                    </div>
                    {/* Akhir Jumbotroon Image */}
                </div>
            </div>
        </>
    );
};

export default HeroSectionCariMobil;

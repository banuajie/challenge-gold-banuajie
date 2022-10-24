import React from "react";

import "../styles/OurServicesStyle.css";
import img_service from "../assets/img_service.png";

const OurServices = () => {
    return (
        <>
            <div id="ourServices">
                <br />
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        {/* Our Services Image */}
                        <div class="col-lg-5 col-md-12 col-sm-12 justify-content-center">
                            <img class="ourServicesImage" src={img_service} />
                        </div>
                        {/* Akhir Our Services Image */}

                        {/* Our Services Content */}
                        <div class="col-lg-5 col-md-12 col-sm-12 justify-content-center">
                            <div class="row mb-3 mt-5">
                                <div class="col">
                                    <p class="ourServicesTitle">Best Car Rental for any kind of trip in (Lokasimu)!</p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <p class="ourServicesDesc">
                                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                                        meeting, dll.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <ul class="ourServicesList">
                                        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                        <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                        <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                        <li>Layanan Airport Transfer / Drop In Out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Our Services Content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurServices;

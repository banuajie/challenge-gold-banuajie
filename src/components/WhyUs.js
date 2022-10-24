import React from "react";

import "../styles/WhyUsStyle.css";
import icon_complete from "../assets/icon_complete.png";
import icon_price from "../assets/icon_price.png";
import icon_24hrs from "../assets/icon_24hrs.png";
import icon_professional from "../assets/icon_professional.png";

const WhyUs = () => {
    return (
        <>
            <div id="whyUs">
                <br />
                <div class="container mt-5">
                    {/* Why Us Title */}
                    <div class="row">
                        <div class="col col-12">
                            <p class="whyUsTitle">Why Us?</p>
                        </div>
                    </div>
                    {/* Akhir Why Us Title*/}

                    {/* Why Us Description */}
                    <div class="row">
                        <div class="col col-12">
                            <p class="whyUsDesc">Mengapa harus pilih Binar Car Rental?</p>
                        </div>
                    </div>
                    {/* Akhir Why Us Description */}

                    {/* Why Us Card */}
                    <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={icon_complete} class="card-img-top" alt="Mobil Lengkap" />
                                <div class="card-body">
                                    <h5 class="card-title">Mobil Lengkap</h5>
                                    <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={icon_price} class="card-img-top" alt="Harga Murah" />
                                <div class="card-body">
                                    <h5 class="card-title">Harga Murah</h5>
                                    <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={icon_24hrs} class="card-img-top" alt="Layanan 24 Jam" />
                                <div class="card-body">
                                    <h5 class="card-title">Layanan 24 Jam</h5>
                                    <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={icon_professional} class="card-img-top" alt="Sopir Profesional" />
                                <div class="card-body">
                                    <h5 class="card-title">Sopir Profesional</h5>
                                    <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Why Us Card */}
                </div>
            </div>
        </>
    );
};

export default WhyUs;

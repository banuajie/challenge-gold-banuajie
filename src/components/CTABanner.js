import React from "react";
import { Link } from "react-router-dom";

import "../styles/CTABannerStyle.css";

const CTABanner = () => {
    return (
        <>
            <div id="cTABanner">
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card text-center">
                                <div class="cardBody card-body">
                                    <p class="cardBodyTitle card-title mb-5">Sewa Mobil di (Lokasimu) Sekarang</p>
                                    <p class="cardBodyDesc card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <Link to="/car">
                                        <button type="button" class="btn btn-success">
                                            Mulai Sewa Mobil
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CTABanner;

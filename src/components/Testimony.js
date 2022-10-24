import React from "react";

import bg_testimony from "../assets/bg_testimony.png";
import icon_rating from "../assets/icon_rating.png";
import img_photo1 from "../assets/img_photo1.png";
import img_photo2 from "../assets/img_photo2.png";

import "../styles/TestimonyStyle.css";

const Testimony = () => {
    return (
        <>
            <div id="testimony">
                <br />
                <div class="container mt-5">
                    {/* Testimony Title */}
                    <div class="row text-center">
                        <div class="col-12">
                            <p class="testimonyTitle">Testimonial</p>
                        </div>
                    </div>
                    {/* Akhir Testimony Title */}

                    {/* Testimony Desc */}
                    <div class="row text-center">
                        <div class="col-12">
                            <p class="testimonyDesc">Berbagai review positif dari para pelanggan kami</p>
                        </div>
                    </div>
                    {/* Akhir Testimony Desc */}

                    {/* Testimony Carousel */}
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="2000">
                                        <img src={bg_testimony} class="d-block w-100" alt="Gambar 1" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <img src={img_photo1} />
                                                    </div>
                                                    <div class="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src={bg_testimony} class="d-block w-100" alt="Gambar 2" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <img src={img_photo2} />
                                                    </div>
                                                    <div class="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src={bg_testimony} class="d-block w-100" alt="Gambar 3" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-2">
                                                        <img src={img_photo1} />
                                                    </div>
                                                    <div class="col-lg-10 testimonyContent">
                                                        <img src={icon_rating} />
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet
                                                            consectetur adipiscing elit, sed do eiusmod.
                                                        </h5>
                                                        <p>John Dee 32, Bromo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Testimony Carousel */}
                </div>
            </div>
        </>
    );
};

export default Testimony;

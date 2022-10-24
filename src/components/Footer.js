import React from "react";

import icon_facebook from "../assets/icon_facebook.png";
import icon_instagram from "../assets/icon_instagram.png";
import icon_twitter from "../assets/icon_twitter.png";
import icon_mail from "../assets/icon_mail.png";
import icon_twitch from "../assets/icon_twitch.png";
import logo_banuajie from "../assets/logo_banuajie.svg";

import "../styles/FooterStyle.css";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <br />
                <div class="container mt-5">
                    <div class="row">
                        {/* Footer Address */}
                        <div class="footerAddress col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div class="row">
                                <div class="col">
                                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p>binarcarrental@gmail.com</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p>081-233-334-808</p>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Address */}

                        {/* Footer Navigation */}
                        <div class="footerNavigation col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div class="row">
                                <div class="col">
                                    <ul>
                                        <li>
                                            <a href="#ourServices">Our Services</a>
                                        </li>
                                        <li>
                                            <a href="#whyUs">Why Us</a>
                                        </li>
                                        <li>
                                            <a href="#testimony">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="#fAQ">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Menu */}

                        {/* Footer Sosmed */}
                        <div class="footerSosmed col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div class="row">
                                <div class="col">
                                    <p class="footerSosmedTitle">Connect with us</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    <img src={icon_facebook} />
                                </div>
                                <div class="col-2">
                                    <img src={icon_instagram} />
                                </div>
                                <div class="col-2">
                                    <img src={icon_twitter} />
                                </div>
                                <div class="col-2">
                                    <img src={icon_mail} />
                                </div>
                                <div class="col-2">
                                    <img src={icon_twitch} />
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Sosmed */}

                        {/* Footer Copyright */}
                        <div class="footerCopyright col-lg-3 col-md-6 col-sm-12 mb-5">
                            <div class="row">
                                <div class="col">
                                    <p class="footerCopyrightTitle">Copyright Binar 2022</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2">
                                    <img src={logo_banuajie} width="32px" height="32px" />
                                </div>
                                <div class="col">
                                    <h4>Banuajie</h4>
                                </div>
                            </div>
                        </div>
                        {/* Akhir Footer Copyright */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

import React from "react";

import "../styles/FAQStyle.css";

const FAQ = () => {
    return (
        <>
            <div id="fAQ">
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-12">
                            {/* FAQ Title */}
                            <div class="row">
                                <div class="col">
                                    <p class="fAQTitle">Frequently Asked Question</p>
                                </div>
                            </div>
                            {/* Akhir FAQ Title */}

                            {/* FAQ Description */}
                            <div class="row">
                                <div class="col">
                                    <p class="fAQDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            {/* Akhir FAQ Description */}
                        </div>

                        {/* FAQ */}
                        <div class="col-lg-7 col-md-7 col-sm-12 mb-5">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Apa saja syarat yang dibutuhkan?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Apakah Ada biaya antar-jemput?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Bagaimana jika terjadi kecelakaan
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam non nulla commodi cum quos delectus atque, odit unde, sit optio molestias reiciendis reprehenderit, rem eaque
                                            inventore quisquam aliquid harum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Akhir FAQ */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;

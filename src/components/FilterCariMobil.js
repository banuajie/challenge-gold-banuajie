import React from "react";

import "../styles/FilterCariMobilStyle.css";

const FilterCariMobil = ({ filterDataMobil, handleSubmit, setFilterDataMobil }) => {
    return (
        <section id="searchBar" class="mb-5" style={{ marginTop: "-50px" }}>
            <br />
            <br />
            <br />
            <div class="container d-flex justify-content-center">
                <div class="card p-3" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}>
                    <div class="row">
                        <div class="col-lg-3 d-flex flex-column justify-content-between">
                            <label htmlFor="namaMobil">Nama Mobil</label>
                            <input
                                class="p-1"
                                type="text"
                                id="namaMobil"
                                name="namaMobil"
                                style={{ height: "35px" }}
                                onChange={(cariMobil) => {
                                    setFilterDataMobil({ namaMobil: cariMobil.target.value });
                                }}
                                placeholder="Ketik nama/type mobil"
                            />
                        </div>

                        <div class="col-lg-3 d-flex flex-column justify-content-between">
                            <label htmlFor="category">Kategori</label>
                            <select
                                onChange={(cariMobil) => {
                                    setFilterDataMobil({ ...filterDataMobil, kategoriMobil: cariMobil.target.value });
                                }}
                                name="category"
                                id="category"
                                style={{ height: "35px" }}
                            >
                                <option value=""> Masukkan Kapasitas Mobil</option>
                                <option value="2 - 4 orang"> 2 - 4 orang</option>
                                <option value="4 - 6 orang"> 4 - 6 orang</option>
                                <option value="6 - 8 orang"> 6 - 8 orang</option>
                            </select>
                        </div>

                        <div class="col-lg-3 d-flex flex-column justify-content-between">
                            <label htmlFor="price">Harga</label>
                            <select
                                onChange={(cariMobil) => {
                                    setFilterDataMobil({ ...filterDataMobil, hargaMobil: cariMobil.target.value });
                                }}
                                class="p-1"
                                name="price"
                                id="price"
                                style={{ height: "35px" }}
                            >
                                <option value=""> Masukkan Harga Sewa /Hari</option>
                                <option value="400000"> &#60; Rp. 400.000</option>
                                <option value="400000-600000"> Rp. 400.000 - Rp.600.000</option>
                                <option value="600000"> &#62; Rp. 600.000 </option>
                            </select>
                        </div>

                        <div class="col-lg-2 d-flex flex-column justify-content-between">
                            <label htmlFor="status">Status</label>
                            <select class="p-1" name="status" id="status" style={{ height: "35px" }}>
                                <option value="disewa">Disewa</option>
                            </select>
                        </div>

                        <div class="col-lg-1 d-flex align-items-end">
                            <button class="btn btn-success p-1" style={{ width: "100%" }} onClick={handleSubmit}>
                                Cari Mobil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterCariMobil;

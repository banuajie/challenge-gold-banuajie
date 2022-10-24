import axios from "axios";
import FilterCariMobil from "./FilterCariMobil";
import React, { useState } from "react";
import bg_mobil from "../assets/bg_mobil.png";

const ListCariMobil = () => {
    const [cars, setCars] = useState([]);
    const [filterDataMobil, setFilterDataMobil] = useState({});
    const [loading, setLoading] = useState(false);

    const findCarFilter = async () => {
        setLoading(true);
        try {
            const data = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car/");
            let newData = data.data;
            if (!filterDataMobil.namaMobil && !filterDataMobil.kategoriMobil && !filterDataMobil.hargaMobil) {
                setCars(newData);
            } else if (filterDataMobil.namaMobil && !filterDataMobil.kategoriMobil && !filterDataMobil.hargaMobil) {
                const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterDataMobil.namaMobil.toLowerCase());
                setCars(selectResult);
            } else if (filterDataMobil.namaMobil && filterDataMobil.kategoriMobil && !filterDataMobil.hargaMobil) {
                const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterDataMobil.namaMobil.toLowerCase() && val.category?.toLowerCase() === filterDataMobil.kategoriMobil.toLowerCase());
                setCars(selectResult);
            } else {
                if (filterDataMobil.hargaMobil === "400000") {
                    console.log("a");
                    const selectResult = newData.filter(
                        (val) => val.name?.toLowerCase() === filterDataMobil.namaMobil.toLowerCase() && val.category?.toLowerCase() === filterDataMobil.kategoriMobil.toLowerCase() && filterDataMobil.hargaMobil >= val.price
                    );
                    setCars(selectResult);
                } else if (filterDataMobil.hargaMobil === "400000-600000") {
                    const selectResult = newData.filter(
                        (val) => val.name?.toLowerCase() === filterDataMobil.namaMobil.toLowerCase() && val.category?.toLowerCase() === filterDataMobil.kategoriMobil.toLowerCase() && val.price >= 400000 && val.price <= 600000
                    );
                    setCars(selectResult);
                } else {
                    const selectResult = newData.filter((val) => val.name?.toLowerCase() === filterDataMobil.namaMobil.toLowerCase() && val.category?.toLowerCase() === filterDataMobil.kategoriMobil.toLowerCase() && val.price >= 600000);
                    setCars(selectResult);
                }
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const handleSubmit = () => {
        findCarFilter();
    };

    return (
        <>
            <FilterCariMobil filterDataMobil={filterDataMobil} handleSubmit={handleSubmit} setFilterDataMobil={setFilterDataMobil} />
            <div id="cars">
                <div class="container">
                    <div class="row">
                        {!loading ? (
                            cars.length ? (
                                cars.map((car, index) => {
                                    return (
                                        <div key={index} class="col-lg-4 col-md-6 mt-4">
                                            <div class="card p-3 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                                {car.image ? <img src={car.image} alt="" style={{ width: "100%" }} /> : <img src={bg_mobil} alt="" style={{ width: "100%" }} />}

                                                <div>
                                                    <p>{car.name}</p>
                                                    {car.price ? <h5>Rp {car.price.toLocaleString("en-US")}/ Hari</h5> : <h5>Rp. 0</h5>}
                                                    <p class="fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                                    <a href={`/car/${car.id}`} class="btn btn-success" style={{ width: "100%" }}>
                                                        Pilih Mobil
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : cars.length === 0 ? null : (
                                <h3>Mobil Tidak Ditemukan</h3>
                            )
                        ) : (
                            <h3 class="text-center">Loading....</h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCariMobil;

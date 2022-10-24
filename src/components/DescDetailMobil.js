import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bg_mobil from "../assets/bg_mobil.png";

const DescDetailMobil = () => {
    const [car, setCar] = useState();
    let { id } = useParams();
    const [loading, setLoading] = useState(false);

    const loadCarDetail = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`);
            setCar(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadCarDetail();
    }, []);

    return (
        <>
            {!loading ? (
                car ? (
                    <div id="descDetailMobil">
                        <div class="container">
                            <div class="row mt-5">
                                {/* Deskripsi Detail Mobil */}
                                <div class="col-lg-8">
                                    <div class="card">
                                        <div class="card-body">
                                            <p>Tentang Paket</p>
                                            <p>Include</p>
                                            <ul>
                                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                                <li>Sudah termasuk bensin selama 12 jam</li>
                                                <li>Sudah termasuk Tiket Wisata</li>
                                                <li>Sudah termasuk pajak</li>
                                            </ul>

                                            <p>Exclude</p>
                                            <ul>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>

                                            <p>Refund, Reschedule, Overtime</p>
                                            <ul>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Akhir Deskripsi Detail Mobil */}

                                {/* Gambar Detail Mobil */}
                                <div class="col-lg-4">
                                    <div class=" row card p-3 d">
                                        <div class="col-12 p-5">{car.image ? <img src={car.image} alt="" style={{ width: "100%" }} /> : <img src={bg_mobil} alt="" style={{ width: "100%" }} />}</div>
                                        <div>
                                            <h4>{car.name}</h4>
                                            {car.category ? (
                                                <p>
                                                    <i class="ri-user-fill mr-2"></i> {car.category}
                                                </p>
                                            ) : (
                                                <p>
                                                    <i class="fa-regular fa-user mr-2"></i>tidak ada data
                                                </p>
                                            )}
                                        </div>
                                        <div class="d-flex justify-content-between my-3">
                                            <h4>Total</h4>
                                            {car.price ? <h5>Rp {car.price.toLocaleString("en-US")}/ Hari</h5> : <h5>Rp. 0</h5>}
                                        </div>
                                    </div>
                                </div>
                                {/* Akhir Gambar Detail Mobil */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 class="d-flex justify-content-center m-5"> Data Mobil Kosong</h2>
                )
            ) : (
                <h3 class="d-flex justify-content-center m-5">Loading...</h3>
            )}
        </>
    );
};

export default DescDetailMobil;

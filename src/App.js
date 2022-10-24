import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import CariMobil from "./routes/CariMobil";
import DetailMobil from "./routes/DetailMobil";
import NotFound from "./routes/NotFound";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<LandingPage />} />
                <Route path="car">
                    <Route index element={<CariMobil />} />
                    <Route path=":id" element={<DetailMobil />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

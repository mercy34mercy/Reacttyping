import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Startview } from "./start";
import { Game } from "./App";

export const RouterConfig: React.VFC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Startview />} />
                    <Route path="game" element={<Game/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
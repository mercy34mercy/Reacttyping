import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Startview } from "./Start/start";
import { Game } from "./Game/Game";
import { Result } from "./Result/result";

export const RouterConfig: React.VFC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Startview />} />
                    <Route path="game" element={<Game />} />
                    <Route path="result" element={<Result/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
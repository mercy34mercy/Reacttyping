import React from 'react';

const key = () => {
    const a: string = "あ"
    const b = a
    switch (a) {
        case 'あ':
            const keya = ["a"]
            return keya;
        case 'い':
            const keyi = ["i"]
            return keyi;
        case 'う':
            const keyu = ["u"]
            return keyu;
        case 'え':
            const keye = ["e"]
            return keye;
        case 'お':
            const keyo = ["o"]
            return keyo;
        case 'か':
            const keyka = ["ka", "ca"]
            return keyka;
        case 'き':
            const keyki = ["ki"]
            return keyki;
        default:
            return [""]

            
    }
}
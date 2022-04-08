import { type } from '@testing-library/user-event/dist/type';
import React, { } from 'react';

const key = () => {

    var _specificConvertList =
    {
        "ゃ": ["ya", "ha", "a"],
        "ゅ": ["yu", "hu", "u"],
        "ょ": ["yo", "ho", "o"],
        "ぁ": ["", "ha", "a"],
        "ぃ": ["yi", "hi", "i"],
        "ぅ": ["", "hu", "u"],
        "ぇ": ["ye", "he", "e"],
        "ぉ": ["", "", "ho"]
    }

    const _convertList = (char: string) => {
        switch (char) {
            case "あ":
                return ["a"] as string[]
            case "い":
                return ["i"]as string[]
            case "う":
                return ["u", "wu"]as string[]
            case "え":
                return ["e"]as string[]
            case "お":
                return ["o"]as string[]
            case "か":
                return ["ka", "ca"]as string[]
            case "き":
                return ["ki"]as string[]
            case "く":
                return ["ku"]as string[]
            case "け":
                return ["ke"]as string[]
            case "こ":
                return ["ko", "co"]as string[]
            case "さ":
                return ["sa"]as string[]
            case "し":
                return ["shi", "si", "ci"]as string[]
            case "す":
                return ["su"]as string[]
            case "せ":
                return ["se", "ce"]as string[]
            case "そ":
                return ["so"]as string[]
            case "た":
                return ["ta"]as string[]
            case "ち":
                return ["chi", "ti"]as string[]
            case "つ":
                return ["tsu", "tu"]as string[]
            case "て":
                return ["te"]as string[]
            case "と":
                return ["to"]as string[]
            case "な":
                return ["na"]as string[]
            case "に":
                return ["ni"]as string[]
            case "ぬ":
                return ["nu"]as string[]
            case "ね":
                return ["ne"]as string[]
            case "の":
                return ["no"]as string[]
            case "は":
                return ["ha"]as string[]
            case "ひ":
                return ["hi"]as string[]
            case "ふ":
                return ["fu", "hu"]as string[]
            case "へ":
                return ["he"]as string[]
            case "ほ":
                return ["ho"]as string[]
            case "ま":
                return ["ma"]as string[]
            case "み":
                return ["mi"]as string[]
            case "む":
                return ["mu"]as string[]
            case "め":
                return ["me"]as string[]
            case "も":
                return ["mo"]as string[]
            case "や":
                return ["ya"]as string[]
            case "ゆ":
                return ["yu"]as string[]
            case "よ":
                return ["yo"]as string[]
            case "ら":
                return ["ra"]as string[]
            case "り":
                return ["ri"]as string[]
            case "る":
                return ["ru"]as string[]
            case "れ":
                return ["re"]as string[]
            case "ろ":
                return ["ro"]as string[]
            case "わ":
                return ["wa"]as string[]
            case "を":
                return ["wo"]as string[]
            case "ん":
                return ["nn", "xn"]as string[]
            case "が":
                return ["ga"]as string[]
            case "ぎ":
                return ["gi"]as string[]
            case "ぐ":
                return ["gu"]as string[]
            case "げ":
                return ["ge"]as string[]
            case "ご":
                return ["go"]as string[]
            case "ざ":
                return ["za"]as string[]
            case "じ":
                return ["zi", "ji"]as string[]
            case "ず":
                return ["zu"]as string[]
            case "ぜ":
                return ["ze"]as string[]
            case "ぞ":
                return ["zo"]as string[]
            case "だ":
                return ["da"]as string[]
            case "ぢ":
                return ["di"]as string[]
            case "づ":
                return ["du"]as string[]
            case "で":
                return ["de"]as string[]
            case "ど":
                return ["do"]as string[]
            case "ば":
                return ["ba"]as string[]
            case "び":
                return ["bi"]as string[]
            case "ぶ":
                return ["bu"]as string[]
            case "べ":
                return ["be"]as string[]
            case "ぼ":
                return ["bo"]as string[]
            case "ぱ":
                return ["pa"]as string[]
            case "ぴ":
                return ["pi"]as string[]
            case "ぷ":
                return ["pu"]as string[]
            case "ぺ":
                return ["pe"]as string[]
            case "ぽ":
                return ["po"]as string[]
            case "ぁ":
                return ["la", "xa"]as string[]
            case "ぃ":
                return ["li", "xi"]as string[]
            case "ぅ":
                return ["lu", "xu"]as string[]
            case "ぇ":
                return ["le", "xe"]as string[]
            case "ぉ":
                return ["lo", "xo"]as string[]
            case "ゃ":
                return ["lya", "xya"]as string[]
            case "ゅ":
                return ["lyu", "xyu"]as string[]
            case "ょ":
                return ["lyo", "xyo"]as string[]
            case "ゎ":
                return ["lwa", "xwu"]as string[]
            case "っ":
                return ["ltu", "xtu"]as string[]
            case "ゐ":
                return ["i", "wyi"]as string[]
            case "ゑ":
                return ["e", "wye"]as string[]
            case "ヴ":
                return ["vu"]as string[]
        }

    }

    type property = {
        char: string[]
    }

    const specificConvert = (char: string) => {
        var result = _convertList(char);
        if (result) result = result.slice(0);
        return result;
    }
}
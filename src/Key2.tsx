import { type } from '@testing-library/user-event/dist/type';
import React, { } from 'react';

type keyprops = {
    question: string
}

export const Key2 = (props: keyprops) => {

    const [createdString, setcreateString] = React.useState("")
    const [str, setstr] = React.useState("")

    const createString = () => {
        if (props.question.length == 1) {
            return specificStringConvert(props.question[0])
        } else {
            console.log(specificStringConvert(props.question[0] + props.question[1]))
            return specificStringConvert(props.question[0] + props.question[1])
        }
    }

    const _specificConvertList = (char: string): string[] => {
        switch (char) {
            case "ゃ":
                return ["ya", "ha", "a"]
            case "ゅ":
                return ["yu", "hu", "u"]
            case "ょ":
                return ["yo", "ho", "o"]
            case "ぁ":
                return ["", "ha", "a"]
            case "ぃ":
                return ["yi", "hi", "i"]
            case "ぅ":
                return ["", "hu", "u"]
            case "ぇ":
                return ["ye", "he", "e"]
            case "ぉ":
                return ["", "", "ho"]
        }
        return ["e"]
    }

    const _convertList = (char: string): string[] => {
        switch (char) {
            case "あ":
                return ["a"]
            case "い":
                return ["i"]
            case "う":
                return ["u", "wu"]
            case "え":
                return ["e"]
            case "お":
                return ["o"]
            case "か":
                return ["ka", "ca"]
            case "き":
                return ["ki"]
            case "く":
                return ["ku"]
            case "け":
                return ["ke"]
            case "こ":
                return ["ko", "co"]
            case "さ":
                return ["sa"]
            case "し":
                return ["shi", "si", "ci"]
            case "す":
                return ["su"]
            case "せ":
                return ["se", "ce"]
            case "そ":
                return ["so"]
            case "た":
                return ["ta"]
            case "ち":
                return ["chi", "ti"]
            case "つ":
                return ["tsu", "tu"]
            case "て":
                return ["te"]
            case "と":
                return ["to"]
            case "な":
                return ["na"]
            case "に":
                return ["ni"]
            case "ぬ":
                return ["nu"]
            case "ね":
                return ["ne"]
            case "の":
                return ["no"]
            case "は":
                return ["ha"]
            case "ひ":
                return ["hi"]
            case "ふ":
                return ["fu", "hu"]
            case "へ":
                return ["he"]
            case "ほ":
                return ["ho"]
            case "ま":
                return ["ma"]
            case "み":
                return ["mi"]
            case "む":
                return ["mu"]
            case "め":
                return ["me"]
            case "も":
                return ["mo"]
            case "や":
                return ["ya"]
            case "ゆ":
                return ["yu"]
            case "よ":
                return ["yo"]
            case "ら":
                return ["ra"]
            case "り":
                return ["ri"]
            case "る":
                return ["ru"]
            case "れ":
                return ["re"]
            case "ろ":
                return ["ro"]
            case "わ":
                return ["wa"]
            case "を":
                return ["wo"]
            case "ん":
                return ["nn", "xn"]
            case "が":
                return ["ga"]
            case "ぎ":
                return ["gi"]
            case "ぐ":
                return ["gu"]
            case "げ":
                return ["ge"]
            case "ご":
                return ["go"]
            case "ざ":
                return ["za"]
            case "じ":
                return ["zi", "ji"]
            case "ず":
                return ["zu"]
            case "ぜ":
                return ["ze"]
            case "ぞ":
                return ["zo"]
            case "だ":
                return ["da"]
            case "ぢ":
                return ["di"]
            case "づ":
                return ["du"]
            case "で":
                return ["de"]
            case "ど":
                return ["do"]
            case "ば":
                return ["ba"]
            case "び":
                return ["bi"]
            case "ぶ":
                return ["bu"]
            case "べ":
                return ["be"]
            case "ぼ":
                return ["bo"]
            case "ぱ":
                return ["pa"]
            case "ぴ":
                return ["pi"]
            case "ぷ":
                return ["pu"]
            case "ぺ":
                return ["pe"]
            case "ぽ":
                return ["po"]
            case "ぁ":
                return ["la", "xa"]
            case "ぃ":
                return ["li", "xi"]
            case "ぅ":
                return ["lu", "xu"]
            case "ぇ":
                return ["le", "xe"]
            case "ぉ":
                return ["lo", "xo"]
            case "ゃ":
                return ["lya", "xya"]
            case "ゅ":
                return ["lyu", "xyu"]
            case "ょ":
                return ["lyo", "xyo"]
            case "ゎ":
                return ["lwa", "xwu"]
            case "っ":
                return ["ltu", "xtu"]
            case "ゐ":
                return ["i", "wyi"]
            case "ゑ":
                return ["e", "wye"]
            case "ヴ":
                return ["vu"]
        }
        return ["e"]

    }

    const specificStringConvert = (string: string): (string | string[])[] => {
        var result = [];
        switch (string[0]) {
            case "き":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("k" + specificConvert(string[1])[0]);
                break;
            case "し":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("s" + specificConvert(string[1])[0]);
                if (string[1] !== "ぃ") result.push("s" + specificConvert(string[1])[1]);
                break;
            case "ち":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("c" + specificConvert(string[1])[0]);
                result.push("t" + specificConvert(string[1])[0]);
                if (string[1] !== "ぃ") result.push("c" + specificConvert(string[1])[1]);
                break;
            case "て":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("t" + specificConvert(string[1])[1]);
                break;
            case "に":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("n" + specificConvert(string[1])[0]);
                break;
            case "ひ":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                // result.push("h" + specificConvert(string[1])[0]);
                break;
            case "み":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("m" + specificConvert(string[1])[0]);
                break;
            case "り":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("r" + specificConvert(string[1])[0]);
                break;
            case "う":
                if (string[1] === "ぃ" || string[1] === "ぇ" || string[1] === "ぉ")
                    result.push("w" + specificConvert(string[1])[2]);
                break;
            case "ふ":
                if (string[1] === "ぁ" || string[1] === "ぃ" || string[1] === "ぇ")
                    result.push("f" + specificConvert(string[1])[2]);
                else if (string[1] === 'ぉ') result.push("fo");
                break;
            case "ぎ":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("g" + specificConvert(string[1])[0]);
                break;
            case "じ":
                // if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                if (string[1] === "ゃ" || string[1] === "ゅ" || string[1] === "ょ")
                    result.push("j" + specificConvert(string[1])[2]);
                result.push("z" + specificConvert(string[1])[0]);
                result.push("j" + specificConvert(string[1])[0]);
                break;
            case "ぢ":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("d" + specificConvert(string[1])[0]);
                break;
            case "び":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("b" + specificConvert(string[1])[0]);
                break;
            case "で":
                if (string[1] === "ぁ" || string[1] === "ぅ" || string[1] === "ぉ") break;
                result.push("d" + specificConvert(string[1])[1]);
                break;
            case "ヴ":
                switch (string[1]) {
                    case "ぁ":
                        result.push("va");
                        break;
                    case "ぃ":
                        result.push("vi");
                        result.push("vyi");
                        break;
                    case "ぅ":
                        result.push("vu");
                        break;
                    case "ぇ":
                        result.push("ve");
                        result.push("vye");
                        break;
                    case "ぉ":
                        result.push("vo");
                        break;
                    case "ゃ":
                        result.push("vya");
                        break;
                    case "ゅ":
                        result.push("vyu");
                        break;
                    case "ょ":
                        result.push("vyo");
                        break;
                }
        }

        var str1 = convert(string[0]);
        str1 = (str1) ? str1 : [];
        var str2 = convert(string[1]);
        for (var i = 0; i < str1.length; i++) {
            for (var j = 0; j < str2.length; j++) {
                result.push([str1[i], str2[j]]);
            }
        }

        return result;
    }

    const convert = (char: string): string[] => {
        var result: string[] = _convertList(char);
        if (result) result = result.slice(0);
        return result;
    }
    const specificConvert = (char: string): string[] => {
        var result: string[] = _specificConvertList(char)
        if (result) result = result.slice(0);
        return result;
    }

    return createString()

}

export default Key2;
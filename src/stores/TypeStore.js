import { writable, derived } from "svelte/store";
import welcome from "$lib/images/svg/welcome.svg"

import bgAlpas from "$lib/images/png/alpas-bg.png"
import bgSapphire from "$lib/images/png/sapphire-bg.png"
import bgPinque from "$lib/images/png/pinque-bg.png"
import bgSigla from "$lib/images/png/sigla-bg.png"
import bgXP from "$lib/images/png/xp-bg.png"
import bgGuidon from "$lib/images/png/guidon-bg.png"
import bgPsw from "$lib/images/png/psw-bg.png"
import bgWeight from "$lib/images/png/weight-bg.png"
import bgCalc from "$lib/images/png/calc-bg.png"
import bgDict from "$lib/images/png/dict-bg.png"
import bgGradgen from "$lib/images/png/gradgen-bg.png"
import bgQR from "$lib/images/png/qr-bg.png"
import bgNotes from "$lib/images/png/notes-bg.png"
import bgVisual from "$lib/images/png/visual-bg.png"

import rightAlpas from "$lib/images/svg/alpas-right.svg"
import rightSapphire from "$lib/images/svg/sapphire-right.svg"
import rightPinque from "$lib/images/svg/pinque-right.svg"
import rightSigla from "$lib/images/svg/sigla-right.svg"
import rightXP from "$lib/images/svg/xp-right.svg"
import rightGuidon from "$lib/images/png/guidon-right.png"
import rightPsw from "$lib/images/svg/psw-right.svg"
import rightWeight from "$lib/images/svg/weight-right.svg"
import rightCalc from "$lib/images/svg/calc-right.svg"
import rightDict from "$lib/images/svg/dict-right.svg"
import rightGradgen from "$lib/images/svg/gradgen-right.svg"
import rightQR from "$lib/images/svg/qr-right.svg"
import rightNotes from "$lib/images/svg/notes-right.svg"
import rightVisual from "$lib/images/svg/visual-right.svg"

export const Type = writable("");
export const TypeStore = writable([
    {bg: welcome, right: welcome, link: "/"},
    {bg: bgAlpas, right: rightAlpas, link: "/artProjects/alpas", type: "design", id: 0},
    {bg: bgSapphire, right: rightSapphire, link: "/artProjects/sapphire",  type: "design", id: 1},
    {bg: bgPinque, right: rightPinque, link: "/artProjects/pinque",  type: "design", id: 2},
    {bg: bgSigla, right: rightSigla, link: "/artProjects/sigla",  type: "design", id: 3},
    {bg: bgXP, right: rightXP, link: "/artProjects/xp",  type: "design", id: 4},
    {bg: bgGuidon, right: rightGuidon, link: "/artProjects/guidon",  type: "design", id: 5},
    {bg: bgPsw, right: rightPsw, link: "/codeProjects/passGen", type: "code", id: 6},
    {bg: bgWeight, right: rightWeight, link: "/codeProjects/weightConv", type: "code", id: 7},
    {bg: bgCalc, right: rightCalc, link: "/codeProjects/simpleCalc", type: "code", id: 8},
    {bg: bgDict, right: rightDict, link: "/codeProjects/simpleDict", type: "code", id: 9},
    {bg: bgGradgen, right: rightGradgen, link: "/codeProjects/gradientGen", type: "code", id: 10},
    {bg: bgQR, right: rightQR, link: "/codeProjects/simpleQR", type: "code", id: 11},
    {bg: bgNotes, right: rightNotes, link: "/codeProjects/simpleNotes", type: "code", id: 12},
    {bg: bgVisual, right: rightVisual, link: "/codeProjects/sortingVisual", type: "code", id: 13},
]);
export const Filtered = derived(
    [Type, TypeStore], 
    ([$Type, $TypeStore]) => {
        if ($Type === "") return $TypeStore.filter(x => x.type != $Type)
        return $TypeStore.filter(x => x.type === $Type)
    }
);
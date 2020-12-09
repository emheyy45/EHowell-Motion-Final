import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { EasePack } from "gsap/EasePack";
import {RoughEase} from "gsap/EasePack";
import {Linear} from "gsap";


gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, EasePack, RoughEase);

const mainGaugeTL = gsap.timeline();
//const mapTL = gsap.timeline();
const logoTL = gsap.timeline();
const flamesTL = gsap.timeline();

//const pointTL = gsap.timeline();

export function logoAnimation(){
    logoTL.from("#Ford",3, {opacity:0, ease:RoughEase.ease.config({points:50, strength:2, clamp:true})})
        .from("#outer-circle", { duration: 1, drawSVG: "50% 50% 50%"})
        .to("#Ford", {opacity: 0, duration: 1, autoAlpha: 0})
        .to("#background-black", {duration: 1, scaleY:0, transformOrigin:"0% 50%"})
        .fromTo("#Fill-1", 1, {opacity: 0, y: 50}, {opacity: 1, y: 0})
        .fromTo("#Stroke-20", { alpha: 0, drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-18", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-16", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-14", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-12", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-10", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-8", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-6", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-4", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        
        return logoTL;
}


export function centerFlamesAnimation(){
    flamesTL.fromTo("#flames", 3, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%", ease:Linear.easeNone})
    // shapes fill in
    .fromTo("#flames", 1, {fill:"none"}, {fill:"green"})
    .fromTo("#Fill-3", 1, {opacity: 0, y: 50}, {opacity: 1, y: 0});
    
            
            
            return flamesTL;
}         
  


export function mainGaugeAnimation(){
    mainGaugeTL.from("#WaterDrop", {x:100, alpha: 0, duration: 1})
        .from("#Short", {x:100, alpha:0, duration: 1})
        .from("#Short-2", {x:100, alpha:0, duration: 1})
        .from("#Medium", {x:100, alpha:0, duration: 1})
        .from("#Long-1", {x:100, alpha:0, duration: 1})
        .from("#Long-2", {x:100, alpha:0, duration: 1});

    return mainGaugeTL;
}







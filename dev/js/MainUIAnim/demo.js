import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const mainGaugeTL = gsap.timeline();
const mapTL = gsap.timeline();
const logoTL = gsap.timeline();

//const pointTL = gsap.timeline();



export function mainGaugeAnimation(){
    mainGaugeTL.from("#Short", {x:100, alpha:0, duration: 1})
        .from("#Short-2", {x:100, alpha:0, duration: 1})
        .from("#Medium", {x:100, alpha:0, duration: 1})
        .from("#Long-1", {x:100, alpha:0, duration: 1})
        .from("#Long-2", {x:100, alpha:0, duration: 1});

    return mainGaugeTL;
}

export function mapAnimation(){
    mapTL.fromTo("#Stroke-20", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-18", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-16", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-14", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-12", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-10", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-8", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-6", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})
        .fromTo("#Stroke-4", {drawSVG: "0%"},{duration:.5, drawSVG: "100%"})


}

export function logoAnimation(){
    logoTL.from("#Ford", {content: 1, opacity: 0, y: 50, autoAlpha: 0})
        .from("#outer-circle", { duration: 1, drawSVG: "50% 50% 50%"})
        .to("#Ford", {opacity: 0, duration: 3})
        .to("#background-black", {opacity: 0, duration: 3})




}


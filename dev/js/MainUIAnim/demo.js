import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { EasePack } from "gsap/EasePack";
import {RoughEase} from "gsap/EasePack";
import {Bounce} from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {Power1} from "gsap";
//import {Power1} from "gsap";



gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, EasePack, RoughEase, MotionPathPlugin, Power1);

const mainGaugeTL = gsap.timeline();
//const mapTL = gsap.timeline();
const logoTL = gsap.timeline();
const flamesTL = gsap.timeline();
const musicTL = gsap.timeline();
const musicTextTL = gsap.timeline();
const pointerTL = gsap.timeline();
const speedoTL = gsap.timeline();
const triangleTL = gsap.timeline();
const labelTL = gsap.timeline();

//const pointTL = gsap.timeline();

export function logoAnimation(){
    logoTL.from("#Ford",3, {opacity:0, ease:RoughEase.ease.config({points:50, strength:2, clamp:true})})
        .from("#outer-circle", { duration: 1, drawSVG: "50% 50%"})
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
    flamesTL.from(".flames", 1, {alpha: 0, transformOrigin: origin, y:-100})
    
    
            
            
            return flamesTL;
}         
  


export function mainGaugeAnimation(){
    mainGaugeTL.from("#WaterDrop", {x:100, alpha: 0, duration: 1})
        .from("#Short", {x:100, alpha:0, duration: .5})
        .from("#Short-2", {x:100, alpha:0, duration: .5})
        .from("#Medium", {x:100, alpha:0, duration: .5})
        .from("#Long-1", {x:100, alpha:0, duration: .5})
        .from("#Long-2", {x:100, alpha:0, duration: .5});

    return mainGaugeTL;
}

export function musicAnimation(){
    musicTL.from("#SkullIcon", {alpha: 0, rotate: 360,transformOrigin: "50% 50%"});

    return musicTL;
}


export function musicTextAnimation(){
    musicTextTL.from("#Music",{alpha:0, x:0}, 1.5);

    return musicTextTL;
}


export function pointerAnimation(){
    pointerTL.fromTo ("#pointer-container", {transformOrigin: "50%, 50%", xPercent: 0, yPercent: 0}, {ease: 
        Bounce.easeOut, rotate: 100})
        .from("#pointer-container", {alpha: 0, transformOrigin: "50%, 50%", xPercent: 0, yPercent: 0}, {ease: 
            Bounce.easeOut, rotate: -200})

    return pointerTL;
}


export function speedoAnimation(){
    speedoTL.from("#Speedometer", {alpha: 0, rotate: 100, transformOrigin: "50% 50%"})

    return speedoTL;

}

export function triangleIconAnimation(){
    //triangleTL.from("#triangle", {motionPath: {path: "#Stroke-6", align: "#Stroke-6", alignOrigin: [0, 0]}, duration: 5, ease:"power1.inOut"})

    triangleTL.to("#triangle", {
        alpha: 0,
        duration: 5, 
        ease: "power1.inOut",
        immediateRender: true,
        motionPath: {
          path: "#Stroke-6",
          align: "#Stroke-6",
          alignOrigin: [0.5, 0.5],
          autoRotate: 90
        }
      });
      
 
    return triangleTL;
}

export function labelAnimation(){
    labelTL.from("#nitro",{opacity: "0% 100%"});

    return labelTL;
  
}

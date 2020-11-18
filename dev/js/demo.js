import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const flameRotateTL = gsap.timeline({repeat: -1});
flameRotateTL.from ("#Motion_Final-Copy", {duration:.60, rotate: 360, transformOrigin:"center", repeat: 2})
                .to ("#Motion_Final-Copy", {duration:2, scale: .60, transformOrigin:"center"})
     
            
export function flameRotateAnimation(){
}

const speedTL = gsap.timeline();

export function speedAnimation(){

    // morphTL.to("#blue",{duration: 1, morphSVG:"#star", fill:"#650467"});
    // return morphTL;

    speedTL.to("#Pendent",{duration: 1, morphSVG:"#Speedometer", fill:"#242424"},"speed")
            .from("#Pendent",{duration: 1,drawSVG:"0"})
            
            //.to("#dark-red-1",{duration: 1, morphSVG:"#dark-red-1"});
    return speedTL;
}



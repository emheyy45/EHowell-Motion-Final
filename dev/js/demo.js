import { gsap } from "gsap";



const flameRotateTL = gsap.timeline({repeat: -1});
flameRotateTL.from ("#Motion_Final-Copy", {duration:.60, rotate: 360, transformOrigin:"center", repeat: 2})
                .to ("#Motion_Final-Copy", {duration:2, scale: .60, transformOrigin:"center"})
     
            
export function flameRotateAnimation(){
}
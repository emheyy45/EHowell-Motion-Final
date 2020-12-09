import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import {mainGaugeAnimation, logoAnimation, centerFlamesAnimation} from "MainUIAnim/demo.js" ;


//import {speedCounter} from "MainUIAnim/speed.js" ;

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
      .add(centerFlamesAnimation())
      //.add(mapAnimation())    
      .add(mainGaugeAnimation());
    //  .add(speedCounter())
//mainTL.add(speedPointerAnimation());


GSDevTools.create();
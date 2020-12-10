import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import {mainGaugeAnimation, logoAnimation, centerFlamesAnimation, musicAnimation, musicTextAnimation } from "MainUIAnim/demo.js" ;



//import {speedCounter} from "MainUIAnim/speed.js" ;

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
      .add(centerFlamesAnimation(),"-=5")
      //.add(mapAnimation())    
      .add(mainGaugeAnimation(),"-=5")
      .add(musicAnimation(),"-=5")
      .add(musicTextAnimation(),"-=5")
    //  .add(speedCounter())
//mainTL.add(speedPointerAnimation());


GSDevTools.create();
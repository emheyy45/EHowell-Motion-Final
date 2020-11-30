import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {mainGaugeAnimation, mapAnimation, logoAnimation} from "MainUIAnim/demo.js" ;
import {speedCounter} from "MainUIAnim/speed.js" ;

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
      .add(mainGaugeAnimation())
      .add(mapAnimation())
      .add(speedCounter());
//mainTL.add(speedPointerAnimation());


GSDevTools.create();
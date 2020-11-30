import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {mainGaugeAnimation, mapAnimation, logoAnimation} from "MainUIAnim/demo.js" ;

gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();
mainTL.add(logoAnimation())
      .add(mainGaugeAnimation())
      .add(mapAnimation());
//mainTL.add(speedPointerAnimation());


GSDevTools.create();
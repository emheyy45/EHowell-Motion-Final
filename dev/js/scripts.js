import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {flameRotateAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(flameRotateAnimation());



GSDevTools.create();
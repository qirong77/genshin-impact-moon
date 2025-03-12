import "./style.css";
import "./common/index";
import { createStringRing } from "./components/start-ring";
import { createCircle } from "./components/circle-inside";
createStringRing();
createCircle("../public/circle/circle-A.png", "circle1");
createCircle("../public/circle/circle-C.png", "circle2");
createCircle("../public/circle/circle-B.png", "circle3");
createCircle("../public/circle/circle-D.png", "circle4");

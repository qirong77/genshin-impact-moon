import "./style.css";
import "./common/index";
import { createStringRing } from './components/start-ring';
import { createCircle } from "./components/createCircle";
import { createAxisStars } from "./components/axis-stars";
import { createBackground } from './components/background';
import { createMeteorBackground } from './components/meteor-background';
createAxisStars()
createStringRing({
    innerRadius: 0.57,
    outerRadius: 0.9,
});
createStringRing({
    innerRadius: 1.47,
    outerRadius: 1.6,
});
createStringRing({
    innerRadius: 2,
    outerRadius: 2.3,
});
createStringRing({
    innerRadius: 2.6,
    outerRadius: 3.0,
});
createCircle("../public/circle/circle-A.png", "circle1", {
    minOpacity: 0.75,
    maxOpacity: 1,
    circleSize: 2.4,
    rotationSpeed: -0.1,
});
createCircle("../public/circle/circle-C.png", "circle2", {
    minOpacity: 0.75,
    maxOpacity: 1,
    circleSize: 3.9,
    rotationSpeed: 0.12,
});
createCircle("../public/circle/circle-B.png", "circle3", {
    minOpacity: 0.75,
    maxOpacity: 1,
    circleSize: 4.4,
    rotationSpeed: -0.1,
});
createCircle("../public/circle/circle-D.png", "circle4", {
    minOpacity: 0.75,
    maxOpacity: 1,
    circleSize: 5.1,
    rotationSpeed: 0.15,
});

// 创建背景
createBackground();
// 创建流星背景
createMeteorBackground();
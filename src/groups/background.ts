import { scene, THREE } from "../common/main";
import { createBackground } from "../components/background";
import { createStarRing } from "../components/star-ring";

createBackground();
const starBackground = createStarRing({
    starCounts: 80,
    innerRadius:0.9,
    outerRadius:3.0,
    color: new THREE.Color(0xffffff),
});
scene.add(starBackground)
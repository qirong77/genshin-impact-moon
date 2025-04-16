import { THREE } from "@/common/main";
import moon from './moon'
import moonLight from "./moon-light";
import moonSecond from "./moon-second";
import moonShadow from "./moon-shadow";
const group = new THREE.Group();
group.add(moon);
group.add(moonLight);
group.add(moonSecond);
group.add(moonShadow);
export default group;

import moon from "./components/moon/group";
import moonBackground from "./components/moon-bg";
import moonStars from "./components/moon-stars";
import gsap from "gsap";
import { scene, THREE } from "@/common/main";

const group = new THREE.Group();
group.add(moon);
group.add(moonBackground);
group.add(moonStars);
function dispear() {
    gsap.to(group.position, {
        y: group.position.y + 5, // 向上移动 10 个单位
        duration: 5, // 动画持续时间 2 秒
        ease: "power2.out",
    });
    gsap.to(group, {
        opacity: 0, // 逐渐消失
        duration: 5, // 动画持续时间 2 秒
        ease: "power2.out",
        onComplete: () => {
            scene.remove(group); // 动画完成后从场景中移除
        },
    });
}
scene.add(group);
setTimeout(() => {
    dispear();
}, 3000);

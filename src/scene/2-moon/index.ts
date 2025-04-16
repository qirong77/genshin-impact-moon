import "./components/moon";
import "./components/moon-second";
import "./components/moon-shadow";
import "./components/moon-light";
import "./components/moon-bg";
import "./components/moon-stars";
import "./components/berlin-noise-background";
import { scene } from "@/common/main";
import { moonGroup } from "./moon-group";
import gsap from "gsap";

scene.add(moonGroup);

function dispear() {
    gsap.to(moonGroup.position, {
        y: moonGroup.position.y + 5, // 向上移动 10 个单位
        duration: 5, // 动画持续时间 2 秒
        ease: "power2.out"
    });
    gsap.to(moonGroup, {
        opacity: 0, // 逐渐消失
        duration: 5, // 动画持续时间 2 秒
        ease: "power2.out",
        onComplete: () => {
            scene.remove(moonGroup); // 动画完成后从场景中移除
        }
    });
}

setTimeout(() => {
    dispear();
}, 3000);
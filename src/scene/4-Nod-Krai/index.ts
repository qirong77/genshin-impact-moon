import { scene, THREE } from "@/common/main";
import { createMainImage } from "./card/createMainImage";
import gsap from "gsap";
import { createSceneWheelGui } from "../3-wheel/wheel-gui";
import { NodKraiMap } from "./EnumNodKrai";

import { MoonEvent } from "@/event";
import { createTabUI } from "./tab/tab-ui";

export const NodeKraiState = {
    isAnimation: false,
    isFirstShow: true,
};
const gui = createSceneWheelGui("Nod-Krai");
const mainImageMesh = createMainImage(gui);
const group = new THREE.Group();
group.add(mainImageMesh);
mainImageMesh.material.uniforms.u_time;
group.scale.set(1.2, 1.2, 1.2);
scene.add(group);
// 初始位置
const initialPosition = { x: 0, y: 0, z: 0 };
group.position.copy(new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z));

// 消失动画
const disappear = (imagePagh: string) => {
    NodeKraiState.isAnimation = true;
    NodeKraiState.isFirstShow = false;
    gsap.to(group.position, {
        x: -2,
        z: -2,
        duration: 0.8,
        ease: "power2.inOut",
    });
    gsap.to(mainImageMesh.material.uniforms.u_opacity, {
        value: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            mainImageMesh.material.uniforms.u_texture.value = new THREE.TextureLoader().load(imagePagh);
            appear();
        },
    });
};

// 出现动画
const appear = () => {
    group.position.set(2, 0, 2);
    mainImageMesh.material.uniforms.u_opacity.value = 0;
    gsap.to(group.position, {
        x: initialPosition.x,
        y: initialPosition.y,
        z: initialPosition.z,
        duration: 0.8,
        ease: "power2.inOut",
    });
    gsap.to(mainImageMesh.material.uniforms.u_opacity, {
        value: 1,
        duration: NodeKraiState.isFirstShow ? 5 : 1,
        ease: NodeKraiState.isFirstShow ? "circ.in" : "power1.inOut",
        onComplete: () => {
            NodeKraiState.isAnimation = false;
        },
    });
};

const TabUI = createTabUI({
    onClickReturn: () => {
        scene.remove(group);
        MoonEvent.dispatchEvent("custom-solar-reset", { detail: "reset" });
        TabUI.hide();
    },
    onTabChange: (title: string) => {
        // @ts-ignore
        disappear(NodKraiMap[title]);
    },
});

MoonEvent.addEventListener("custom-solar-node-krai-click", () => {
    NodeKraiState.isFirstShow = true;
    setTimeout(() => {
        scene.add(group);
        TabUI.show();
    }, 1500);
});
TabUI.hide();
scene.remove(group);

import { camera, THREE } from "@/common/main";
interface ICubeConfig {
    cube: THREE.Mesh;
    onHover?: () => void;
    onClick?: () => void;
    pointer: boolean;
}
class ThreeIntersectionObserver {
    _cubes: Array<THREE.Mesh> = [];
    _cubesMap: Map<string, ICubeConfig> = new Map();
    constructor() {
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        window.addEventListener(
            "mousemove",
            (event) => {
                // 计算鼠标在标准化设备坐标中的位置
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                // 通过鼠标位置更新射线
                raycaster.setFromCamera(mouse, camera);

                // 计算射线与场景中物体的交点
                const intersects = raycaster.intersectObjects(this._cubes);
                let pointer = false;
                intersects.forEach((intersect) => {
                    const cube = intersect.object as THREE.Mesh;
                    const cubeConfig = this._cubesMap.get(cube.name);
                    if (cubeConfig) {
                        cubeConfig.onHover && cubeConfig.onHover();
                        if (cubeConfig.pointer) {
                            pointer = true;
                        }
                    }
                });

                if (pointer) {
                    document.body.style.cursor = "pointer";
                } else {
                    document.body.style.cursor = "default";
                }
            },
            false
        );
        window.addEventListener(
            "click",
            (event) => {
                // 计算鼠标在标准化设备坐标中的位置
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                // 通过鼠标位置更新射线
                raycaster.setFromCamera(mouse, camera);

                // 计算射线与场景中物体的交点
                const intersects = raycaster.intersectObjects(this._cubes);
                intersects.forEach((intersect) => {
                    const cube = intersect.object as THREE.Mesh;
                    const cubeConfig = this._cubesMap.get(cube.name);
                    if (cubeConfig) {
                        cubeConfig.onClick && cubeConfig.onClick();
                    }
                });
            },
            false
        );
    }
    addCube(config: ICubeConfig) {
        if (!config.cube.name) {
            console.error("cube must have name");
            return;
        }
        this._cubes.push(config.cube);
        this._cubesMap.set(config.cube.name, config);
    }
}
export const threeIntersectionObserver = new ThreeIntersectionObserver();

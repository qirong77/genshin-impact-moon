import { gui } from "@/common/gui";

const sceneWheelFodler = gui.addFolder("SceneWheel");
sceneWheelFodler.close(); // 默认收起面板
export function createSceneWheelGui(guiName: string) {
    const folder = sceneWheelFodler.addFolder(guiName);
    return folder;
}

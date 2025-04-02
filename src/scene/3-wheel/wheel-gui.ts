import { gui } from "@/common/gui";

const sceneWheelFodler = gui.addFolder("SceneWheel");
export function createSceneWheelGui(guiName: string) {
    const folder = sceneWheelFodler.addFolder(guiName);
    folder.close(); // 默认收起面板
    return folder;
}

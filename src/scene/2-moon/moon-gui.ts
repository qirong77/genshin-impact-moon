import { gui } from "@/common/gui";

const sceneMoonFodler = gui.addFolder("SceneMoon");
sceneMoonFodler.close(); // 默认收起面板
export function createSceneMoonGui(guiName: string) {
    const folder = sceneMoonFodler.addFolder(guiName);
    return folder;
}

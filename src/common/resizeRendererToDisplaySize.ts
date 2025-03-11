import { WebGLRenderer } from "three";
import { camera, renderer } from "./main";

resizeRendererToDisplaySize(renderer, true);
function resizeRendererToDisplaySize(renderer: WebGLRenderer, init = false) {
  const canvas = renderer.domElement;
  // 避免正方形被拉扯
  const pixelRatio = window.devicePixelRatio;
  const width = Math.floor(canvas.clientWidth * pixelRatio);
  const height = Math.floor(canvas.clientHeight * pixelRatio);
  const needResize = canvas.width !== width || canvas.height !== height;
    //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  if (needResize || init) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
window.addEventListener("resize", () => resizeRendererToDisplaySize(renderer));
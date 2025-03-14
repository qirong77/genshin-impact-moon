import { THREE } from "../../common/main";

export function createSatellite(
    imagePath = "../../public/satellite.png",
    satelliteName = "satellitename",
    defaultValue = {
        position:[0,0,0],
        
    }
) {
    // 添加图片到圆环中心
    const textureLoader = new THREE.TextureLoader();    
    const satelliteTexture = textureLoader.load(imagePath);

const circleGeometry = new THREE.PlaneGeometry(1, 1); // 平面大小根据图片调整
const circleMaterial = new THREE.MeshBasicMaterial({
    map: satelliteTexture,
    transparent: true,
    side: THREE.DoubleSide,
    alphaTest: 0.5, // 处理透明度
})
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
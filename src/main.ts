import "./style.css";
import './common/index'
// import './groups/solar'
import './groups/background'

import videoPath from '@assets/audio/bg.mp3'
// 创建音频元素
const audio = document.createElement('audio')
console.log(videoPath)
// audio.src = videoPath;
audio.src = videoPath;

audio.loop = true
audio.autoplay = true
// 添加错误处理
audio.onerror = (e) => {
    console.error('音频加载失败:', e)
}
document.body.appendChild(audio)
// document.addEventListener('click', () => {
//     audio.play()
// })
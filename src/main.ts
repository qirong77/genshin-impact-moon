import "./style.css";
import './common/index'
import './groups/solar'
import './groups/background'

// 创建音频元素
const audio = document.createElement('audio')
audio.src = '../public/audio/bg.mp3'
audio.loop = true
audio.autoplay = true
// 添加错误处理
audio.onerror = (e) => {
    console.error('音频加载失败:', e)
}

document.body.appendChild(audio)
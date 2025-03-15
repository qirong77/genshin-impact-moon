import "./style.css";
import './common/index'
import './groups/solar'
import './groups/background'

// 创建音频元素
const audio = document.createElement('audio')
audio.src = '/audio/bg.mp3'
audio.loop = true

// 添加错误处理
audio.onerror = (e) => {
    console.error('音频加载失败:', e)
}

// 添加用户交互触发音频播放
const playAudio = () => {
    audio.play().catch(error => {
        console.error('音频播放失败:', error)
    })
    document.removeEventListener('click', playAudio)
}
document.body.appendChild(audio)
document.addEventListener('DOMContentLoaded', playAudio)
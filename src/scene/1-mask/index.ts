import videoPath from "@assets/audio/bg.mp3";
import GitHubPath from "@assets/item/github-mark-white.png";
import SATELLITE_PATH from "@assets/item/satellite.png";
import CIRCLE_PATH from "@assets/circle/circle-E.png";
import './mask.css'
const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.innerHTML = `
<div style="display: flex;flex-direction: column;">
  <div style="position: relative;height: 12.5rem;"> 
    <img style="position: absolute;width: 5rem;height: 5rem;" src="${SATELLITE_PATH}" alt=""> 
    <img style="position: absolute;width: 9rem;height: 9rem;" src="${CIRCLE_PATH}" alt=""> 
  </div>
  <div style="margin-top: 1.25rem;font-family: 'cursive', sans-serif;font-size: 1rem;letter-spacing: 0.125rem;animation: breathe 2s infinite ease-in-out;">
    🌟 点击开始 🌟
  </div>
</div>
`;

function addGitHubIcon() {
    const github = document.createElement("img");
    github.src = GitHubPath;
    github.classList.add("github-icon");
    github.classList.add("github");
    github.addEventListener("click", () => {
        window.open("https://github.com/qirong77/genshin-impact-moon", "_blank");
    });
    document.body.appendChild(github);
}

function addAudio() {
    // 创建音频元素
    const audio = document.createElement("audio");
    audio.src = videoPath;
    audio.loop = true;
    audio.autoplay = true;
    // 添加错误处理
    audio.onerror = (e) => {
        console.error("音频加载失败:", e);
    };
    document.body.appendChild(audio);
}
const onClickHandlers: Function[] = [];
export const sceneMask = {
    show() {
        document.body.appendChild(overlay);
        document.addEventListener("DOMContentLoaded", () => {
            overlay.addEventListener("click", () => {
                overlay.classList.add("fade-out");
                onClickHandlers.forEach((handler) => {
                    handler();
                });
                addGitHubIcon();
                addAudio();
            });
        });
    },
    onClick(fn: Function) {
        onClickHandlers.push(fn);
    },
};

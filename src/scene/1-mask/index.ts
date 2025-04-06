import videoPath from "@assets/audio/bg.mp3";
import GitHubPath from "@assets/item/github-mark-white.png";
const overlay = document.createElement("div");
import SATELLITE_PATH from "@assets/item/satellite.png";
import CIRCLE_PATH from "@assets/circle/circle-E.png";
import { MoonEvent } from "@/event";
overlay.classList.add("overlay");
overlay.innerHTML = `
<div style="display: flex;flex-direction: column;">
  <div style="position: relative;height: 200px;">
    <img style="position: absolute;width: 100px;height: 100px;" src="${SATELLITE_PATH}" alt="">
    <img style="position: absolute;width: 200px;height: 200px;;" src="${CIRCLE_PATH}" alt="">
  </div>
  <div style="margin-top: 20px;font-family: 'HYWenHei', 'Microsoft YaHei', sans-serif;font-size: 16px;letter-spacing: 2px;animation: breathe 2s infinite ease-in-out;">
    ★ 点击开始 ★
  </div>
</div>
`;
document.body.appendChild(overlay);
document.addEventListener("DOMContentLoaded", () => {
    overlay.addEventListener("click", () => {
        MoonEvent.dispatchEvent("custom-click-global-mask", { detail: "click" });
        overlay.classList.add("fade-out");
        addGitHubIcon();
        addAudio();
    });
});

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

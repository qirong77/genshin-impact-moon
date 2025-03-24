import "./style.css";
import "./common/index";
import "./groups/solar";
import "./groups/background";
import videoPath from "@assets/audio/bg.mp3";
import GitHubPath from "@assets/item/github-mark-white.png";
import { gui } from "./common/gui";
import { orbitCOntroler } from "./common/oribtControls";

const isProd = window.location.href.includes("github");
if (isProd) {
    gui.destroy();
    orbitCOntroler.dispose();
}
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            overlay.classList.add('fade-out');
            addGitHubIcon();
            addAudio();
        });
    }
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

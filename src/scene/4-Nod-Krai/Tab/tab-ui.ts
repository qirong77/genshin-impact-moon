import './tab.css'
const caption = document.createElement("div");
caption.className = "caption";
const sideTab = document.createElement("div");
sideTab.className = "side-tab";
document.body.appendChild(sideTab);
document.body.appendChild(caption);
// TAB切换时发送一个 window 事件
window.dispatchEvent(new CustomEvent("tab-change", ));
import './tab.css'
import { items } from './items'
import { NodKraiMap } from '../EnumNodKrai'

const caption = document.createElement("div");
caption.className = "caption";

const sideTab = document.createElement("div");
sideTab.className = "side-tab";

// 创建标题和描述元素
const title = document.createElement("h2");
const description = document.createElement("p");
caption.appendChild(title);
caption.appendChild(description);

// 创建并添加所有Tab项
items.forEach((item, index) => {
    const tabItem = document.createElement("div");
    tabItem.className = "side-tab-item";
    tabItem.innerText = item.title;
    tabItem.style.backgroundImage = `url(${NodKraiMap[item.titleEn]})`;
    
    // 点击事件处理
    tabItem.addEventListener("click", () => {
        // 移除其他Tab的active状态
        document.querySelectorAll(".side-tab-item").forEach(tab => {
            tab.classList.remove("active");
        });
        
        // 添加当前Tab的active状态
        tabItem.classList.add("active");
        
        // 更新标题和描述
        title.textContent = item.title;
        description.textContent = item.description;
        caption.classList.add("show");
        
        // 发送Tab切换事件
        window.dispatchEvent(new CustomEvent("tab-change", {
            detail: {
                index,
                titleEn: item.titleEn
            }
        }));
    });
    
    sideTab.appendChild(tabItem);
});

// 默认选中第一个Tab
const firstTab = sideTab.firstElementChild as HTMLElement;
if (firstTab) {
    firstTab.click();
}

document.body.appendChild(sideTab);
document.body.appendChild(caption);
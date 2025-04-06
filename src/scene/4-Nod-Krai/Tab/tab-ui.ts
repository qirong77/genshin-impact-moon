import "./tab.css";
import { items } from "./items";
import { NodKraiMap } from "../EnumNodKrai";
import TitleSvg from '@assets/Nod-Krai/title-decoration.svg'
export const createTabUI = (config: { onClickReturn: () => void; onTabChange: (title: string) => void }) => {
    const caption = document.createElement("div");
    caption.className = "caption";

    const sideTab = document.createElement("div");
    sideTab.className = "side-tab";

    const backButton = document.createElement("div");
    backButton.className = "back-button";
    backButton.innerText = "返回";
    backButton.addEventListener("click", () => {
        config.onClickReturn();
    });
    // 创建标题和描述元素
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    
    const leftDecoration = document.createElement("img");
    leftDecoration.src =TitleSvg;
    leftDecoration.className = "title-decoration left";
    
    const title = document.createElement("h2");
    
    const rightDecoration = document.createElement("img");
    rightDecoration.src =TitleSvg;
    rightDecoration.className = "title-decoration right";
    
    titleContainer.appendChild(leftDecoration);
    titleContainer.appendChild(title);
    titleContainer.appendChild(rightDecoration);
    
    const description = document.createElement("p");
    caption.appendChild(titleContainer);
    caption.appendChild(description);

    // 创建并添加所有Tab项
    items.forEach((item) => {
        const tabItem = document.createElement("div");
        tabItem.className = "side-tab-item";
        tabItem.innerText = item.title;
        tabItem.style.backgroundImage = `url(${NodKraiMap[item.titleEn]})`;

        // 点击事件处理
        tabItem.addEventListener("click", () => {
            // 移除其他Tab的active状态
            document.querySelectorAll(".side-tab-item").forEach((tab) => {
                tab.classList.remove("active");
            });

            // 添加当前Tab的active状态
            tabItem.classList.add("active");

            // 更新标题和描述
            title.textContent = item.title;
            config.onTabChange(item.titleEn);
            description.textContent = item.description;
            caption.classList.remove("show");
            // 使用 requestAnimationFrame 确保 DOM 更新后再添加 show 类
            requestAnimationFrame(() => {
                caption.classList.add("show");
            });
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
    document.body.appendChild(backButton);
    return {
        hide() {
            sideTab.classList.add("hide");
            caption.classList.add("hide");
            backButton.classList.add("hide");
            window.dispatchEvent(new CustomEvent("custom-back"));
        },
        show() {
            sideTab.classList.remove("hide");
            caption.classList.remove("hide");
            backButton.classList.remove("hide");
        },
    };
};

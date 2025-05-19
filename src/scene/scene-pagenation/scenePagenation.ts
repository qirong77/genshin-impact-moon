
const container = document.createElement("div");
const page1 = document.createElement("div");
const page2 = document.createElement("div");
const handleClickFns: Array<(tab: 'page1' | 'page2', before: 'page1' | 'page2') => void> = [];

// 设置基础样式
container.className = "scene-pagenation-container";
page1.className = "scene-pagenation-tab active";
page2.className = "scene-pagenation-tab";
page1.innerText = "页面1";
page2.innerText = "页面2";

let currentTab: 'page1' | 'page2' = 'page1';
// 切换 tab 的函数
function setActive(tab: 'page1' | 'page2') {
    if (tab === 'page1') {
        page1.classList.add('active');
        page2.classList.remove('active');
    } else {
        page2.classList.add('active');
        page1.classList.remove('active');
    }
    // 通知所有监听者
    handleClickFns.forEach(fn => fn(tab, currentTab));
    currentTab = tab;
}

// 绑定点击事件
page1.onclick = () => setActive('page1');
page2.onclick = () => setActive('page2');

// 挂载到页面
container.appendChild(page1);
container.appendChild(page2);
document.body.appendChild(container);

export const scenePagenation = {
    onClick(fn: (tab: 'page1' | 'page2', before: 'page1' | 'page2') => void) {
        handleClickFns.push(fn);
    }
};